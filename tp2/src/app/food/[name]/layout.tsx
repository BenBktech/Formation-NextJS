import React from 'react'; // Ajoutez cet import
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { name: string }}): Metadata {
    const title = `Discover ${params.name} - NutriSpark`;
    const description = `Learn all about the nutritional values of ${params.name} on NutriTech. Explore now!`;
    return {
      title,
      description,
    };
}
  
export default function FoodLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
  