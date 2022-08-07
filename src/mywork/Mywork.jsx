import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const projects = [
  {
    url: "",
    name: "shoes Flex ",
    imgUrl: "",
  },
  {
    url: "",
    name: "Ninja Mail ",
    imgUrl: "",
  },
  {
    url: "",
    name: "Credit Card ",
    imgUrl: "",
  },
];

export default function Mywork() {
  return (
    <Flex
      h="100vh"
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
            href="/"
            rel="nofollow noopener noreferrer"
            target="_blank"
            key={index}
            w={{ base: "auto" }}
            minWidth="304px"
            h="300px"
            textDecoration="none"
          >
            <Image
              transition="ease-in-out"
              transitionDelay="100ms"
              _hover={{ boxShadow: "dark-lg" }}
              w="auto"
              objectFit="cover"
              borderRadius="32px"
              src="https://picsum.photos/290/284"
              alt="project"
            />
            <Text
              fontSize={{ base: "24px", md: "32px" }}
              color="white"
              top="-150px"
              textAlign="center"
              position="relative"
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
