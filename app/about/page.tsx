import Link from "next/link";

import React from 'react'

export default function aboutPage(){
  return (
    <div>
        <h1 className="mb-10 mt-24 ml-10"> Welcome to About Page </h1>
        <Link href="/" className="bg-slate-600 ml-5 p-5">Go to Home Page </Link>
        <Link href="/navbar" className="bg-slate-600 ml-5 p-5">Go to Navbar Page </Link>
        <Link href="/contact" className="bg-slate-600 ml-5 p-5">Go to Contact Page </Link>
        <Link href="/footer" className="bg-slate-600 ml-5 p-5">Go to Footer Page </Link>
    </div>
  )
}

