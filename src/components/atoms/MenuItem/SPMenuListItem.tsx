import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
    toPage?: "About" | "Experiences" | "Projects" | "Blog" | "History" | "Contact"
}
export const SPMenuListItem = ({ toPage }: Props) => {
  return (
    <Link href={`${toPage?.toLowerCase()}`}>
        <Typography>{toPage}</Typography>
    </Link>
  )
}
