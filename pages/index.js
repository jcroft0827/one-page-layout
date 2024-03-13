import Link from 'next/link'
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Home() {
  const navLink = 'text-black text-lg hover:opacity-60 transition-all';
  const btnLink = 'text-white text-lg px-4 py-1 border border-orange-500 bg-orange-500 rounded-md hover:bg-white hover:text-orange-500 transition-all';
  const offerLink = 'flex items-center justify-between h-10 px-2';

  const [webDesign, setWebDesign] = useState(false);
  const [webDevelopment, setWebDevelopment] = useState(false);
  const [contentManagement, setContentManagement] = useState(false);
  const [seo, setSeo] = useState(false);


  return (
    <main>

      {/* headerContainer */}
      <div
        id="headerContainer"
        className='sticky top-0 z-50 bg-white shadow-md'
      >
        {/* headerWrapper */}
        <div
          className="flex max-w-5xl mx-auto px-4 py-1 justify-between items-center"
        >
          {/* brandWrapper */}
          <div
            className="w-12"
          >
            <img
              src="https://croft-next-ecommerce.s3.amazonaws.com/Logo_Webclip.png"
              alt="Company Logo" />
          </div>

          {/* navWrapper */}
          <div
            className='flex gap-5 items-center'
          >
            <Link
              href={'#aboutContainer'}
              scroll={true}
              className={navLink}
            >
              About
            </Link>

            <Link
              href={'#projectsContainer'}
              className={navLink}
            >
              Projects
            </Link>

            <Link
              href={'#getStartedContainer'}
              scroll={true}
              className={btnLink}
            >
              Get Started
            </Link>

          </div>
        </div>
      </div>

      {/* heroContainer */}
      <div
        id='heroContainer'
        className='bg-[url("https://croft-next-ecommerce.s3.amazonaws.com/Subject.png")] bg-fixed bg-contain bg-no-repeat bg-right bg-transparent/75 sm:bg-transparent/65 lg:bg-transparent/25 bg-blend-overlay'
      >
        {/* heroWrapper */}
        <div
          className='max-w-5xl h-96 mx-auto py-4 px-4 flex flex-col-reverse justify-center items-center'
        >
          {/* heroContentWrapper */}
          <div
            className='w-full h-full flex flex-col justify-end lg:justify-center'
          >

            <h1
              className='heroH1'
            >
              Joseph Croft
            </h1>

            <h2
              className='heroH2'
            >
              Web Developer
            </h2>

            <p
              className='heroParagraph'
            >
              Hello, my name is <span className='text-orange-500'>Joseph Croft</span> and I'm a <span className='text-orange-500'>Web Developer</span>!<br />
              I love helping businesses and individuals succeed on the web!
            </p>

          </div>
        </div>
      </div>

      {/* aboutContainer */}
      <div id='aboutContainer' className='pt-14'>
        <div className='max-w-5xl mx-auto py-4'>
          <div>
            <h2 className='text-center'>
              About Me
            </h2>
          </div>

          <div
            className='flex flex-col gap-5 items-center justify-center'
          >

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

            <div className='w-full min-h-60 flex flex-col justify-center bg-transparent/25 rounded-sm py-5'>
              <div className='text-center'>
                <h3 className='mb-10'>Why Choose Me?</h3>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      {/* projectsContainer */}
      <div id='projectsContainer' className='py-14'>
        <table className='base'>
          <thead>
            <tr className='border-b border-white'>
              <td className='text-sm'>NAME</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-lg'>Single-Page Website</td>
              <td className='flex gap-3 justify-end'>
                <button>
                  GitHub
                </button>
                <button>
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* getStartedContainer */}
      <div
        id='getStartedContainer'
        className='w-full pb-14'
      >
        <div className='flex flex-col gap-5 py-10 px-5 items-center max-w-5xl mx-auto lg:flex-row'>
          <div className='text-center w-full'>
            <h2>
              Getting Started
            </h2>
            <p className='text-xl text-orange-500'>Congratulations!</p>
            <p className='text-lg'>
              Building a strong online presence is a critical and smart move for your brand. I'm grateful that you've chosen me to help bring your creative ideas to life. Having an online presence in today's digital landscape is a key factor in your brand's growth and leaves a lasting impression on your audience. Together, we'll turn your dreams into reality and ensure that your website truly reflects your vision, going above and beyond your expectations!
            </p>
          </div>
          <div className='w-full max-w-xl'>
            <form className='basic'>
              <input type='text' placeholder='Name' />
              <input type='phone' placeholder='Phone Number' />
              <input type='email' placeholder='Email Address' />
              <textarea type='text' placeholder='Brief description of project' />
              <button type='submit'>Get Started</button>
            </form>
          </div>
        </div>
      </div>


      {/* footerContainer */}
      <div
        id='footerContainer'
        className='footer'
      >
        <div className='flex flex-col gap-4 items-center max-w-5xl mx-auto justify-center px-3 py-4 mb-4 border-b border-white md:flex-row md:justify-between md:gap-0'>
          <div className='flex gap-4'>
            <Link href={'/'}>
              About
            </Link>
            <Link href={'/'}>
              Projects
            </Link>
          </div>
          <div className='flex gap-2'>
            <Link href={'/'}>
              Facebook
            </Link>
            <Link href={'/'}>
              Twitter
            </Link>
            <Link href={'/'}>
              Instagram
            </Link>
            <Link href={'/'}>
              Youtube
            </Link>
          </div>
        </div>

        <div className='flex items-center max-w-5xl mx-auto justify-center'>
          <div>
            <p>
              © 2023 Joseph Croft. All rights reserved
            </p>
          </div>
        </div>
      </div>


    </main>
  );
}
