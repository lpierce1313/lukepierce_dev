// =============================================================================
// Copyright © 2024 Luke Pierce. All rights reserved.
// =============================================================================

import {
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import { FULL_NAME, HOST_URL, PROJECTS } from "../lib/constants";
import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Container from "@/components/Container";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import Skeleton from "react-loading-skeleton";
import useMobile from "@/components/useMobile";

const url = `${HOST_URL}/about`;
const title = `About Me – ${FULL_NAME}`;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Projects = () => {
  const { colorMode } = useColorMode();
  const size = useWindowSize();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="1200px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="1200px"
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Projects
            </Heading>
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            {size.width > 700 ? (
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {PROJECTS.map((project, i) => {
                  return (
                    <Box
                      w="100%"
                      borderWidth="1px"
                      rounded="lg"
                      overflow="hidden"
                    >
                      <a href={project.website}>
                        <Image
                          src={project.imageUrl}
                          alt={project.imageAlt}
                          className="hoveredImage"
                        />
                      </a>
                      <Box p="6">
                        <Box d="flex" alignItems="baseline">
                          {/* <Badge rounded="full" px="2" variantColor="teal">
                          New
                        </Badge> */}
                          <Heading letterSpacing="tight" as="h1" size="md">
                            {project.title}
                          </Heading>
                        </Box>
                        <Box mt="1" fontWeight="semibold">
                          {project.description}
                        </Box>
                        {project.website && (
                          <Button
                            m="1rem auto 0"
                            mr="1"
                            w="120px"
                            className="pointer-hand"
                            aria-label={project.website}
                            href={project.website}
                            variantColor="teal"
                          >
                            Website
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            m="1rem auto 0"
                            mr="1"
                            w="120px"
                            className="pointer-hand"
                            aria-label={project.github}
                            href={project.github}
                            variantColor="teal"
                          >
                            GitHub
                          </Button>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Grid>
            ) : (
              <Grid templateColumns="repeat(1, 1fr)" gap={4}>
                {PROJECTS.map((project, i) => {
                  return (
                    <Box
                      w="100%"
                      borderWidth="1px"
                      rounded="lg"
                      overflow="hidden"
                    >
                      <a href={project.website}>
                        <Image
                          src={project.imageUrl}
                          alt={project.imageAlt}
                          className="hoveredImage"
                        />
                      </a>
                      <Box p="6">
                        <Box d="flex" alignItems="baseline">
                          {/* <Badge rounded="full" px="2" variantColor="teal">
                          New
                        </Badge> */}
                          <Heading letterSpacing="tight" as="h1" size="md">
                            {project.title}
                          </Heading>
                        </Box>
                        <Box mt="1" fontWeight="semibold">
                          {project.description}
                        </Box>
                        {project.website && (
                          <Button
                            m="1rem auto 0"
                            mr="1"
                            w="120px"
                            className="pointer-hand"
                            aria-label={project.website}
                            href={project.website}
                            variantColor="teal"
                          >
                            Website
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            m="1rem auto 0"
                            mr="1"
                            w="120px"
                            className="pointer-hand"
                            aria-label={project.github}
                            href={project.github}
                            variantColor="teal"
                          >
                            GitHub
                          </Button>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Grid>
            )}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Projects;
