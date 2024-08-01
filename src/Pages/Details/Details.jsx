import { useEffect, useState } from "react";

import axios from 'axios'
import {  Link, useParams } from "react-router-dom";
const Details = () => {
  const {id} = useParams()
console.log(id);
    const [food, setFood] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/details/${id}`)
            .then(res => {
                 setFood(res.data)
            })
           
    },[id])
    
    const { food_name, food_image, price, food_category, description, food_origin, quantity, made_by, _id, purchase_amount } = food
    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mt-4" >
                <img className="object-cover w-full h-64" src={`${food_image}`} alt="Article"/>

                    <div className="p-6">
                        <div className="text-center">
                        <span className="text-2xl font-bold text-secondary uppercase dark:text-blue-400  mx-auto">{food_name} </span>
                        <div className="flex flex-col md:flex-row justify-between text-start">
                            <p className="block mt-2 text-xl font-semibold text-secondary transition-colors duration-300 transform dark:text-white hover:text-primary hover:underline" > Category: {food_category} </p>
                            
                            <p className="block mt-2  font-semibold text-secondary transition-colors duration-300 transform dark:text-white hover:text-primary hover:underline" > Price: {price} only </p>
                            
                            <p className="block mt-2  font-semibold text-secondary transition-colors duration-300 transform dark:text-white hover:text-primary hover:underline" > Origin: {food_origin}</p>
                            
                          
                            
                        </div>
                           
                        <div className="flex flex-col md:flex-row justify-between text-start">
                            <p className="block mt-2 text-xl font-semibold text-secondary transition-colors duration-300 transform dark:text-white hover:text-primary hover:underline" > Made by: {made_by}  </p>
                            <p className="block mt-2  font-semibold text-secondary transition-colors duration-300 transform dark:text-white hover:text-primary hover:underline" >Total Purchases: {purchase_amount}  </p>
                            
                            <p className="block mt-2  font-semibold text-secondary transition-colors duration-300 transform dark:text-white hover:text-primary hover:underline" > Quantity: {quantity} </p>
                            
                          
                            
                        </div>
                           
                        
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-start">{description} </p>
                        </div>

                        <div className="mt-4">
                        <Link to={`/purchase/${_id}`}>
                            <button type="button" className="flex items-center text-secondary bg-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-secondary">Purchase </button>
                            </Link>
                        </div>
                    </div>
            </div>
           
        </div>
    );
};

export default Details;