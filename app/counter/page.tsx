'use client'
import React, { useState } from 'react'

export default function Counter() {
  const [count, setcount]=useState<number>(0)
 const increment=()=>{
      setcount(pre => pre + 1)
  }
  const dicrement=()=>{
    setcount(pre => pre - 1)
}
  return (
    <div className='flex flex-col items-center h-[200vh]'>
      <h1>Count:{count}</h1>
        <button className='px-4 py-1 rounded-lg my-1 bg-green-500' onClick={increment}> increment</button>
        <button className='px-4 py-1 rounded-lg my-1 bg-red-500' onClick={dicrement}>dicrement</button>
    </div>
  )
}
