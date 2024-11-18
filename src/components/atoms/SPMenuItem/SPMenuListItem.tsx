import { PageCategory } from '@/types/page_category'
import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
    toPage: PageCategory
}
export const SPMenuListItem = ({ toPage }: Props) => {
  return (
    <Link href={`${toPage?.toLowerCase()}`}>
        <Typography component="span">{toPage}</Typography>
    </Link>
  )
}
