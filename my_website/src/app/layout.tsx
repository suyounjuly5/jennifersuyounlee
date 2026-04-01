import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Jennifer Suyoun Lee</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased`}>
        {/* Top Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
            <a href="/" className="text-lg font-extrabold tracking-tight text-slate-900">
              JSL
            </a>
            <div className="ml-auto w-full md:w-2/3 flex justify-end pr-6 gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#publications" className="hover:text-blue-600 transition-colors">Publications</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            </div>
          </div>
        </nav>

        <main className="pt-24 pb-16 max-w-6xl mx-auto px-6 w-full">{children}</main>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-200 mt-12">
          <p>© {new Date().getFullYear()} Jennifer Suyoun Lee. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
