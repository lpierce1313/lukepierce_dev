import { FULL_NAME, HOST_URL } from "../lib/constants";
import { Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/core";

import Container from "../components/Container";
import { NextSeo } from "next-seo";
import Skeleton from "react-loading-skeleton";
import dynamic from "next/dynamic";

const url = `${HOST_URL}/about`;
const title = `About Me – ${FULL_NAME}`;

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <Skeleton height={400} width={800} />,
});

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
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
          maxWidth="800px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="800px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              My name is Luke Pierce and I am born and raised in Lakewood, CO. I
              graduated from Colorado School of Mines with an Electrical
              Engineering degree at the top of my class. I decided after I
              completed my degree that I did not have a passion for Electrical
              Engineering even though I understood it very well. Web development
              is my passion, I taught myself HTML5, CSS, JavaScript, Ruby on
              Rails, React, NextJS, Python, NodeJS. My favorite language being
              NextJS which is one this portfolio is made from. I hope someday
              that I can live in a apartment/town home in downtown Denver, have
              amazing city views, and work for a small startup as a front-end
              web developer.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Aside from programming, I am very passionate about fitness and
              adventuring outdoors. Everyday, I go to the gym and do strength
              training and cardio. I play sports leagues twice a week, such as,
              Spikeball, Volleyball, Basketball, Football, and Tennis. I love
              the mountains in Colorado, so I usually try to hike 1-2 times per
              week. Overall, I live a well balanced life as I am able to work a
              job that I am passionate about and am able to exercise and be
              outdoors all of the time.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Someday, I would like to travel to at least 50 different
              countries, learn multiple languages, and visit every state in the
              United States. Below, are places that I have travelled to so far,
              but there will be many more to come.
            </Text>
            <Heading letterSpacing="tight" mb={2} as="h2" size="2xl">
              My US Travels
            </Heading>
            <Map
              colorMode={colorMode}
              showZoom={false}
              mapType={"usaAlbersLow"}
              seriesOneFill={"#C5B36D"}
              seriesOneStroke={"#000000"}
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
