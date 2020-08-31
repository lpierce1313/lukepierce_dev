import React from "react";
import { Flex, Link, IconButton } from "@chakra-ui/core";

import NowPlaying from "./NowPlaying";

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    {/* <NowPlaying /> */}
    <div>
      <Link
        href="https://twitter.com/LukePie21946514"
        title="Twitter"
        isExternal
      >
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/lpierce1313" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/luke-pierce-840b315b//"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCq-k3wQb8Mqedk7baA_3TuQ"
        title="YouTube"
        isExternal
      >
        <IconButton
          aria-label="YouTube"
          icon="youtube"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:lpierce1313@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
  </Flex>
);

export default Footer;
