import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Headers from './Components/Headers';
import Sidebar from './Components/Sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'SwiftDocket',
  description: 'Hurtech',
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
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <div className="flex h-screen w-full">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-[15%] bg-white border-r border-borderColor">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white shadow">
              <Headers />
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto bg-bgcolor p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
