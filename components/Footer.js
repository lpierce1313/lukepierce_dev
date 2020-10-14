import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "@/lib/constants";

import InteractiveDots from "./CanvasBackground/CanvasBackground";
import useMobile from "./useMobile";

const Footer = () => {
  const isTouchDevice = useMobile();
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const divStyle = {
    backgroundColor: colorMode === "dark" ? "#171923" : "white",
  };

  const d = new Date();
  const year = d.getFullYear();

  return (
    <Flex align="center" mb={4} direction="column">
      <div
        className={
          isTouchDevice
            ? "social-media-icons-card-mobile"
            : "social-media-icons-card-desktop"
        }
        style={divStyle}
      >
        <Link href={TWITTER_URL} title="Twitter" isExternal>
          <IconButton
            aria-label="Twitter"
            icon="twitter"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href={GITHUB_URL} title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon="github"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href={LINKEDIN_URL} title="LinkedIn" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon="linkedin"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href={YOUTUBE_URL} title="YouTube" isExternal>
          <IconButton
            aria-label="YouTube"
            icon="youtube"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href={`mailto:${CONTACT_EMAIL}`} title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon="mail"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
      </div>
      {!isTouchDevice && (
        <InteractiveDots
          fillStyleActive="#AE8422"
          fillStyleInactive="#f0f2f4"
          overrideHeight={300}
          dotSmall={4}
          dotLarge={25}
          hoverRadius={60}
          animationDuration={0.5}
          FPS={60}
        />
      )}
      <br />
      <br />
      <Box
        bg="transparent"
        w="100%"
        pt={8}
        pb={2}
        color={secondaryTextColor[colorMode]}
      >
        <Text
          textAlign={"center"}
        >{`© ${year} Luke Pierce. All rights reserved.`}</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
