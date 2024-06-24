import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
        <main>

            <section className='px-6 py-10 mountain-bg flex items-center justify-center border-b border-black'>
                <div className='max-w-2xl mx-auto border border-black'>
                    <div className='text-center text-black flex flex-col items-center justify-center light-blue-background p-8 border-b border-black'>
                        <h1 className={`${myeongjo.className} text-5xl font-bold`}>TRANSFORM YOUR BRAND: from IDEAS to IMPACT</h1>       
                        <p className='max-w-xl mx-auto mb-6 mt-2 text-lg'>Launch your brand with end-to-end creative services including brand design, website design & development</p>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-1/2'>
                            <Link href="/services" className='hero-btn block new-white-background text-black transition px-8 py-4 uppercase font-bold text-center'>Learn More</Link>
                        </div>
                        <div className='w-1/2'>
                            <Link href="/contact" className='hero-btn block new-white-background text-black border-l border-black transition px-8 py-4 uppercase font-bold text-center'>Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='px-6 py-24 new-white-background border-b border-black'>
                <div className='max-w-7xl mx-auto flex justify-center'>
                    <Image
                        src="/assets/me.jpg"
                        width={400}
                        height={500}
                        alt="Headshot"
                    />
                    <div className='max-w-2xl h-full my-auto ml-10 text-black'>
                        <p className={`${myeongjo.className} text-6xl mb-8 -ml-32 max-w-lg font-bold`}>You deserve to have brand visuals that <span className='font-bold blue'>STAND OUT</span></p>
                        <p className='text-lg'>Hi! I'm Meaghan McBell and I want to help you bring your brand to life with eye-catching visuals and seamless functionality. With over seven years of experience in brand design and website development, I specialize in transforming brands through comprehensive creative services. Whether you're launching a new brand, rebranding an existing one, or need a custom website, I'm here to make your brand stand out in the crowded marketplace. From logo design to website launch, my goal is to provide you with a cohesive brand identity that resonates with your audience.</p>
                    </div>
                </div>
            </section>

            <section className='blue-background py-6 border-b border-black'>

            </section>

            <section className='grid grid-cols-1 lg:grid-cols-2 border-b border-black'>
                <div className='grid grid-rows-2 lg:border-r border-black'>
                    <div className='gradient-bg p-10 border-b border-black flex items-center'>
                        <div className='max-w-md mx-auto text-center'>
                            <p className={`${myeongjo.className} text-4xl font-bold mb-2`}>Brand Identity Design</p>
                            <p>Your brand is more than just a logo; it's the entire visual experience. I create comprehensive brand identity packages, including logos, color palettes, typography, and other style guidelines, ensuring your brand is instantly recognizable and consistently represented across all platforms.</p>
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
                            <p className={`${myeongjo.className} text-4xl font-bold mb-2`}>Website Development & Design</p>
                            <p>Your website is often the first impression potential customers have of your business. I design and develop custom websites tailored to your brand's unique needs. Whether you need a fully bespoke site or a user-friendly CMS platform, I ensure your website is visually appealing, functional, and easy to manage.</p>
                        </div>
                    </div>
                    <div className='light-blue-background p-10 flex items-center'>
                        <div className='max-w-md mx-auto text-center'>
                            <p className={`${myeongjo.className} text-4xl font-bold mb-2`}>Launch or Rebrand</p>
                            <p>Ready to launch a new brand or refresh your existing one? I provide end-to-end services to ensure a smooth and impactful launch or rebrand. From initial concept to final execution, I handle everything to make your brand's transition seamless and successful.</p>
                            <div className='mt-4 flex justify-center'>
                            <Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            


        </main>
  );
}
