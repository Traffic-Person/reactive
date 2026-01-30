"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter();
  
  function handleClick() {
    router.push('/andiwonder');
  }
  
  return (
    <button onClick={handleClick}>
      hi
    </button>
  );
}