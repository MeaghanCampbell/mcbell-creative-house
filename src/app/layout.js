import "./globals.css";

export const metadata = {
  title: "McBell Creative House",
  description: "End-to-end Custom Brand Design & Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
