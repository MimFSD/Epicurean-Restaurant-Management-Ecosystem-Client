

/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Swal from "sweetalert2";
import { auth } from "../../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(true)
    const EmailSingIn = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const provider = new GoogleAuthProvider();
    const googleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

   
    const LogInEmail = async (email, password) => {
        try {
            setLoading(true);
           return await signInWithEmailAndPassword(auth, email, password)
        
              
           
        } catch (error) {
            toast.error('something went wrong')
            return console.log(error);
        }
    }
    const ProfileUpdate = (name, photoURL) => {
        const navigate = useNavigate();
        return updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photoURL}`
        })
            .then(result => {
                if (result.user) {
                    navigate('/')
                }
            })
            .catch((error) => { toast.error(error) });
    }
    const LogOut = () => {
      
        signOut(auth)
            .then(async () => {
             
               const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/logout`,{withCredentials:true})
                console.log(data);
                setUser(null)
                toast.success('successfully logged out')
            })

            .catch(error => toast.error(error));


    }
    <Toaster />
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,async (currentUser) => {
            console.log('on auth state changed', currentUser);
            // get token form server using email
            setUser(currentUser);
           
            setLoading(false);
           

        })
        return () => {
            unSubscribe()
        }
    }, [user?.email]);
    const getLoved = () => {
        const storedBooks = localStorage.getItem('love-list');

        return (JSON.parse(storedBooks) || [])
    }

    const loveList = id => {

        const loved = getLoved()
        const exist = loved.find(Id => Id == id);
        if (!exist) {
            loved.push(id);
            localStorage.setItem('love-list', JSON.stringify(loved));
            Swal.fire({
                title: 'Success',
                text: 'Successfully added to favorite list',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            toast.success('Love this item? you will find it on favorite section')
        }
        else {
            localStorage.removeItem('love-list', JSON.stringify(loved))
        }
    }

    const info = {
        user,

        EmailSingIn,
        googleSingIn,
        setLoading,
        LogOut,
        LogInEmail,
        ProfileUpdate,
        loading,
        loveList,
        getLoved,
        state,
        setState,
        setUser

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;