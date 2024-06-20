import { literata } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
      <main>

          <section className='px-6 py-16 image-bg'>
                <div className='text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center h-full'>
                    <h1 className={`${literata.className} text-7xl font-light`}>TRANSFORM YOUR BRAND: <em>turning</em> IDEAS <em>into</em> IMPACT</h1>       
                    <p className='max-w-xl mx-auto mb-6 mt-2 text-lg'>Launch your brand with end-to-end creative services including brand design, website design & development</p>
                    <Link href="/services" className='btn-bg transition rounded-full text-white border border-white px-8 py-4 uppercase'>Learn More</Link>
                </div>
          </section>

          <section className='blue-background py-4'></section>

          <section className='px-6 py-16 dune-background'>
              <div className='max-w-7xl mx-auto flex'>
                  <Image
                    src="/assets/me.jpg"
                    width={400}
                    height={500}
                    alt="Headshot"
                  />
                  <div className='max-w-2xl h-full my-auto ml-10 text-white'>
                      <p className={`${literata.className} text-6xl font-light mb-8 -ml-32 max-w-2xl`}>You deserve to have <span className='italic blue'>brand visuals</span> that are a bold as you are</p>
                      <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
              </div>
          </section>

          <section className='px-6 py-16 sand-bg'>
                <div className='text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center h-full'>
                  
                </div>
          </section>

          <section className='px-6 py-16 blue-background'>

          </section>


      </main>
  );
}
