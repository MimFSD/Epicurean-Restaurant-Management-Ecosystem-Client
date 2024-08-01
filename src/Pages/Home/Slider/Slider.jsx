import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
   

    return (
        <>

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper  mt-2 rounded-3xl h-[390px] w-[310px] md:h-[500px] md:w-[720px] lg:h-[600px] lg:w-[1280px] mx-auto overflow-hidden"
            >


                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/Syw8SCf/image.png)` }} id="001" className='item-end element'>

                    <div className=' text-center z-20' >
                        <h1 className='text-primary font-bold text-2xl md:text-3xl lg:text-5xl'>WELCOME <br /><span className='text-tertiary'>to</span> <br />...Nurturing Energetics...</h1>
                       <p className='text-xl text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Nurturing Energetics: Where flavors harmonize, ingredients flourish, and every bite ignites a symphony of culinary delight and wellness.</p>
                        <Link to={'/all'} >
                            <button type="button" className="flex items-center  md:w-1/3 mx-auto text-secondary bg-primary justify-center p-3 font-bold tracking-wide rounded-md dark:bg-violet-600 border border-secondary dark:text-gray-50">All Foods</button>
                        </Link>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/cyj8d9C/image.png)` }} id="002" className='item-end element  '>
                    <div className=' text-center z-20' >
                 <h1 className='text-primary font-bold text-2xl md:text-3xl lg:text-5xl'>WELCOME <br /><span className='text-tertiary'>to</span> <br />...Nurturing Energetics...</h1>
                       <p className='text-xl text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Nurturing Energetics: Where flavors harmonize, ingredients flourish, and every bite ignites a symphony of culinary delight and wellness.</p>
                        <Link to={'/all'} >
                            <button type="button" className="flex items-center  md:w-1/3 mx-auto text-secondary bg-primary justify-center p-3 font-bold tracking-wide rounded-md dark:bg-violet-600 border border-secondary dark:text-gray-50">All Foods</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/gmNgq8T/image.png)` }} id="003" className='item-end element '>
                    <div className=' text-center z-20' >
                        <h1 className='text-primary font-bold text-2xl md:text-3xl lg:text-5xl'>WELCOME <br /><span className='text-tertiary'>to</span> <br />...Nurturing Energetics...</h1>
                       <p className='text-xl text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Nurturing Energetics: Where flavors harmonize, ingredients flourish, and every bite ignites a symphony of culinary delight and wellness.</p>
                        <Link to={'/all'} >
                            <button type="button" className="flex items-center  md:w-1/3 mx-auto text-secondary bg-primary justify-center p-3 font-bold tracking-wide rounded-md dark:bg-violet-600 border border-secondary dark:text-gray-50">All Foods</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(https://i.ibb.co/L84qxcg/image.png)` }} id="004" className='item-end element '>
                    <div className=' text-center z-20' >
                        <h1 className='text-primary font-bold text-2xl md:text-3xl lg:text-5xl'>WELCOME <br /><span className='text-tertiary'>to</span> <br />...Nurturing Energetics...</h1>
                       <p className='text-xl text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Nurturing Energetics: Where flavors harmonize, ingredients flourish, and every bite ignites a symphony of culinary delight and wellness.</p>
                        <Link to={'/all'} >
                            <button type="button" className="flex items-center  md:w-1/3 mx-auto text-secondary bg-primary justify-center p-3 font-bold tracking-wide rounded-md dark:bg-violet-600 border border-secondary dark:text-gray-50">All Foods</button>
                        </Link>
                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-center">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>

                </div>



            </Swiper>


        </>
    );
}


export default Slider;