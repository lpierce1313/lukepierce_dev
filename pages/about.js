import React from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/core";

import Container from "../components/Container";
import { CustomLink } from "../components/MDXComponents";

const url = "https://lukepierce.dev/about";
const title = "About Me – Luke Pierce";

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
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
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
              Someday, I would like to travel to atleast 50 different countries,
              learn multiple languages, and visit every state in the United
              States. Below, are places that I have travelled to so far, but
              there will be many more to come.
            </Text>
            {/* <Text color={secondaryTextColor[colorMode]} mb={4}>
              At the beginning of 2020, I launched my most ambitious project – a
              50+ lesson video course on React and Next.js. It’s called&nbsp;
              <CustomLink href="https://masteringnextjs.com">
                Mastering Next.js
              </CustomLink>
              , and it’s been my most successful solo-endeavor so far. I'm now
              building a new course called&nbsp;
              <CustomLink href="https://react2025.com">React 2025.</CustomLink>
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I’ve spoken across the country at conferences and meet-ups about
              front-end development, design, and recruiting. I also actively
              contribute to my blog, which attracts thousands of readers every
              month. I mostly write about development, tech careers, and my
              personal life. If you'd like to follow along, subscribe to&nbsp;
              <CustomLink href="/newsletter">my newsletter.</CustomLink>
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I grew up in small-town Iowa and went to school at Iowa State,
              graduating with a degree in Computer Engineering. I spend my free
              time playing music, creating videos, and enjoying time with
              friends and family.
            </Text> */}
            {/* <Heading letterSpacing="tight" mt={8} mb={4} as="h2" size="xl">
              Conference Talks
            </Heading>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="https://prisma.zoom.us/rec/share/6PwuN4zqyn9Of4XE-kvOUbUeF7i7T6a81yYbr_RZxEaE6v9ctLqFon6y4vLj2lxn"
                isExternal
              >
                <Flex align="center">
                  Building Static Sites with Prisma and Next.js
                  <Icon name="external-link" mx={2} size="16px" />
                </Flex>
              </Link>
            </Heading> */}
            {/* <Text color={secondaryTextColor[colorMode]} mb={8}>
              During this workshop, you'll learn how to integrate Prisma with
              Next.js and build a statically-generated site that displays a list
              of your favorite songs. We'll use Chakra UI for styling and deploy
              our site with Vercel.
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="/building-component-libraries-with-a-monorepo.pdf"
                isExternal
              >
                <Flex align="center">
                  Building Component Libraries with a Monorepo
                  <Icon name="external-link" mx={2} size="16px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              Learn why your organization needs a component library and discover
              the best practices for building, scaling, and adopting it across
              all platforms. We'll be using industry-standard technology (React,
              JavaScript, Storybook) alongside cutting-edge solutions
              (CSS-in-JS, Monorepo).
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="/recruiting-engineers-talent42-lee-robinson.pdf"
                isExternal
              >
                <Flex align="center">
                  Recruiting Engineers (From An Engineer's Perspective)
                  <Icon name="external-link" mx={2} size="16px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              Hiring talent is becoming increasingly difficult with low
              unemployment rates and the tech industry booming. What you can do
              to stick out? Learn from an engineer who's been involved on both
              sides - both as a candidate and with hiring - on what candidates
              really want out of a position.
            </Text> */}
            <iframe
              height="280"
              src="https://www.google.com/maps/d/u/0/embed?mid=1v2GHUFad-oc6_8EO4RU8-90wE90-0HH2"
              title="Luke's Travel Map"
              width="100%"
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
