import axios from "axios";
import { useEffect, useState } from "react";
import {   useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/useAuth";

import Swal from "sweetalert2";


const Purchase = () => {
    const { id } = useParams()
  const navigate = useNavigate()
    const {user,setLoading}=useAuth()
    const [food, setFood] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/details/${id}`)
            .then(res => {
                setFood(res.data);
                setLoading(false)
            })

    }, [id])
    const currentDate = new Date(Date.now()).toLocaleString()
    const { food_name, food_image, price, quantity, purchase_amount, email } = food
    const userEmail = user.email;
    const buyDate = currentDate;
    let amount = 0
  

    
   // eslint-disable-next-line no-unused-vars
   let [Quantity, setQuantity]=useState(quantity)
    const handlePurchase = () => {
        if (email == user?.email) {
            Swal.fire({
                title: 'Error',
                text: 'You can not buy your own product',
                icon: 'error',
                confirmButtonText: 'Close'
            })
         }
        else if (quantity > 0) {
            setQuantity(quantity - 1)

        axios.put(`${import.meta.env.VITE_API_URL}/details/${id}`, {
      
            quantity: quantity -1,
            purchase_amount: purchase_amount ? purchase_amount +1 : 0 + 1
        })
           .then(res => {
               console.log(res.data);
               if (res.data.modifiedCount > 0) {
                   amount = amount + 1
                   const data = { food_name, food_image, price, amount, userEmail, buyDate }
                   Swal.fire({
                       title: 'Success',
                       text: 'Successfully Purchased This item',
                       icon: 'success',
                       confirmButtonText: 'Cool'
                   })
                   axios.post(`${import.meta.env.VITE_API_URL}/my-order`,data  )
                       .then(res => {
                           console.log(res.data)
                       })
                   navigate('/')

               }
            })
           .catch(err => {
                console.log(err);
            })
        }
        else {
            
                Swal.fire({
                    title: 'Error',
                    text: 'This product is not available now',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            
        }
    }
   
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 text-start">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={`${food_image}`} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-secondary">{food_name}
                            
                        </h1>
                        <p className="mt-4 mb-5 text-lg sm:mb-12"> Price: {price} only
                       
                        </p>
                        <p className="mb-5 text-lg sm:mb-12"> Quantity: {quantity}                       
                        </p>
                        <div className="  ">
                            <p>
                                <span className="text-bold ">Buyer Name : {user.displayName} </span>
                            </p>
                            
                            <p>
                                <span className="text-bold ">Buyer Email : {user.email} </span>
                            </p>
                            <p>
                                <span className="text-bold "> Buying Date : {currentDate} </span>
                            </p>
                            
                        </div>
                        <button type="button" className="flex items-center text-secondary bg-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-secondary my-4" onClick={()=>handlePurchase()}>Confirm Purchase </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Purchase;