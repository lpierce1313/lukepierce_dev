import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useEffect } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { CONTACT_EMAIL } from "../lib/constants";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <NextLink href="/" passHref>
            {colorMode === "dark" ? (
              <Image
                className="pointer-hand"
                height="75px"
                htmlHeight="75px"
                src="/static/images/signature-white.png"
                title="Luke Pierce Signature"
                alt="Luke Pierce Signature"
              />
            ) : (
              <Image
                className="pointer-hand"
                height="75px"
                htmlHeight="75px"
                src="/static/images/signature-black.png"
                title="Luke Pierce Signature"
                alt="Luke Pierce Signature"
              />
            )}
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/dashboard" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Dashboard
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
          {/* TODO */}
          <Link title="Email" onClick={onOpen} isExternal>
            <Button variant="ghost" p={[1, 4]}>
              Contact
            </Button>
          </Link>
          <IconButton
            className="mx-2"
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? "sun" : "moon"}
            onClick={() => {
              toggleColorMode();
              storeColor();
            }}
          />
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>You can contact me here!</ModalHeader>
            <ModalBody>
              <Text fontSize="1xl">
                Email:{" "}
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_EMAIL}
                </Link>
              </Text>
            </ModalBody>
            <ModalFooter>
              <CopyToClipboard text={CONTACT_EMAIL}>
                <Button className="mx-2" mr={3}>
                  Copy to Clipboard
                </Button>
              </CopyToClipboard>
              <Button className="mx-2" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Container;
