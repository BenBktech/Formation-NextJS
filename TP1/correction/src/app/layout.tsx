import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben BK",
  description: "Randonneur à ses heures perdues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{
          backgroundColor: 'tomato',
          padding: '1rem'
        }}>Ben BK Blog</header>
        <main style={{
          padding: '1rem'
        }}>
          {children}
        </main>
        <footer style={{
          backgroundColor: 'tomato',
          padding: '1rem'
        }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
