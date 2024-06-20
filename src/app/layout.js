import "@/globals.css";
import { montserratt } from '@/font-config'
import NavBar from '../components/nav'

export const metadata = {
    title: "McBell Creative House",
    description: "End-to-end Custom Brand Design & Web Development",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserratt.className}>
                <NavBar />
                {children}
          </body>
        </html>
    );
}
