import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Container, Flex, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = (props) => {
    return (
        <Box>
            <Head>
                <title>Portfolio App</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Flex direction="column" minHeight="100vh" bgColor="#1A202C">
                <Header />
                <Container flexGrow={1} maxW="full">
                    {props.children}
                </Container>
                <Analytics />
                <SpeedInsights />
            </Flex>
        </Box>
    )
}

export default Layout;