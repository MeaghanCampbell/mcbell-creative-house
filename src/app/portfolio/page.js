import { myeongjo } from '@/font-config'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/components/projects'

export default function Portfolio() {
    return (
        <main className="">

            <section className='px-6 py-24 gradient-bg'>
                <div className='max-w-7xl mx-auto text-center'>
                    <h1 className={`${myeongjo.className} text-6xl font-bold`}>Recent Work</h1>
                    <p className='mt-2'>copy</p>
                    <div className='mt-10'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {projects.map(project => (
                                <div className='border border-black' key={project.id}>
                                    <div className='relative h-72'>
                                        <Image 
                                            src="/assets/mountain.jpg" 
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Iceland"
                                        />
                                    </div>
                                    <div className='flex flex-grow border-t border-black'>
                                        <p className={`${myeongjo.className} px-8 py-3 text-xl font-bold w-full border-r border-black new-white-background`}>{project.name}</p>
                                        <Link href="/services" className='flex items-center text-center btn-bg transition text-white px-8 py-3 uppercase font-bold'>View</Link>
                                    </div>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}