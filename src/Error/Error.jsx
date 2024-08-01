import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 ">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="wf-ull lg:w-1/2">
                        <p className="text-sm font-medium text-[#efad62] dark:text-[#efad62]">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-[#5f431c] dark:text-white md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for does not exist.</p>
                        
                        <Link to={'/'}> <Button className="mt-3 text-secondary bg-primary">Go to Home</Button> </Link>
                        
                    </div>

                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        <img className="w-full max-w-lg lg:mx-auto" src="/image.png" alt=""/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;