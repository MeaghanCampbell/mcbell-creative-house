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
                        <Link href="/services" className='btn-bg transition text-white px-8 py-4 uppercase font-bold'>Learn More</Link>
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
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </section>

            <section className='blue-background -mt-1'>
                <div className='top py-8 dune-background'></div>
            </section>

            <section className='blue-background'>
                <div className='px-6 pb-24 pt-32 sand-background bottom'>
                        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            <div className='light-blue-background p-6 lg:mt-6'>
                                <p className={`${myeongjo.className} text-2xl font-bold mb-2`}>1. CUSTOM LOGO & BRAND DESIGN</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className='light-blue-background p-6 lg:mb-6'>
                                <p className={`${myeongjo.className} text-2xl font-bold mb-2`}>2. AN EYE-CATCHING WEBSITE</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className='light-blue-background p-6 lg:mt-6'>
                                <p className={`${myeongjo.className} text-2xl font-bold mb-2`}>3. LAUNCH your BUSINESS</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                </div>
            </section>

            <section className='blue-background pb-1 pt-1.5'></section>

            <section className='px-6 py-24 bg-black'>

            </section>


        </main>
  );
}
