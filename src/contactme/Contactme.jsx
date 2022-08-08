import { Flex, Heading, Text } from "@chakra-ui/react";

export default function contactMe() {
  const socials = [
    {
      name: "Twitter",
      action: "https://twitter.com/Enarvaezr",
    },
    {
      name: "Github",
      action: "https://github.com/ggquicky",
    },
    {
      name: "Mail",
      action: "mailto:ggquicky@gmail.com",
    },
  ];

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={{ base: "24px", md: "48px" }}
      id="sectionContactme"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading as="h3">Let's work together!!</Heading>
        <Text>How do you like pizza?</Text>
      </Flex>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ base: "24px", md: "48px" }}
      >
        {socials.map((social, index) => {
          return (
            <a
              key={index}
              rel="nofollow noopener noreferrer"
              href={social.action}
              target="_blank"
            >
              {social.name}
            </a>
          );
        })}
      </Flex>
    </Flex>
  );
}
