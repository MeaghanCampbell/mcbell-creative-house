import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
        <main>

            <section className='px-6 pb-10 image-bg top'>
                    <div className='text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center h-full'>
                        <h1 className={`${myeongjo.className} text-7xl`}>TRANSFORM YOUR BRAND: from IDEAS to IMPACT</h1>       
                        <p className='max-w-xl mx-auto mb-6 mt-2 text-lg'>Launch your brand with end-to-end creative services including brand design, website design & development</p>
                        <Link href="/contact" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Work With Us</Link>
                    </div>
            </section>

            {/* <div className='ovalDivider'></div> */}

            <section className='px-6 py-24 dune-background bottom'>
                <div className='max-w-7xl mx-auto flex justify-center'>
                    <Image
                        src="/assets/me.jpg"
                        width={400}
                        height={500}
                        alt="Headshot"
                    />
                    <div className='max-w-2xl h-full my-auto ml-10 text-white'>
                        <p className={`${myeongjo.className} text-6xl font-light mb-8 -ml-32 max-w-lg`}>You deserve to have brand visuals that <span className='font-bold blue'>STAND OUT</span></p>
                        <p className='text-lg'>Hi! I'm Meaghan McBell and I want to help you bring your brand to life with eye-catching visuals and seamless functionality. With over seven years of experience in brand design and website development, I specialize in transforming brands through comprehensive creative services. Whether you're launching a new brand, rebranding an existing one, or need a custom website, I'm here to make your brand stand out in the crowded marketplace. From logo design to website launch, my goal is to provide you with a cohesive brand identity that resonates with your audience.</p>
                    </div>
                </div>
            </section>

            <div className='top py-8 dune-background -mt-1'></div>

            <div className='px-6 pb-24 pt-32 mountain-bg bottom'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className='sand-background p-6'>
                        <p className={`${myeongjo.className} text-2xl font-bold mb-2 blue text-center`}>Brand Identity Design</p>
                        <p>Your brand is more than just a logo; it's the entire visual experience. I create comprehensive brand identity packages, including logos, color palettes, typography, and other style guidelines, ensuring your brand is instantly recognizable and consistently represented across all platforms.</p>
                        <div className='mt-4 flex justify-center'><Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Learn More</Link></div>
                    </div>
                    <div className='sand-background p-6'>
                        <p className={`${myeongjo.className} text-2xl font-bold mb-2 blue text-center`}>Website Build & Design</p>
                        <p>Your website is often the first impression potential customers have of your business. I design and develop custom websites tailored to your brand's unique needs. Whether you need a fully bespoke site or a user-friendly CMS platform, I ensure your website is visually appealing, functional, and easy to manage.</p>
                        <div className='mt-4 flex justify-center'><Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Learn More</Link></div>
                    </div>
                    <div className='sand-background p-6'>
                        <p className={`${myeongjo.className} text-2xl font-bold mb-2 blue text-center`}>Launch & Rebrand Services</p>
                        <p>Ready to launch a new brand or refresh your existing one? I provide end-to-end services to ensure a smooth and impactful launch or rebrand. From initial concept to final execution, I handle everything to make your brand's transition seamless and successful.</p>
                        <div className='mt-4 flex justify-center'><Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Learn More</Link></div>
                    </div>
                </div>
            </div>

            <section className='sand-background pb-1 pt-1.5'></section>


        </main>
  );
}
