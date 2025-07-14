import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import calulator from "./media/calculatorjs.jpg";

import rickmortypreview from "./media/rickmortypreview.jpg";
import vueStudio from "./media/vueStudio.png";

const projects = [
  {
    url:"https://vue-studio-ghibli.vercel.app/",
    name: "Vue Studio Ghibli Movie Catalog",
    imgUrl: vueStudio
  },

  {
    url: "https://ggquicky.github.io/nerdifyLabs-calculator/",
    name: "Calculator ",
    imgUrl: calulator,
  },
  {
    url: "https://rick-morty-catalog.vercel.app/",
    name: "Rick & Morty Fetch App",
    imgUrl: rickmortypreview,
  },
];

export default function MyWork() {
  return (
    <Flex
      width="100%"
      flexDir="column"
      rowGap={{ base: "16px", md: "32px" }}
      alignItems="center"
      justifyContent="center"
      id="sectionMyWork"
    >
      <Heading color="textColor">These are some of my mockup projects</Heading>

      <Flex justifyContent="center" gap="32px" wrap="wrap">
        {projects.map((project, index) => (
          <Box
            as="a"
            href={project.url}
            rel="nofollow noopener noreferrer"
            display="flex"
            flexDirection="column"
            alignItems="center"
            target="_blank"
            key={index}
            w={{ base: "auto", md: "400px" }}
            minWidth="304px"
            h="300px"
            textDecoration="none"
          >
            <Image
              transition="ease-in-out"
              transitionDelay="100ms"
              w="100%"
              h="100%"
              objectFit="cover"
              src={project.imgUrl}
              alt="project"
              _hover={{ boxShadow: "lg" }}
              borderRadius="24px"
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
