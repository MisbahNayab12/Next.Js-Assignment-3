import Link from "next/link";

import React from 'react'

export default function footerPage(){
  return (
    <div>
        <h1 className="mb-10 mt-24 ml-10">Welcome to Footer Page </h1>
        <Link href="/" className="bg-slate-600 ml-5 p-5">Go to Home page </Link>
        <Link href="/navbar" className="bg-slate-600 ml-5 p-5">Go to Navbar Page </Link>
        <Link href="/contact" className="bg-slate-600 ml-5 p-5">Go to Contact page </Link>
        <Link href="/about" className="bg-slate-600 ml-5 p-5">Go to About page </Link>
    </div>
  )
}

