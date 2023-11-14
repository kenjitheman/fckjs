import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 45px;
display: inline-flex;
align-items: center;
height: 55px;
line-height: 20px;
padding: 10px;
`;

const Logo = () => {
    return (
        <Link href="/" scroll={false}>
            <LogoBox>
                <Image
                    src="/images/logo.png"
                    width={50}
                    height={50}
                />
                <Text
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    fontFamily='"Etna", sans-serif'
                    fontWeight="medium"
                    fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
                    ml={2}
                >
                    Alt Corporation
                </Text>
            </LogoBox>
        </Link>
    );
};

export default Logo;
