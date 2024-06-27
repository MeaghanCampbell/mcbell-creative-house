import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
        <main>

            <section className='px-6 py-10 image-bg flex items-center justify-center border-b border-black'>
                <div className='max-w-2xl mx-auto border border-white p-8'>
                    <div className='text-center flex flex-col items-center justify-center text-white mb-10'>
                        <h1 className={`${myeongjo.className} text-4xl md:text-6xl`}>TRANSFORM YOUR BRAND: from IDEAS to IMPACT</h1>       
                    </div>
                    <div className='flex justify-center'>
                        <Link href="/services" className='btn-bg new-white transition px-8 py-4 uppercase font-bold text-center'>Learn More</Link>
                    </div>
                </div>
            </section>
            
            <section className='px-6 py-24 new-white-background'>
                <div className='max-w-7xl mx-auto flex flex-col items-center lg:flex-row justify-center'>
                    <Image
                        src="/assets/me.jpg"
                        width={400}
                        height={500}
                        alt="Headshot"
                    />
                    <div className='max-w-2xl h-full my-auto lg:ml-10 text-black mt-10'>
                        <p className={`${myeongjo.className} text-4xl md:text-6xl mb-6 lg:-ml-32 max-w-xl uppercase`}>You deserve to have brand visuals that <span className='blue'>STAND OUT</span></p>
                        <p className='text-lg'>Hi! I'm Meaghan McBell and I want to help you bring your brand to life with eye-catching visuals and seamless functionality. With over seven years of experience in brand design and website development, I specialize in transforming brands through comprehensive creative services. Whether you're launching a new brand, rebranding an existing one, or need a custom website, I'm here to make your brand stand out in the crowded marketplace. From logo design to website launch, my goal is to provide you with a cohesive brand identity that resonates with your audience.</p>
                    </div>
                </div>
            </section>

            


            


        </main>
  );
}
