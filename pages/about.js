// =============================================================================
// Copyright © 2020 Luke Pierce. All rights reserved.
// =============================================================================

import {
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import { FULL_NAME, HOST_URL } from "../lib/constants";
import React, { useEffect, useState } from "react";

import Container from "@/components/Container";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import Skeleton from "react-loading-skeleton";
import dynamic from "next/dynamic";
import useMobile from "@/components/useMobile";

const url = `${HOST_URL}/about`;
const title = `About Me – ${FULL_NAME}`;

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <Skeleton height={650} width={700} />,
});

const About = () => {
  const isTouchDevice = useMobile();
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, 400);
  }, [colorMode]);

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
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              About Me
            </Heading>
            <Image
              className="pointer-hand"
              src="/static/images/florida.jpg"
              title="Florida 2020"
              alt="Florida 2020"
            />
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Text color={secondaryTextColor[colorMode]} fontSize="2xl" mb={4}>
              As of December 2021, I have worked as a Staff Software Consultant
              with DSoft Technology, Engineering, and Analysis in Colorado
              Springs, CO
              <br />
              <br />I was born and raised in beautiful Denver, CO. I grew up
              camping, hiking, and enjoying the great outdoors. At a very young
              age, I started to build computers, learning to code, and fell in
              love with all things tech. I have a maltese yorkie named George,
              who my family all calls "Tuna" after Jim from The Office. I am
              avid traveler, hiker, and fitness enthusiast. I hope to be able to
              retire at a young age, so I can pursue my passion of traveling.
              Okay, let's talk tech! I love to work with{" "}
              <Text as="b">ReactJS</Text>, <Text as="b">Next.JS</Text>,{" "}
              <Text as="b">Javascript</Text>, <Text as="b">Java</Text>, and{" "}
              <Text as="b">Node.JS</Text>.
              <br />
              <br />
              Curious about my coding setup?{" "}
              <NextLink href="/setup" passHref>
                <Link color={secondaryTextColor[colorMode]}>
                  <Text as="u">Check it out here!</Text>
                </Link>
              </NextLink>
            </Text>
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Get In Touch
            </Heading>
            <Text color={secondaryTextColor[colorMode]} fontSize="2xl" mb={4}>
              <List as="ol" styleType="decimal">
                <ListItem>
                  <Link
                    href="https://www.indiehackers.com/matchmike1313"
                    title="IndieHackers"
                    isExternal
                  >
                    <a>IndieHackers - @lpierce1313</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://news.ycombinator.com/user?id=matchmike1313"
                    title="HackerNews"
                    isExternal
                  >
                    <a>Hacker News - @lpierce1313</a>
                  </Link>
                </ListItem>
                <ListItem>Email - Contact Link Above</ListItem>
              </List>
            </Text>
            <Heading letterSpacing="tight" mb={2} as="h2" size="2xl">
              My US Travels
            </Heading>
            {loading ? (
              <Skeleton height={650} width={700} />
            ) : (
              <Map
                name="us"
                colorMode={colorMode}
                showZoom={false}
                mobile={isTouchDevice}
                mapType={"usaAlbersLow"}
                seriesOneFill={"#C5B36D"}
                seriesOneStroke={"#000000"}
              />
            )}
            <Heading letterSpacing="tight" mt={5} mb={2} as="h2" size="2xl">
              My World Travels
            </Heading>
            {loading ? (
              <Skeleton height={650} width={700} />
            ) : (
              <Map
                name="world"
                colorMode={colorMode}
                showZoom={true}
                mobile={isTouchDevice}
                mapType={"worldLow"}
                seriesOneFill={"#C5B36D"}
                seriesOneStroke={"#000000"}
              />
            )}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
