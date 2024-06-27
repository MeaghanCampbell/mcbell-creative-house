import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
        <main>

            <section className='px-6 py-10 image-bg flex items-center justify-center'>
                <div className='max-w-2xl mx-auto border border-white p-8'>
                    <div className='text-center flex flex-col items-center justify-center text-white mb-10'>
                        <h1 className={`${myeongjo.className} text-6xl`}>TRANSFORM YOUR BRAND: from IDEAS to IMPACT</h1>       
                    </div>
                    <div className='flex justify-center'>
                        <Link href="/services" className='btn-bg new-white transition px-8 py-4 uppercase font-bold text-center'>Learn More</Link>
                    </div>
                </div>
            </section>
            
            <section className='px-6 py-24 new-white-background top'>
                <div className='max-w-7xl mx-auto flex justify-center'>
                    <Image
                        src="/assets/me.jpg"
                        width={400}
                        height={500}
                        alt="Headshot"
                    />
                    <div className='max-w-2xl h-full my-auto ml-10 text-black'>
                        <p className={`${myeongjo.className} text-6xl mb-6 -ml-32 max-w-xl uppercase`}>You deserve to have brand visuals that <span className='blue'>STAND OUT</span></p>
                        <p className='text-lg'>Hi! I'm Meaghan McBell and I want to help you bring your brand to life with eye-catching visuals and seamless functionality. With over seven years of experience in brand design and website development, I specialize in transforming brands through comprehensive creative services. Whether you're launching a new brand, rebranding an existing one, or need a custom website, I'm here to make your brand stand out in the crowded marketplace. From logo design to website launch, my goal is to provide you with a cohesive brand identity that resonates with your audience.</p>
                    </div>
                </div>
            </section>

            {/* <section className='blue-background py-6 border-b border-black'>

            </section> */}

            <section className='grid grid-cols-1 lg:grid-cols-2 border-b border-black bottom'>
                <div className='grid grid-rows-2 lg:border-r border-black'>
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
                <div className='grid grid-rows-3 divide-y divide-black'>
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
                            <p className={`${myeongjo.className} text-3xl uppercase mb-2`}>Website Development</p>
                            <p>Your website is often the first impression potential customers have of your business. I design and develop custom websites tailored to your brand's unique needs. Whether you need a fully bespoke site or a user-friendly CMS platform, I ensure your website is visually appealing, functional, and easy to manage.</p>
                            {/* <div className='mt-4 flex justify-center'>
                            <Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Get Started</Link>
                            </div> */}
                        </div>
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
