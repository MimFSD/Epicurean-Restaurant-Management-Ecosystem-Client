/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeCard = ({ food }) => {
//  console.log(food);
    const { food_name, food_image, price,food_category,_id } = food
    return (
        <div className="border border-secondary mx-auto rounded-md">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={`${food_image}`} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{food_name} </h2>
                        <div>
                            <p className="dark:text-gray-800">Food Category :{food_category} </p>
                            <p className="dark:text-gray-800">Price :{price} </p>
                        </div>

                    </div>
                    <Link to={`/details/${_id}`}>
                        <button type="button" className="flex items-center text-secondary bg-primary justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-secondary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;