import Head from 'next/head'
import React, { FC, ReactElement } from 'react'
import { Box } from '@mui/material'

interface Props {
    title: string
    children: ReactElement
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>
            <main>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='calc(100vh - 200px)'
                >
                    { children }
                </Box>
            </main>
        </>
    )
}