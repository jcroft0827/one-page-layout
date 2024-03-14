export default function GetStarted() {
    return (
        <div
            id='getStartedSection'
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
    )
}
