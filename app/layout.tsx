// Core
import StoreProvider from './StoreProvider';
import localFont from 'next/font/local';
// Style
import '@/assets/styles/globals.css';
// Types
import type { Metadata } from 'next';

const geistSans = localFont({
  src: '../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Tasker | Task Management App',
  description:
    'A simple and efficient task management app. Stay organized and productive with Tasker.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased font-sans`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
