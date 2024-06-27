import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
    return (
        <main className="">

            <section className='new-white-background'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='max-w-3xl mx-auto px-6 py-24'>
                        <h1 className={`${myeongjo.className} text-6xl uppercase`}>Services</h1>
                        <p>copy</p>
                        <div className='mt-4'>
                            <Link href="/services" className='inline-block btn-bg transition text-white px-8 py-4 uppercase font-bold'>Get Started</Link>
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
            </section>

            <section className='px-6 py-24 gradient-bg border-t border-black'>
                <div className='max-w-7xl mx-auto'>
                    
                </div>
            </section>

        </main>
    );
}