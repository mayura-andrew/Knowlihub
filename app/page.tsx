import React from 'react';
import NextHead from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NextHead>
        <title>Your ultimate destination for free education</title>
      </NextHead>
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 text-center">
        <h1 className="text-3xl text-white">Your ultimate destination for free education</h1>
      </header>
      <main className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-4xl ">Coming Soon🚀</h1>
        <p className="my-4">
          Welcome to our community-driven learning platform, where you can access the best online resources for free and without difficulty.
        </p>
        <p>
          Our vision is to provide better online resources for learners that are easily accessible and free of charge. We believe that everyone should have access to quality education, regardless of their background or financial situation.
        </p>
      </main>
    </>
  );
}
