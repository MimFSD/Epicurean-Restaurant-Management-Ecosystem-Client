
import {
    Button,
    Input,
    Typography,
    // Select,
    // Option,

} from "@material-tailwind/react";


// import { useState } from "react";

// day picker
import useAuth from "../../Hooks/UseAuth/useAuth";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";

// @heroicons/react

const AddFood = () => {
    const { user, setState, state } = useAuth()

    const handleAdd =async e => {
        e.preventDefault();
        console.log('connected');
        const food_image = e.target.food_image.value;
        const food_name = e.target.food_name.value;
        const food_category = e.target.food_category.value ;
        const description = e.target.short_description.value;
        const price =`$ ${e.target.price.value}`;
        const quantity = e.target.quantity.value;
        const food_origin = e.target.food_origin.value;
    
        const email =  user?.email
        const made_by = user?.displayName
        const info = {
            food_image,
            food_name,
            food_category,
            description,
            price,
            quantity,
            food_origin,
            email,
            made_by,
        }
        console.log(info);
        fetch(`${import.meta.env.VITE_API_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {

                


                if (data.insertedId) {

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


    return (
        <div>
            <section className="px-8 py-20 container mx-auto">
                <Helmet>
                    <title>Nurturing Energetics || Add Food</title>
                </Helmet>
                <div className="text-center">
                    <Typography variant="h5" className="text-secondary">
                        Add Food
                    </Typography>
                    <Typography
                        variant="small"
                        className="text-gray-600 font-normal mt-1"
                    >
                        Add your Food bellow.
                    </Typography>
                </div>

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
                                Food Category
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Italian"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                name="food_category"
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
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-medium text-[#5f431c]"
                            >
                                Price
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="$20 (currency dollar)"
                                labelProps={{
                                    className: "hidden",
                                }}
                                type="number"
                                step={0.01}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                name="price"
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-medium text-[#5f431c]"
                            >
                                Quantity
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="10"
                                labelProps={{
                                    className: "hidden",
                                }}
                                type="number"
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                name="quantity"
                            />
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                className="mb-2 font-medium text-[#5f431c]"
                            >
                                Food Origin
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Yes"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-primary border-t-blue-gray-200"
                                name="food_origin"
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
                   
                    <div className="w-full text-center mt-5">
                        <Button type="submit" className="text-center w-1/3 md:w-1/4 bg-primary text-secondary font-bold
                ">Add</Button>
                    </div>


                </form>
            </section>
        </div>
    );
};

export default AddFood;