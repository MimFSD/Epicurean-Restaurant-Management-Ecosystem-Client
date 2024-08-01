/* eslint-disable react/prop-types */


import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth/useAuth';

import Lottie from "lottie-react";
import animation from './animation.json'
const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    const form = location?.pathname || '/'
    if (loading) {
        return (<div className="w-full items-center my-6 mx-auto text-center">
           
            <Lottie animationData={animation} className="h-24 w-24 text-gray-900/50 text-center mx-auto" />
            <p>If loading for too long, please reload the website</p>
        </div>
        )
    }
    if (!user) {
        return <Navigate to={'/login'} state={form}></Navigate>


    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;