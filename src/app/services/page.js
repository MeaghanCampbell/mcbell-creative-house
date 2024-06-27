import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
    return (
        <main className="">

            <section className='new-white-background border-b border-black'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='max-w-3xl mx-auto px-6 py-24'>
                        <h1 className={`${myeongjo.className} text-4xl md:text-6xl uppercase`}>Services</h1>
                        <p>copy</p>
                        <div className='mt-4'>
                            <Link href="/services" className='inline-block btn-bg transition text-white px-8 py-4 uppercase font-bold'>Get Started</Link>
                        </div>
                    </div>
                    <div className='relative h-full border-l border-black'>
                        <Image 
                            src="/assets/mountain.jpg" 
                            layout="fill"
                            objectFit="cover"
                            alt="Iceland"
                        />
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='grid grid-rows-2 '>
                    <div className='new-white-background p-10 border-b border-black flex items-center'>
                        <div className='max-w-md mx-auto text-center'>
                            <p className={`${myeongjo.className} text-3xl mb-2 uppercase`}>Brand Identity Design</p>
                            <p>Your brand is more than just a logo; it's the entire visual experience. I create comprehensive brand identity packages, including logos, color palettes, typography, and other style guidelines, ensuring your brand is instantly recognizable and consistently represented across all platforms.</p>
                            {/* <div className='mt-4 flex justify-center'>
                            <Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Get Started</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className='relative h-full'>
                        <Image 
                            src="/assets/mountain.jpg" 
                            layout="fill"
                            objectFit="cover"
                            alt="Iceland"
                        />
                    </div>
                </div>
                <div className='grid grid-rows-3 divide-y divide-black lg:border-l border-black'>
                   
                    <div className='new-white-background p-10 flex items-center'>
                        <div className='max-w-md mx-auto text-center'>
                            <p className={`${myeongjo.className} text-3xl uppercase mb-2`}>Website Development</p>
                            <p>Your website is often the first impression potential customers have of your business. I design and develop custom websites tailored to your brand's unique needs. Whether you need a fully bespoke site or a user-friendly CMS platform, I ensure your website is visually appealing, functional, and easy to manage.</p>
                            {/* <div className='mt-4 flex justify-center'>
                            <Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Get Started</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className='relative h-full'>
                        <Image 
                            src="/assets/mountain.jpg" 
                            layout="fill"
                            objectFit="cover"
                            alt="Iceland"
                        />
                    </div>
                    <div className='new-white-background p-10 flex items-center'>
                        <div className='max-w-md mx-auto text-center'>
                            <p className={`${myeongjo.className} text-3xl uppercase mb-2`}>Ongoing Creative Services</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                            {/* <div className='mt-4 flex justify-center'>
                            <Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Get Started</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}