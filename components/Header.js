import Link from 'next/link'

export default function Header() {

    const navLink = 'text-black text-lg hover:opacity-60 transition-all';
    const btnLink = 'text-white text-lg px-4 py-1 border border-orange-500 bg-orange-500 rounded-md hover:bg-white hover:text-orange-500 transition-all';

    return (
        <div className='sticky top-0 z-50 bg-white shadow-md'>
            {/* headerWrapper */}
            <div className="flex max-w-5xl mx-auto px-4 py-1 justify-between items-center">
                {/* brandWrapper */}
                <div className="w-12">
                    <img
                        src="https://croft-next-ecommerce.s3.amazonaws.com/Logo_Webclip.png"
                        alt="Company Logo" 
                    />
                </div>

                {/* navWrapper */}
                <div className='flex gap-5 items-center'>
                    <Link
                        href={'#aboutSection'}
                        scroll={true}
                        className={navLink}
                    >
                        About
                    </Link>

                    <Link
                        href={'#projectsSection'}
                        className={navLink}
                    >
                        Projects
                    </Link>

                    <Link
                        href={'#getStartedSection'}
                        scroll={true}
                        className={btnLink}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}
