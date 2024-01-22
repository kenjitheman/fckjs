import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="Alt Corporation" content="Alt Corporation is a company that does stuff." />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" type="image/png" href="/android-chrome-512x512.png" />
                <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" href="/favicon-16x16.png" />
                <meta property="og:site_name" content="Alt Corporation" />
                <meta name="og:title" content="Alt Corporation" />
                <meta property="og:type" content="website" />
                <title>Alt Corporation</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW={"100%"} pt={14}>
                <AnimatePresence initial={true} mode="wait">
                    {children}
                </AnimatePresence>
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
