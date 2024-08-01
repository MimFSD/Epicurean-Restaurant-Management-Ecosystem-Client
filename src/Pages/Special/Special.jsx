
import { useEffect, useState } from "react";



import { Helmet } from "react-helmet";
import axios from "axios";
import useAuth from "../../Hooks/UseAuth/useAuth";

import SpecialCard from "./SpecialCard";


const Special = () => {
    const { state, user } = useAuth()
    const [foods, setFoods] = useState([])
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URL}/all/Chef Aiko`, {
            withCredentials: true
        })
            .then(res => {

                setFoods(res.data)
            })
    }, [state, user?.email])


    return (
        <div>
            <hr />
            <h1 className="text-center my-2 text-secondary">Chef's Special For You </h1>
            <hr />
            <Helmet>
                <title>Nurturing Energetics|| Chef's Special</title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-auto justify-between text-center">
                {
                    foods.map(food => <SpecialCard key={food._id} food={food}></SpecialCard>)
                }
            </div>

        </div>
    );
};

export default Special;