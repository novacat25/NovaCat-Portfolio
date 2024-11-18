import { PageCategory } from '@/types/page_category'
import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
    toPage: PageCategory
    onClick?: ()=>void
}

export const SPMenuListItem = ({ toPage, onClick }: Props) => {
  return (
    <Link onClick={onClick} href={`${toPage?.toLowerCase()}`}>
        <Typography component="span">{toPage}</Typography>
    </Link>
  )
}
