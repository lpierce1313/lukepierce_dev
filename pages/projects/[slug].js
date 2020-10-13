import { FULL_NAME, HOST_URL } from "../../lib/constants";
import { Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/core";

import Container from "../../components/Container";
import { NextSeo } from "next-seo";
import React from "react";
import Subscribe from "../../components/Subscribe";
import Tags from "../../components/Tags";

const url = `${HOST_URL}/newsletter`;
const title = `Newsletter – ${FULL_NAME}`;

const description = "";

export default function Project({ project }) {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
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
              Projects
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>Hi</Text>
            <Tags data={project.tags} />
          </Flex>
          <Subscribe />
        </Stack>
      </Container>
    </>
  );
}

Project.getInitialProps = async ({ query }) => {
  const slug = query.slug;
  let project;

  if (slug === "speedy-quote") {
    project = {
      name: "Speedy Quote",
      tags: ["Next.JS", "Tailwind.CSS"],
    };
  }

  return { project };
};
