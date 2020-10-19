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
import { FULL_NAME, HOST_URL } from "@/lib/constants";

import Container from "@/components/Container";
import { NextSeo } from "next-seo";

const url = `${HOST_URL}/setup`;
const title = `Setup – ${FULL_NAME}`;
const description = "My Setup for maximum productivity";

const Setup = () => {
  const { colorMode } = useColorMode();

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
              Setup
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              This is my personal setup I use for work, fun, and everything
              in-between.
            </Text>
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Image
              className="pointer-hand"
              src="/static/images/setup-one.jpg"
              title="Setup Angle One"
              alt="Setup Angle One"
            />

            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Image
              className="pointer-hand"
              src="/static/images/pc-setup.jpg"
              title="Gaming PC"
              alt="Gaming PC"
            />
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              <List as="ol" styleType="decimal">
                <ListItem mb={6}>
                  Custom Built PC Specifications: Nvidia Geforce GTX 1060 3GB,
                  Samsung Evo 256gb m.2 SSD, Western Digital Black 2tb HDD x2,
                  Intel I5-9600K CPU 3.7 GHz Six Core, 16GB 2666 MHz Vengeance
                  Ram, NZXT White Tempered Glass Computer Case
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.amazon.com/Samsung-2443BWT-1-24-Inch-Monitor-Black/dp/B0030CJBZU"
                    title="Amazon"
                    isExternal
                  >
                    <a>
                      <Text as="u">Acer 28inch 4k Monitor</Text>
                    </a>
                  </Link>{" "}
                  - Great monitor for Macbook Pro users with USB-C looking for
                  HiDPI pixel scaling. You can use a single cable to connect the
                  monitor to your mac, resulting in power as well as Thunderbolt
                  3 display connection. I have my keyboard plugged into the
                  monitor with 2 ports to spare, this will allow me to sit-down
                  and simply plug in a single cable and I'm ready to go!
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.amazon.com/Acer-CB281HK-Abmiiprx-FREESYNC-Technology/dp/B07JR9FVGK"
                    title="Amazon"
                    isExternal
                  >
                    <a>
                      <Text as="u">Samsung SyncMaster 24 inch Monitor</Text>
                    </a>
                  </Link>{" "}
                  - Great for a secondary monitor. It is reliable, high
                  resolution, and has great colors. Highly recommend.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.amazon.com/Apple-quad-core-Discontinued-Manufacturer-Refurbished/dp/B07CHY6T2M"
                    title="Amazon"
                    isExternal
                  >
                    <a>
                      <Text as="u">Apple 15 Inch Macbook Pro</Text>
                    </a>
                  </Link>{" "}
                  - Could not be happier with my 15 inch Spacegray Macbook Pro.
                  16GB of ram gives me a ton of flexibility with intensive dev
                  work, while the 512gb SSD is perfect for all my data.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.coolermaster.com/catalog/peripheral/keyboards/masterset-ms120/"
                    title="Cooler Master"
                    isExternal
                  >
                    <a>
                      <Text as="u">Corsair Masterset MS120 Mouse</Text>
                    </a>
                  </Link>{" "}
                  Coding is all about productivity, and part of that includes
                  the quality of your display, keyboard, and mouse. I'm loving
                  my Corsair keyboard. I got the Cherry MX Clear keys, they
                  offer a good balance of feedback when I type, and I am not
                  bothered by the noise.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.coolermaster.com/catalog/peripheral/keyboards/masterset-ms120/"
                    title="Cooler Master"
                    isExternal
                  >
                    <a>
                      <Text as="u">Corsair Masterset MS120 Mouse</Text>
                    </a>
                  </Link>{" "}
                  Great mouse for multi-machine users. Using the memory setting
                  I can switch bluetooth connections in a fraction of a second.
                  I simple swap my personal Macbook Pro for my work Macbook Pro
                  and switch profiles on the mouse and boom, I'm ready to go.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.staples.com/Staples-Corvair-Luxura-Mesh-Back-Task-Chair-Black/product_934100"
                    title="Staples Corvair Mesh Back Desk Chair"
                    isExternal
                  >
                    <a>
                      <Text as="u">Staples Corvair Mesh Back Desk Chair</Text>
                    </a>
                  </Link>{" "}
                  This chair is absolutely amazing. It is very comfortable, and
                  I have no discomfort when I work for several hours each day. I
                  highly recommend it.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.fully.com/standing-desks/jarvis/jarvis-adjustable-height-desk-bamboo.html"
                    title="Fully"
                    isExternal
                  >
                    <a>
                      <Text as="u">Fully Jarvis Standing Desk</Text>
                    </a>
                  </Link>{" "}
                  It's hard to call yourself a programmer in 2020 without a
                  standing desk. I love Fully desks and this is my second one.
                  You can now get an Alloy finish that gives it a nice
                  industrial feel.
                </ListItem>
              </List>
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Setup;
