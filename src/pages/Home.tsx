import Container from '../components/elements/Container';
import Button from '../components/elements/Button';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Navbar from '../components/widgets/Navbar';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <main className='h-[100vh] swiper1-bg'>
            <Navbar />
            <Container>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className=' h-full '>
                            <div className='flex justify-center items-center h-[90vh]'>
                                <div>
                                    <h1 style={{ textShadow: "1px 1px 2px #334" }} className='text-white text-center text-3xl md:text-6xl drop-shadow-md font-bold'>Space X</h1>

                                    <div className='flex items-center justify-center'>
                                        <p style={{ textShadow: "1px 1px 2px #334" }} className='lg:w-[600px] text-center font-bold text-sm lg:text-lg text-white'>
                                            SpaceX is an American aerospace manufacturer, a provider of space
                                            transportation services, and a communications corporation
                                            headquartered in Hawthorne, California. SpaceX was founded in 2002
                                            by Elon Musk with the goal of reducing space transportation costs
                                            to enable the colonization of Mars.
                                        </p>
                                    </div>

                                    <div className='flex justify-center mt-4'>
                                        <Link to="/picture-of-the-day">
                                            <Button className="lg:text-base text-sm">
                                                Get picture of the day
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=' h-full '>
                            <div className='flex justify-center items-center h-[90vh]'>
                                <div>
                                    <h1
                                        style={{ textShadow: "1px 1px 2px #334" }}
                                        className='text-white text-center text-3xl md:text-6xl drop-shadow-md font-bold'
                                    >
                                        NASA
                                    </h1>

                                    <div className='flex items-center justify-center'>
                                        <p style={{ textShadow: "1px 1px 2px #334" }} className='lg:w-[600px] text-center font-bold text-sm lg:text-lg text-white'>
                                            NASA, the National Aeronautics and Space Administration, is an independent
                                            agency of the U.S. federal government responsible for the civilian space
                                            program, as well as aeronautics and space research. Founded in 1958,
                                            NASA is headquartered in Washington, D.C. Its mission is to drive advances
                                            in science, technology, and exploration to enhance knowledge, education,
                                            innovation, economic vitality, and stewardship of Earth.
                                        </p>
                                    </div>

                                    <div className='flex justify-center mt-4'>
                                        <Button className="text-sm lg:text-base">
                                            Get picture of the day
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=' h-full '>
                            <div className='flex justify-center items-center h-[90vh]'>
                                <div>
                                    <h1
                                        style={{ textShadow: "1px 1px 2px #334" }}
                                        className='text-white text-center text-3xl md:text-6xl drop-shadow-md font-bold'
                                    >
                                        Space Adventures
                                    </h1>

                                    <div className='flex items-center justify-center'>
                                        <p
                                            style={{ textShadow: "1px 1px 2px #334" }}
                                            className='lg:w-[600px] text-center font-bold text-sm lg:text-lg text-white'
                                        >
                                            Space Adventures is an American space tourism company that offers various
                                            spaceflight experiences to private individuals. Founded in 1998 and
                                            headquartered in Vienna, Virginia, Space Adventures has arranged for
                                            several private citizens to travel to the International Space Station
                                            {"(ISS)"} aboard Russian Soyuz spacecraft, making it a pioneer in commercial
                                            space tourism.
                                        </p>
                                    </div>

                                    <div className='flex justify-center mt-4'>
                                        <Button className="text-sm lg:text-base">
                                            Get picture of the day
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </main>
    )
}

export default Home