// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

export default function SwiperCom() {
    return (
        <>
            {/* Slider main container */}
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                scrollbar={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='px-10 max-w-[764px] mx-auto'>
                        <h4>Creativity</h4>
                        <p>I'm not just a techie; I'm a creative thinker. I believe that design should be both aesthetically spleasing and highly functional. My designs strike the perfect balance between form and function, ensuring that your website not only looks amazing but also delivers a seamless user experience.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='px-10 max-w-[764px] mx-auto'>
                        <h4>Cutting-Edge Technology</h4>
                        <p>The digital world is constantly evolving, and so am I. I stay up-to-date with the latest web technologies and design trends to ensure your website is built using the most advanced tools and techniques available.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='px-10 max-w-[764px] mx-auto'>
                        <h4>Client-Centric Approach</h4>
                        <p>Your satisfaction is my top priority. I take the time to listen to your needs, goals, and ideas, and then work closely with you throughout the entire project to ensure that the final product exceeds your expectations.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='px-10 max-w-[764px] mx-auto'>
                        <h4>Responsive Design</h4>
                        <p>In a mobile-first world, your website will be fully responsive, ensuring a seamless experience for users on all devices.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='px-10 max-w-[764px] mx-auto'>
                        <h4>Custom Solutions</h4>
                        <p>I understand that every project is unique. I don't believe in one-size-fits-all solutions. Your website will be tailored to your specific needs and objectives.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='px-10 max-w-[764px] mx-auto'>
                        <h4>Timely Delivery</h4>
                        <p>I value your time and always strive to delivery projects on time and within budget.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
