import axios from "axios";
import { useEffect, useState } from "react";
import AllCard from "./AllCard";

const AllFoods = () => {
    const [filter,setFilter]=useState('')
    const [foods, setFoods] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/all?filter=${filter}`)
            .then((res) => {
                setFoods(res.data)
            })
    }, [filter])
    console.log(foods)
    const handleFilter = (e) => {
        e.preventDefault();
        const filter = e.target.search.value;
        setFilter(filter)
        console.log(filter)
    }
    const containerStyles = {
       
        // background: linear - gradient(to right, rgba(128, 0, 128, 0.7), rgba(255, 0, 0, 0.7)),
        backgroundImage: `url(https://i.ibb.co/BBQCnXh/image.png)`
        // Add more CSS properties as needed
    };
    return (
        <div>
            <div style={containerStyles}>
                  <div className="min-h-[60vh] w-full bg-cover rounded-2xl  text-center bg-gradient-to-t from-black  bg-opacity-0 to-transparent items-center bg-center bgImg"  >
               
                <h1 className="text-primary text-center font-bold pt-16 md:pt-32 p-auto ">All Foods</h1>
                <div className="text-2xl p-6 md:p-8 text-white text-center">
                    Embark on a gastronomic journey with our diverse food selection. From savory to sweet, our menu caters to every palate. Explore and delight in culinary wonders that promise to tantalize your taste buds.
                </div>
                <div className="text-center py-5">
                    <form className="w-32 space-y-1 dark:text-gray-800 mx-auto" onSubmit={handleFilter}>
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="search"  className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                    </div>
                </form>
                </div>
                
            </div>
            </div>
          

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-auto justify-between text-center">
                {

                    foods.map(food => <AllCard key={food._id} food={food}></AllCard>)
                    
                }
            </div>
        </div>
    );
};

export default AllFoods;