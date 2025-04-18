import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headers from "./Components/Headers";
import Sidebar from "./Components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SwiftDocket",
  description: "Hurtech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body

      >

        <div className="flex  w-full h-screen  ">
          <div className="w-[15%]" ><Sidebar /></div>
          <div className=" w-[85%] flex flex-col">
            <div className="  sticky " ><Headers /></div>
            <div className=" overflow-y-scroll "> {children} </div>
          </div>

        </div>
      </body>
    </html>
  );
}
