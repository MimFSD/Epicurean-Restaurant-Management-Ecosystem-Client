
import {  useEffect, useState } from "react";



import { Helmet } from "react-helmet";
import axios from "axios";
import useAuth from "../../Hooks/UseAuth/useAuth";
import MyFoodCard from "./MyFoodCard";


const MyFood = () => {
    const { state,user } = useAuth()
    const [foods, setFoods] = useState([])
    useEffect(() => {
       
        axios.get(`${import.meta.env.VITE_API_URL}/add/${user?.email}`, {
            withCredentials:true
        })
            .then(res => {
           
                setFoods(res.data)
            })
    }, [state, user?.email])
  

    return (
        <div>
            <h1 className="text-center my-2 text-secondary">Foods added by me</h1>
            <Helmet>
                <title>Nurturing Energetics|| My Foods</title>
            </Helmet>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-auto justify-between text-center">
                {
                    foods.map(food => <MyFoodCard key={food._id} food={food}></MyFoodCard>)
                }
            </div>
             
        </div>
    );
};

export default MyFood;