import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import shoesFlex from "./media/soleanklepreview.jpg";
import calulator from "./media/calculatorjs.jpg";
import ninjamailpreview from "./media//ninjamailpreview.jpg";
import creditcardspreview from "./media/creditcardspreview.jpg";

const projects = [
  {
    url: "https://ggquicky.github.io/nerdifyLabs-shoesflex/",
    name: "shoes Flex ",
    imgUrl: shoesFlex,
  },
  {
    url: "https://ggquicky.github.io/nerdifyLabs-ninjaMail/",
    name: "Ninja Mail ",
    imgUrl: ninjamailpreview,
  },
  {
    url: "https://ggquicky.github.io/nerdifyLabs-creditcard/",
    name: "Credit Card ",
    imgUrl: creditcardspreview,
  },
  {
    url: "https://ggquicky.github.io/nerdifyLabs-calculator/",
    name: "Calculator ",
    imgUrl: calulator,
  },
];

export default function MyWork() {
  return (
    <Flex
      h={{ base: "auto", md: "100vh" }}
      flexDir="column"
      rowGap={{ base: "16px", md: "32px" }}
      alignItems="center"
      justifyContent="center"
      id="sectionMyWork"
    >
      <Heading color="textColor">These are some of my projects</Heading>

      <Flex justifyContent="center" gap="32px" wrap="wrap">
        {projects.map((project, index) => (
          <Box
            as="a"
            display="flex"
            flexDirection="column"
            alignItems="center"
            href={project.url}
            rel="nofollow noopener noreferrer"
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
              h="calc(100% - 6.8rem)"
              objectFit="fill"
              borderRadius="32px"
              src={project.imgUrl}
              alt="project"
              _hover={{ boxShadow: "dark-lg" }}
            />
            <Text
              fontSize={{ base: "24px", md: "32px" }}
              color="textColor"
              textAlign="center"
            >
              &lt;
              {project.name}
              &#47;&gt;
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
