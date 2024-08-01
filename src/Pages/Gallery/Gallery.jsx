
import {
    Button,
    Input,
    Typography,
    Dialog,


} from "@material-tailwind/react";
import React from "react";


// import { useState } from "react";

// day picker
import useAuth from "../../Hooks/UseAuth/useAuth";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";


// @heroicons/react

const AddFood = () => {
    const { user, setState, state,setLoading } = useAuth()
    const [open, setOpen] = React.useState(false);
    const [foods, setFoods] = React.useState([])
    const [hoverIndex, setHoverIndex] = React.useState(null);
    React.useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/gallery`)
            .then(res => res.json()
                // console.log(res.data);

            )
            .then(data => {

                setFoods(data)
                setLoading(false)
                setState(!state)
            })
    }, [])
    console.log(foods);
   

    const handleOpen = () => setOpen((cur) => !cur);
    const handleAdd = async e => {
        e.preventDefault();
        console.log('connected');
        const food_image = e.target.food_image.value;
        const food_name = e.target.food_name.value;
        const description = e.target.short_description.value;
        const added_by = user?.displayName
        const info = {
            food_image,
            food_name,
            description,
            added_by,
        }

        fetch(`${import.meta.env.VITE_API_URL}/gallery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOpen(false)
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully added to database',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setState(!state)
                }

            })
    }

    const containerStyles = {
        backgroundImage: `url(https://i.ibb.co/m815Hf5/image.png)`,

    }
 

   
   
    return (
        <div>
            <div style={containerStyles} className="element">
                <Helmet>
                    <title>Nurturing Energetics || Gallery</title>
                </Helmet>
                <div className="min-h-[60vh] w-full bg-cover rounded-2xl  text-center bg-gradient-to-t from-black relative bg-opacity-0 to-transparent items-center bg-center z-20"  >

                    <h1 className="text-primary text-center font-bold pt-16 md:pt-32 p-auto ">Foods Gallery</h1>
                    <div className="text-2xl p-6 md:p-8 text-white text-center">
                        Explore our Food Gallery section, a culinary haven where users can share their delectable experiences, showcasing diverse food items through vibrant images and engaging reviews. Join the gastronomic journey today!
                    </div>
                    <div className="text-center py-5">

                        <section className="grid place-items-center ">
                            <button type="button" className="flex items-center text-secondary bg-primary justify-center  p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-secondary mx-auto my-4" onClick={handleOpen}>Add To Gallery</button>
                            <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
                                <form className="flex flex-col mt-8" onSubmit={handleAdd}>
                                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                        <div className="w-full">
                                            <Typography
                                                variant="small"
                                                className="mb-2 font-medium text-[#5f431c]"
                                            >
                                                Food Name
                                            </Typography>
                                            <Input
                                                size="lg"
                                                placeholder="Sushi"
                                                labelProps={{
                                                    className: "hidden",
                                                }}
                                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                                name="food_name"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Typography
                                                variant="small"
                                                className="mb-2 font-medium text-[#5f431c]"
                                            >
                                                Photo Url
                                            </Typography>
                                            <Input
                                                size="lg"
                                                placeholder="Photo Url"
                                                labelProps={{
                                                    className: "hidden",
                                                }}
                                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                                name="food_image"
                                            />
                                        </div>

                                    </div>
                                    <div className="mb-6 flex flex-col gap-4 md:flex-row">
                                        <div className="w-full">
                                            <Typography
                                                variant="small"
                                                className="mb-2 font-medium text-[#5f431c]"
                                            >
                                                Short Description
                                            </Typography>
                                            <Input
                                                size="lg"
                                                placeholder="description"
                                                labelProps={{
                                                    className: "hidden",
                                                }}
                                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                                name="short_description"
                                            />

                                        </div>



                                    </div>



                                    <div className="w-full text-center mt-5">
                                        <Button type="submit" className="text-center w-1/3 md:w-1/4 bg-primary text-secondary font-bold
                ">Add</Button>
                                    </div>


                                </form>
                            </Dialog>
                        </section>
                    </div>

                </div>
            </div>
            <div>
                {

                    <div className="grid  gap-4 mt-8 p-4">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {foods.map((food, index) => (
                                <div key={index} style={{ backgroundImage: `url(${food.food_image})` }} className="grid gap-4 w-full h-full min-h-80 min-w-80 element" 
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}>
                                    {hoverIndex === index && (
                                        <div className="hover-elements text-center items-center text-white my-auto relative z-10">
                                           <div className="hover-elements-content">
                                                <div className="hover-elements-content-text">
                                                    <h1 className="hover-elements-content-text-title font-semibold ">
                                                        {food.food_name}
                                                    </h1>
                                                    <div className="hover-elements-content-text-description text-xl font-medium text-gray-300">
                                                        {food.description}
                                                    </div>
                                                    <div className="items-end text-xl ">
                                                        Added By: {food.added_by}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                              
                            ))}
                          
                        </div>
                    </div>

                }
            </div>
        </div>

    );
};

export default AddFood;