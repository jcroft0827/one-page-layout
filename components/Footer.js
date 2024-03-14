import Link from 'next/link'

export default function Footer() {
    return (
        <div
            id="footerSection"
            className='footer'
        >
            <div className='flex flex-col gap-4 items-center max-w-5xl mx-auto justify-center px-3 py-4 mb-4 border-b border-white md:flex-row md:justify-between md:gap-0'>
                <div className='flex gap-4'>
                    <Link href={'#aboutSection'}>
                        About
                    </Link>
                    <Link href={'#projectsSection'}>
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
    )
}
