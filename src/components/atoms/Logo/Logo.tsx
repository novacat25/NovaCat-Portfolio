import { LOGO_HEIGHT_PC, LOGO_HEIGHT_SP, LOGO_STYLE_PC, LOGO_STYLE_SP, LOGO_WIDTH_PC, LOGO_WIDTH_SP } from "@/constants/logo_size"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  isMobile?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>void
}

export const Logo = ({ isMobile = false, onClick }: Props) => {
  
  return (
    <Link href="/">
      <Image
        onClick={onClick}
        src={isMobile ? "/logo_sp.png" : "/logo_pc.png"}
        width={isMobile ? LOGO_WIDTH_SP : LOGO_WIDTH_PC}
        height={isMobile ? LOGO_HEIGHT_SP : LOGO_HEIGHT_PC}
        alt="Logo"
        priority
        style={isMobile ? LOGO_STYLE_SP : LOGO_STYLE_PC}
      />
    </Link>
  )
}
