export default function Hero() {
    return (
        <div
            id="heroSection"
            className='bg-[url("https://croft-next-ecommerce.s3.amazonaws.com/Subject.png")] bg-fixed bg-contain bg-no-repeat bg-right bg-transparent/75 sm:bg-transparent/65 lg:bg-transparent/25 bg-blend-overlay'
        >
            {/* heroWrapper */}
            <div
                className='max-w-5xl h-96 mx-auto py-4 px-4 flex flex-col-reverse justify-center items-center'
            >
                {/* heroContentWrapper */}
                <div className='w-full h-full flex flex-col justify-end lg:justify-center'>
                    <h1 className='heroH1'>
                        Joseph Croft
                    </h1>
                    <h2 className='heroH2'>
                        Web Developer
                    </h2>
                    <p className='heroParagraph'>
                        Hello, my name is <span className='text-orange-500'>Joseph Croft</span> and I'm a <span className='text-orange-500'>Web Developer</span>!<br />
                        I love helping businesses and individuals succeed on the web!
                    </p>
                </div>
            </div>
        </div>
    )
}
