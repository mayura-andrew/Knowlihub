"use client"
import React from 'react';
import NextHead from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NextHead>
        <title>Your ultimate destination for free education</title>
      </NextHead>
      <header className="bg-gradient-to-r to-blue-700 p-1 text-center flex items-center justify-between align-middle">
        <div className="flex justify-center"> {/* Center the image horizontally */}
          <Image
            src="/logo2.png"
            alt="knowlihub"
            width={100}
            height={80}
          />
        </div>
      </header>
      <div className="text-3xl text-white text-center mt-2 font-extralight">Your ultimate destination for free education🎓</div>
      <div className="text-4xl text-center align-middle mt-2  font-bold">Coming Soon...🚀</div>
      <main className="max-w-4xl mx-auto p-4 text-center mt-2 font-mono">
        <p className="my-4 font-mono">
          Welcome to our community-driven learning platform, where you can access the best online resources for free and without difficulty.
        </p>
        <p className="font-mono"> {/* Apply a different font family */}
          Our vision is to provide better online resources for learners that are easily accessible and free of charge. We believe that everyone should have access to quality education, regardless of their background or financial situation.
        </p>
      </main>

      <style jsx>{`
        /* Define your custom font-family here */
        .custom-font {
          font-family: 'Roboto', sans-serif;
        }

        /* Apply different font to the specific element */
        .font-serif {
          font-family: 'Font1', serif; /* Replace 'Font1' with your chosen serif font */
        }
      `}</style>
    </>
  );
}
