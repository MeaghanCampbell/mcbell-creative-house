import { Literata } from 'next/font/google'
import { Montserrat } from 'next/font/google'

export const montserratt = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600']
})

export const literata = Literata({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500']
})