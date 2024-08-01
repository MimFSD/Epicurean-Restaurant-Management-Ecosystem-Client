import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const UserReview = () => {
    const { user, state, setState } = useAuth()
    const [feedback, setFeedback] = useState([]);
    const handleFeedback = e => {
        e.preventDefault();
        console.log('connected');
        const name = user?.displayName;
        const user_image = user?.photoURL;
        const message = e.target.message.value;
        const info = {
            name,
            user_image,
            message
        }
        console.log(info);
        //post api
        axios.post(`${import.meta.env.VITE_API_URL}/feedback`, info)
            .then(res => {
                console.log(res.data)

                if (res.data.insertedId) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully added to database',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setState(!state)
                }

                e.target.reset()
            })
    }
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/feedback`)
            .then(res => setFeedback(res.data))
    }, [state])

    return (
        <div>
            <h1 className="text-secondary text-center my-4 mx-auto">User Feedback</h1>
            <div className="flex flex-col gap-6 mt-6">
                {
                    feedback.map(item => {

                        return (<div key={item._id} className="grid text-start overflow-x-scroll rounded-lg  lg:overflow-visible shadow-lg ">
                            <div className="px-8 text-center flex relative mt-6">


                                <img
                                    src={`${item.user_image}`}
                                    alt="image"
                                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center border border-secondary -top-5 left-4"

                                />
                                <div className="mb-6 block font-sans  font-medium leading-[1.3] tracking-normal text-blue-gray-900 antialiased py-4 rounded-lg border border-secondary px-4">
                                    <h6 className="text-start text-secondary font-semibold">{item.name} says :</h6>
                                    <p>{item.message} </p>

                                </div>




                            </div>
                        </div>)
                    })
                }
            </div>


            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800 mx-auto">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center my-4">Your opinion matters!</h2>

                    <form className="flex flex-col w-full" onSubmit={handleFeedback}>
                        <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50" name="message"></textarea>
                        <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600 bg-primary text-secondary border border-secondary" disabled={user ? false : true}>Leave feedback</button>
                    </form>
                    <p>You have to login to submit a feedback</p>
                </div>
                <div className="flex items-center justify-center">
                    <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-600">Maybe later</a>
                </div>
            </div>
        </div>
    );
};

export default UserReview;