import React from 'react'

export default function Footer() {
  const year=new Date().getFullYear();
  return (
    <div className="bg-zinc-600 text-white px-8 py-12">
      <h1 className='text-2xl font-semibold'>©️ {year} all rights are reserved</h1>
    </div>
  )
}