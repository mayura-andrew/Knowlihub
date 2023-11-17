"use client"
import React from 'react';
import NextHead from 'next/head';
import Image from 'next/image';
import LandingPage from '@/components/Landingpage';
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <NextHead>
        <meta property="og:title" content="Mayura Andrew" />
        <meta property="og:image" content="../public/logo.png" />
      </NextHead>
      <LandingPage />
    </>
  );
}
