import Link from "next/link";

import React from 'react'

export default function navPage(){
  return (
    <div>
        <h1 className="mb-10 mt-24 ml-10">Welcome to Navbar Page </h1>
        <Link href="/" className="bg-slate-600 ml-5 p-5">Go to Home page </Link>
        <Link href="/footer" className="bg-slate-600 ml-5 p-5">Go to Footer Page </Link>
        <Link href="/contact" className="bg-slate-600 ml-5 p-5">Go to Contact page </Link>
        <Link href="/about" className="bg-slate-600 ml-5 p-5">Go to About page </Link>
    </div>
  )
}

