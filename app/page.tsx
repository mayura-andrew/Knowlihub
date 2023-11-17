"use client";
import React from 'react';
import NextHead from 'next/head';
import Image from 'next/image';
import LandingPage from '@/components/Landingpage';
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <NextHead>
<<<<<<< HEAD
        <title>KnowliHub</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="Access free educational resources. Coming soon: Web Platform, Mobile App, and Browser Extension."
        />
      </NextHead>

      {/* Header Section */}
      <header className="bg-black p-4 text-center">
        <div className="mx-auto w-24 h-24">
          <Image
            src="/logo2.png"
            alt="knowlihub"
            width={96}
            height={96}
          />
        </div>
        <h1 className="text-4xl text-white mt-4 font-bold">
          Your One Stop Education Hub 🎓
        </h1>
        <h2 className="text-2xl text-white mt-2">
        A community-driven learning resource sharing platform that aims to make high-quality educational materials more accessible to everyone. With KnowliHub, we are fostering a collaborative environment where learners can discover, save, and share valuable resources with ease.        </h2>
      </header>

      {/* Main Content Section */}
      <main className="max-w-4xl mx-auto p-4 text-center mt-8">
        <p className="text-lg text-gray-800">
          Under construction... 
        </p>
        <p className="text-lg text-gray-800">
          Coming soon ... 🚀
        </p>

      </main>

      {/* Styles */}
      <style jsx>{`
        /* Define your custom font-family here if needed */
        .custom-font {
          font-family: 'Roboto', sans-serif;
        }

        /* Apply different font to specific elements if desired */
        .font-serif {
          font-family: 'Font1', serif; /* Replace 'Font1' with your chosen serif font */
        }
      `}</style>
=======
        <title>Your ultimate destination for free education</title>
        <meta property="og:title" content="Mayura Andrew" />
        <meta property="og:image" content="../public/logo.png" />
      </NextHead>
      <LandingPage />
>>>>>>> c218689 (new landing)
    </>
  );
}
