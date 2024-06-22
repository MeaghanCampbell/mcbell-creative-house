import "@/globals.css";
import { montserratt } from '@/font-config'
import NavBar from '../components/nav'
import Footer from '../components/footer'

export const metadata = {
    title: "McBell Creative House",
    description: "End-to-end Custom Brand Design & Web Development",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`flex flex-col min-h-screen ${montserratt.className}`}>
                <NavBar />
                <div className="flex-grow">{children}</div>
                <Footer  className="mt-auto" />
          </body>
        </html>
    );
}
