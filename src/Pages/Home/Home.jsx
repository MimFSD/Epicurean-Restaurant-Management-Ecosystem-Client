import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import Special from "../Special/Special";
import UserReview from "../UserReview/UserReview";
import { Helmet } from "react-helmet";

const Home = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/top`)
            .then((res) => {
                setFoods(res.data)
            })
    }, [])


    return (
        <div>
            <Slider></Slider>
            <div className="text-center mt-4 p-4">
                <Helmet>
                    <title>Nurturing Energetics|| Home</title>
                </Helmet>

                <h1 className="text-secondary">Top Foods</h1>
                <p>
                    Discover our top picks! Savor the flavors loved by countless customers. From mouthwatering classics to innovative delights, explore our collection curated based on popular demand. Indulge in the dishes that have garnered the most purchases, promising satisfaction with every bite. Join the ranks of delighted customers and experience culinary excellence like never before. Dive into our top food section today!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-auto justify-between text-center">
                    {
                        foods.map(food => <HomeCard key={food._id} food={food}></HomeCard>)
                    }
                </div>
                <div className="text-center my-4 ">
                    <Link to={'/all'} >
                        <button type="button" className="flex items-center  w-1/3 mx-auto text-secondary bg-primary justify-center p-3 font-bold tracking-wide rounded-md dark:bg-violet-600 border border-secondary dark:text-gray-50">All Foods</button>
                    </Link>
                </div>

            </div>
            <div>
                <Special></Special>
            </div>
            <div>
                <UserReview></UserReview>
            </div>
        </div>

    );
};

export default Home;