
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Typography, Button, } from "@material-tailwind/react";
import {  useContext, useState } from "react";
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

import Methods from "./Methods";
// import useAuth from "../Hooks/UseAuth/useAuth";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
function LogIn() {

    const { LogInEmail,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [see, setSee] = useState(false);

    const handleLogIn = async e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
       
        const password = form.get('password');
        console.log(email, password, );        
        try {
            const result = await LogInEmail(email, password)
            console.log(result?.user);
            await axios.post(
                `${import.meta.env.VITE_API_URL}/jwt`,
                { email: result?.user?.email },
                { withCredentials: true })
            toast.success('Sing in Successful')
            setUser(result.user)
            navigate(location?.state || '/', { replace: true })
            
        }
        catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }



    return (
        <div className="w-full mx-auto mt-6 ">
            <Helmet>
                <title>Nurturing Energetics || LogIn</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 mx-auto dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form noValidate="" action="" className="space-y-6" onSubmit={handleLogIn}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block font-bold  dark:text-gray-600">Email</label>
                        <input type="text" name="email" id="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600 font-bold ">Password</label>
                        <input type={`${see ? 'text' : 'password'}`}
                            name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs dark:text-gray-600">

                            <span onClick={() => { setSee(!see) }} className={' relative -top-7  right-3 md:right-6'}>
                                {see ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <Button className="mt-6" fullWidth type="submit">
                        Log In
                    </Button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <Methods></Methods>



                <Typography color="gray" className="mt-4 text-center font-normal">
                    Do not have an account?{" "}
                    <Link to={'/register'}>Register</Link>
                </Typography>
            </div>

        </div>

    );
}

export default LogIn;