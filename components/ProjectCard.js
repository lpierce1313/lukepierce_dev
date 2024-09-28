// =============================================================================
// Copyright © 2024 Luke Pierce. All rights reserved.
// =============================================================================

import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import { animated, useSpring } from "react-spring";
import useHover from "@/components/useHover";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 75,
  (x - window.innerWidth / 2) / 30,
  1.05,
];

const divStyle = {
  paddingTop: "10px",
  paddingBottom: "10px",
};

const trans = (x, y, s) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const trackGoal = (title) => {
  const goalCodes = {
    SpeedyNote: "RV7BXBOK",
    "Milehigh Lawncare": "EFNZBA9U",
    "LP Photography": "MDYDWSYT",
  };

  Fathom.trackGoal(goalCodes[title], 0);
};

const ProjectCard = ({
  title,
  description,
  href,
  color,
  disableHover,
  disableClick,
}) => {
  const { colorMode } = useColorMode();

  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  const divBackgroundStyle = {
    color: color,
  };

  const [hoverRef, isHovered] = useHover();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const handleMouseMove = disableHover
    ? null
    : ({ clientX: x, clientY: y }) => set({ xys: calc(x, y) });

  const handleMouseLeave = disableHover ? null : () => set({ xys: [0, 0, 1] });

  const handleClick = disableClick
    ? (e) => e.preventDefault()
    : () => trackGoal(title);

  return (
    <div style={divStyle}>
      <animated.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: props?.xys?.interpolate(trans) }}
      >
        <div style={isHovered ? divBackgroundStyle : null} ref={hoverRef}>
          <Link
            mb={4}
            href={disableClick ? null : href}
            onClick={handleClick}
            title={title}
            isExternal
            _hover={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
              textDecoration: "none",
            }}
            style={{ cursor: disableClick ? "default" : "pointer" }}
          >
            <Flex
              align="center"
              border="1px solid"
              borderColor={isHovered ? color : borderColor[colorMode]}
              borderRadius={4}
              p={4}
            >
              <Stack backgroundColor="red">
                <Heading
                  as="p"
                  size="md"
                  fontWeight="bold"
                  mb={4}
                  letterSpacing="tighter"
                >
                  {title}
                </Heading>
                <Text lineHeight="1.3">{description}</Text>
              </Stack>
            </Flex>
          </Link>
        </div>
      </animated.div>
    </div>
  );
};

export default ProjectCard;
