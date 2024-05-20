/*
 * =============================================================================
 * Copyright © 2020 Luke Pierce. All rights reserved.
 * =============================================================================
 */

import {
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";

import { FULL_NAME, INTRO_TYPING } from "../lib/constants";

// import BlogPost from "@/components/BlogPost";
// eslint-disable-next-line import/no-unresolved
import Container from "@/components/Container";
// eslint-disable-next-line import/no-unresolved
import ProjectCard from "@/components/ProjectCard";
// eslint-disable-next-line import/no-unresolved
import Subscribe from "@/components/Subscribe";
// eslint-disable-next-line import/no-unresolved
import Timeline from "@/components/Timeline";
// eslint-disable-next-line import/no-unresolved
import useTyped from "@/components/useTyped";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const borderColor = {
    light: "gray.400",
    dark: "gray.600",
  };

  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const introRef = React.useRef(null);

  useTyped(introRef, {
    strings: INTRO_TYPING,
    typeSpeed: 30,
    backSpeed: 30,
  });

  return (
    <Container>
      <Stack
        as="main"
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 6rem auto"
        maxWidth="700px"
      >
        <Text fontSize="6xl">Hi, I’m {FULL_NAME}</Text>
        <>
          <Text fontSize="3xl" mb={4}>
            <span ref={introRef} />
          </Text>
          <Text color={secondaryTextColor[colorMode]} fontSize="2xl">
            I'm a Colorado based software engineer, full-stack developer and
            front-end designer and have been working in this field the past 3
            years. I'm experienced in HTML5, JS, CSS3 and modern libraries in
            React, NodeJS and Next.js.
            <br />
            <br />
            As a Senior Software Engineer at Veritone since May 2022, I have
            spearheaded the development and enhancement of four critical
            applications utilizing modern technologies such as React, Docker,
            and Ruby on Rails. I led the creation of an AI-powered video
            redaction tool that automatically censors video footage to protect
            privacy and comply with data protection laws. Additionally, I
            developed a specialized reporting tool for law enforcement, a media
            transcription platform for seamless audio and video content
            transcription, and an intuitive video analysis app that identifies
            and highlights points of interest in videos, enhancing user content
            analysis and interpretation. You can learn more about me{" "}
            <NextLink href="/about" passHref>
              <Link color={secondaryTextColor[colorMode]}>
                <Text as="u">here</Text>.
              </Link>
            </NextLink>
            <br />
          </Text>
          <Button
            as="a"
            p={[1, 4]}
            w="250px"
            fontWeight="bold"
            m="3rem auto 0"
            onClick={onOpen}
            className="pointer-hand"
            aria-label="Grab My Resume"
            variantColor="teal"
            mb={4}
          >
            Grab My Resume
          </Button>
        </>
        <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
        {/* <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Popular
          </Heading>
          <BlogPost {...styleGuides} />
          <BlogPost {...stripeDesign} />
          <BlogPost {...monorepo} />
        </Flex> */}
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Recent Projects
          </Heading>
          <ProjectCard
            title="GreetBox"
            description="Group-Based Greeting Cards Online. Bring joy to someone's life with an online eCard filled with messages, photos, videos, and GIFs!"
            href="https://greetbox.co/"
            color="#B92EFF"
          />
          {/* <ProjectCard
            title="SpeedyNote"
            description="A free website application for sending fast, secure & private Notes with Next.js, Tailwind, and React"
            href="https://speedynote.app/"
            color="#FFD300"
          />
          <ProjectCard
            title="Milehigh Lawncare"
            description="A simple local landscaping application built by me using NodeJS and Bulma and hosted on Netlify/Cloudflare"
            href="https://www.milehighlawncare.com/"
            color="#16972A"
          /> */}
          <ProjectCard
            title="LP Photography"
            description="I am into photography, I had purchased a Nikon D3400 camera and I wanted to share my work on a website so people could easily view my work. This is my photography portfolio. "
            href="https://lpphotography.herokuapp.com/home.html"
            color="#6D2510"
          />
          <br />
          <Text fontSize="1xl">
            Curious about my other projects?{" "}
            <NextLink href="/projects" passHref>
              <Link color={secondaryTextColor[colorMode]}>
                <Text as="u">Click here!</Text>
              </Link>
            </NextLink>
          </Text>
        </Flex>
        <Timeline />
        <Subscribe />
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Glad you want to learn more!</ModalHeader>
          <ModalBody>
            <Text fontSize="1xl">
              You can find my resume in the following formats:
            </Text>
            <br />
            <Button mx={1} aria-label="Download PDF Resume">
              <a href="luke-pierce-resume.pdf" download>
                PDF
              </a>
            </Button>
            <Button mx={1} aria-label="Download DOCX Resume">
              <a href="luke-pierce-resume.docx" download>
                DOCX
              </a>
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} aria-label="Resume Modal Close">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
