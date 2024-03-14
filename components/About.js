import { useState } from 'react';
import SwiperCom from "./SwiperCom";


export default function About() {

    const offerLink = 'flex items-center justify-between h-10 px-2';

    const [webDesign, setWebDesign] = useState(false);
    const [webDevelopment, setWebDevelopment] = useState(false);
    const [contentManagement, setContentManagement] = useState(false);
    const [seo, setSeo] = useState(false);

    return (
        <div id="aboutSection" className='pt-14'>
            <div className='max-w-5xl mx-auto py-4'>
                <div>
                    <h2 className='text-center'>
                        About Me
                    </h2>
                </div>

                <div className='flex flex-col gap-5 items-center justify-center'>
                    <div className='flex flex-col text-center px-2'>
                        <h3 className='text-orange-500'>
                            Crafting Digital Experiences
                        </h3>
                        <p className='aboutParagraph'>Hello there! I'm Joseph Croft, a passionate freelance web designer, and developer with a mission to transform ideas into stunning digital realities. With a blend of creativity, technical prowess, and an eye for detail, I'm dedicated to creating websites that not only look great but also perform flawlessly.</p>
                    </div>

                    <div className='w-full px-2'>
                        <div className='pl-1'>
                            <h3>What I Offer</h3>
                        </div>

                        <div>
                            <div>
                                <div
                                    className={(webDesign ? 'border-0' : 'border-b') + ' flex items-center justify-between h-10 px-2'}
                                >
                                    <h4 className={(webDesign ? 'text-orange-500' : 'text-black')}>Web Design</h4>
                                    <button
                                        className={(webDesign ? 'rotate-180' : 'rotate-0') + ' p-2 transition-all'}
                                        onClick={() => {
                                            if (webDesign) {
                                                setWebDesign(false);
                                            } else {
                                                setWebDesign(true);
                                            }
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className={(webDesign ? 'text-orange-500' : 'text-black') + " w-6 h-6"}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className={(webDesign ? 'block' : 'hidden') + ' px-2 pt-1 pb-2 text-pretty border-b'}
                                >
                                    <p>
                                        I specialize in creating visually appealing, responsive, and user-friendly designs. Whether you're starting from scratch or looking to refresh your current site, I'll craft a design that sets you apart.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div
                                    className={(webDevelopment ? 'border-0' : 'border-b') + ' flex items-center justify-between h-10 px-2'}
                                >
                                    <h4 className={(webDevelopment ? 'text-orange-500' : 'text-black')}>Web Development</h4>
                                    <button
                                        className={(webDevelopment ? 'rotate-180' : 'rotate-0') + ' p-2 transition-all'}
                                        onClick={() => {
                                            if (webDevelopment) {
                                                setWebDevelopment(false);
                                            } else {
                                                setWebDevelopment(true);
                                            }
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className={(webDevelopment ? 'text-orange-500' : 'text-black') + " w-6 h-6"}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className={(webDevelopment ? 'block' : 'hidden') + ' px-2 pt-1 pb-2 text-pretty border-b'}
                                >
                                    <p>
                                        I bring designs to life using cutting-edge coding languages and frameworks. Your website will be fast, secure, and fully functional across all devices.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div
                                    className={(contentManagement ? 'border-0' : 'border-b') + ' flex items-center justify-between h-10 px-2'}
                                >
                                    <h4 className={(contentManagement ? 'text-orange-500' : 'text-black')}>Content Management</h4>
                                    <button
                                        className={(contentManagement ? 'rotate-180' : 'rotate-0') + ' p-2 transition-all'}
                                        onClick={() => {
                                            if (contentManagement) {
                                                setContentManagement(false);
                                            } else {
                                                setContentManagement(true);
                                            }
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className={(contentManagement ? 'text-orange-500' : 'text-black') + " w-6 h-6"}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className={(contentManagement ? 'block' : 'hidden') + ' px-2 pt-1 pb-2 text-pretty border-b'}
                                >
                                    <p>
                                        I integrate easy-to-use content management systems like WordPress, so you can update and manage your website without hassle.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div
                                    className={(seo ? 'border-0' : 'border-b') + ' flex items-center justify-between h-10 px-2'}
                                >
                                    <h4 className={(seo ? 'text-orange-500' : 'text-black')}>Search Engine Optimization (SEO)</h4>
                                    <button
                                        className={(seo ? 'rotate-180' : 'rotate-0') + ' p-2 transition-all'}
                                        onClick={() => {
                                            if (seo) {
                                                setSeo(false);
                                            } else {
                                                setSeo(true);
                                            }
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className={(seo ? 'text-orange-500' : 'text-black') + " w-6 h-6"}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className={(seo ? 'block' : 'hidden') + ' px-2 pt-1 pb-2 text-pretty border-b'}
                                >
                                    <p>
                                        I implement SEO best practices to boost your website's visibility on search engines and drive organic traffic to your site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className='w-full min-h-60 flex flex-col justify-center bg-transparent/25 rounded-sm py-5'
                    >
                        <div className='text-center'>
                            <h3 className='mb-10'>Why Choose Me?</h3>
                        </div>
                        <SwiperCom />
                    </div>
                </div>
            </div>
        </div>
    )
}
