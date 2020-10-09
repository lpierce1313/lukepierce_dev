import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/core";
import React, { useEffect } from "react";

import { CONTACT_EMAIL } from "../lib/constants";
// import { FaPen } from "react-icons/fa";
import Footer from "./Footer";
import NextLink from "next/link";
import styled from "@emotion/styled";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode !== localStorage.getItem("theme")) {
      toggleColorMode();
    }
  }, []);

  const bgColor = {
    light: "white",
    dark: "gray.900",
  };
  const primarytextColor = {
    light: "black",
    dark: "white",
  };
  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  };

  function storeColor() {
    if (colorMode === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <Box>
          <IconButton
            className="mx-2"
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? "sun" : "moon"}
            onClick={() => {
              toggleColorMode();
              storeColor();
            }}
          />
          {/* <IconButton className="mx-2" aria-label="Doc Colors" icon={FaPen} /> */}
        </Box>
        <Box>
          {/* <NextLink href="/dashboard" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Dashboard
            </Button>
          </NextLink> */}
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
          {/* TODO */}
          <Link href={`mailto:${CONTACT_EMAIL}`} title="Email" isExternal>
            <Button variant="ghost" p={[1, 4]}>
              Contact
            </Button>
          </Link>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
