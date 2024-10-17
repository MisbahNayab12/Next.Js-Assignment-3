import Link from "next/link";

import React from 'react'

export default function contactPage(){
  return (
    <div>
        <h1 className="mb-10 mt-24 ml-10">Welcome to Contact Page </h1>
        <Link href="/" className="bg-slate-600 ml-5 p-5">Go to Home Page </Link>
        <Link href="/about" className="bg-slate-600 ml-5 p-5">Go to About Page </Link>
        <Link href="/footer" className="bg-slate-600 ml-5 p-5">Go to Footer Page </Link>
        <Link href="/navbar" className="bg-slate-600 ml-5 p-5">Go to Navbar Page </Link>
    </div>
  )
}
