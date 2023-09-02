"use client"

import React from 'react';
import NextHead from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import MyComponent from '@/components/ImageBuilding';

export default function Home() {
  return (
    <>
      <NextHead>
        <title>Your ultimate destination for free education</title>
      </NextHead>
      <header className="bg-gradient-to-r to-blue-700 p-4 text-center flex items-center justify-between">
        <div className="flex items-center text-center">
          <Image
            src="/logo2.png"
            alt="knowlihub"
            width={80}
            height={50}
          />
        </div>
      </header>
      <div className="text-3xl text-white text-center mt-3">Your ultimate destination for free education</div>
      <main className="max-w-4xl mx-auto p-4 text-center mt-20 custom-font"> {/* Added custom-font class */}
        <h1 className="text-4xl">Coming Soon...🚀</h1>
        <p className="my-4">
          Welcome to our community-driven learning platform, where you can access the best online resources for free and without difficulty.
        </p>
        <p>
          Our vision is to provide better online resources for learners that are easily accessible and free of charge. We believe that everyone should have access to quality education, regardless of their background or financial situation.
        </p>
      </main>

      <style jsx>{`
        /* Define your custom font-family here */
        .custom-font {
          font-family: 'Roboto', sans-serif; /* Use your desired font name */
        }
      `}</style>
    </>
  );
}
