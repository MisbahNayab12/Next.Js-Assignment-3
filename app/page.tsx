import Link from "next/link";

import React from 'react'

export default function Home(){
  return (
    <div>
      <h1 className="mb-10 mt-24 ml-10">Welcome to Home Page </h1>
      <Link href="/about" className="bg-slate-600 ml-5 p-5"> Go to About Page </Link>
      <Link href="/footer" className="bg-slate-600 ml-5 p-5"> Go to footer </Link>
      <Link href="/navbar" className="bg-slate-600 ml-5 p-5"> Go to navbar </Link>
      <Link href="/contact" className="bg-slate-600 ml-5 p-5"> Go to contact </Link>
    </div>
  )
}






