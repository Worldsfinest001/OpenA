import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Recipe Generator - Create delicious recipes with AI',
  description: 'Generate custom recipes based on your preferences with AI-powered technology',
  keywords: 'recipes, AI, cooking, food, meal planning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="container mx-auto py-4 px-4">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-primary-600">🍳 AI Recipe Generator</div>
                <nav className="ml-8">
                  <a href="/" className="text-gray-700 hover:text-primary-600 mr-4">Home</a>
                  <a href="/history" className="text-gray-700 hover:text-primary-600">History</a>
                </nav>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="bg-white border-t mt-12">
            <div className="container mx-auto py-6 text-center text-gray-600 px-4">
              <p>© 2023 AI Recipe Generator. Built with Next.js and TypeScript.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}