import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import { FULL_NAME, HOST_URL } from "../lib/constants";
import { format, parseISO } from "date-fns";

import BlogSeo from "@/components/BlogSeo";
import Container from "@/components/Container";
import ViewCounter from "@/components/ViewCounter";

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${HOST_URL}/blog/${slug}`
  )}`;

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace("blog/", "")
    .replace(".mdx", "");

  return ({ children }) => {
    const { colorMode } = useColorMode();
    const textColor = {
      light: "gray.700",
      dark: "gray.400",
    };

    return (
      <Container>
        <BlogSeo url={`${HOST_URL}/blog/${slug}`} {...frontMatter} />
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={["initial", "center"]}
              direction={["column", "row"]}
              mt={2}
              w="100%"
              mb={4}
            >
              <Flex align="center">
                <Avatar
                  size="xs"
                  name={FULL_NAME}
                  src="/static/images/me.png"
                  mr={2}
                />
                <Text fontSize="sm" color={textColor[colorMode]}>
                  {frontMatter.by}
                  {`${FULL_NAME} / `}
                  {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                {frontMatter.readingTime.text}
                {` • `}
                <ViewCounter id={slug} />
              </Text>
            </Flex>
          </Flex>
          {children}
          {/* <Subscribe /> */}
          <Box>
            <Link href={discussUrl(slug)} isExternal>
              {"Discuss on Twitter"}
            </Link>
          </Box>
        </Stack>
      </Container>
    );
  };
};
