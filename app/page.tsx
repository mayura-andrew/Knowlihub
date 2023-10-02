"use client";
import React from 'react';
import NextHead from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NextHead>
        <title>Your Education Hub</title>
        <meta
          name="description"
          content="Access free educational resources. Coming soon: Web Platform, Mobile App, and Browser Extension."
        />
      </NextHead>

      {/* Header Section */}
      <header className="bg-blue-400 p-4 text-center">
        <div className="mx-auto w-24 h-24">
          <Image
            src="/logo2.png"
            alt="knowlihub"
            width={96}
            height={96}
          />
        </div>
        <h1 className="text-4xl text-white mt-4 font-bold">
          Your Education Hub 🎓
        </h1>
        <h2 className="text-2xl text-gray-800 mt-2">
          Coming Soon: Web Platform, Mobile App, and Browser Extension 🚀
        </h2>
      </header>

      {/* Main Content Section */}
      <main className="max-w-4xl mx-auto p-4 text-center mt-8">
        <p className="text-lg text-gray-700">
          Welcome to our platform, where you can access a wealth of educational resources for free.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Our mission is to provide high-quality online resources accessible to all, without cost barriers.
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
    </>
  );
}
