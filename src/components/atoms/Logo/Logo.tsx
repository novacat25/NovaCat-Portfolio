import Image from 'next/image'
import React from 'react'

//TODO: on mobile device, make it smaller...?
export const Logo = () => {
  return (
    <Image src="/logo.png" width="187" height="61" alt="Logo" priority />
  )
}
