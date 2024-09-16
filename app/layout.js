import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
// import { WebVitals } from "./_components/web-vitals";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homeey - A Vision for you life",
  description: "Find you best real eastate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className} bg-gray-50`}>
        <ClerkProvider>
          <div className="absolute inset-0 bg-[url(/tailwind-grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative m-auto max-w-7xl px-2 xl:px-0">
            {/* <WebVitals /> */}
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
