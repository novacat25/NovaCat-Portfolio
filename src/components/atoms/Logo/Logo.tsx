import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  isMobile?: boolean
}

export const Logo = ({ isMobile = false }: Props) => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={isMobile ? 138 : 187}
        height={isMobile ? 41 : 61}
        alt="Logo"
        priority
      />
    </Link>
  )
}
