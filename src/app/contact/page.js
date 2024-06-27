import { myeongjo } from '@/font-config'
import Link from 'next/link'

export default function Contact() {
    return (
        <main className="">

            <section className='px-6 py-24 new-white-background'>
                <div className='max-w-7xl mx-auto'>
                    <h1 className={`${myeongjo.className} text-6xl uppercase  text-center`}>Work With Us</h1>
                    <p className='mt-2 max-w-2xl mx-auto text-center'>copy</p>
                    <form className='max-w-2xl mx-auto mt-10 space-y-6'>
                        <div>
                            <label for="first-name" class="block leading-6">First name</label>
                            <div class="mt-1">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="w-full block py-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div>
                            <label for="first-name" class="block leading-6">Last name</label>
                            <div class="mt-1">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="w-full block py-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div>
                            <label for="first-name" class="block leading-6">Business name (Even if it's just your name)</label>
                            <div class="mt-1">
                                <input type="text" name="business-name" id="business-name" autocomplete="business-name" class="w-full block py-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div>
                            <label for="first-name" class="block leading-6">Email Address</label>
                            <div class="mt-1">
                                <input type="email" name="email" id="email" autocomplete="email" class="w-full block py-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div>
                            <label for="services" class="block leading-6">What services are you interested in? Check all that apply!</label>
                            <div class="mt-1">
                                <fieldset>
                                    <legend class="sr-only">Services</legend>
                                    <div class="space-y-1">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="branding" name="services" type="checkbox" class="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                                            </div>
                                            <div class="ml-3">
                                                <label for="branding">Branding</label>
                                            </div>
                                        </div>
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="web-development" name="services" type="checkbox" class="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                                            </div>
                                            <div class="ml-3">
                                                <label for="web-development">Web Development</label>
                                            </div>
                                        </div>
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="web-design" name="services" type="checkbox" class="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                                            </div>
                                            <div class="ml-3">
                                                <label for="graphic-design" class="">Web Design</label>
                                            </div>
                                        </div>
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="seo" name="services" type="checkbox" class="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                                            </div>
                                            <div class="ml-3">
                                                <label for="seo">Ongoing Creative Services</label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div>
                            <label for="first-name" class="block leading-6">Tell us about your project! What kind of work do you need? Where are you at in your business journey? Do you have an initial vision for your brand? Anything you can think of that might help!</label>
                            <div class="mt-1">
                                <textarea class="w-full block py-2 new-white-background border border-black" />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <Link href="/services" className='inline-block btn-bg transition text-white px-8 py-4 uppercase font-bold'>Submit</Link>
                        </div>
                    </form>
                </div>

            </section>

        </main>
    );
}