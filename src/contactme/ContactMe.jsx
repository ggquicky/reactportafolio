import { Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { FaMailBulk, FaTwitterSquare } from "react-icons/fa";

export default function ContactMe() {
  const socials = [
    {
      name: "Github",
      action: "https://twitter.com/Enarvaezr",
      icon: GoMarkGithub,
    },
    {
      name: "Twitter",
      action: "https://github.com/ggquicky",
      icon: FaTwitterSquare,
    },
    {
      name: "Mail",
      action: "mailto:ggquicky@gmail.com",
      icon: FaMailBulk,
    },
  ];

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={{ base: "24px", md: "48px" }}
      id="sectionContactme"
      h={{ base: "auto", md: "100vh" }}
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading fontSize={{ base: "30px", md: "36px" }} as="h3">
          Let's work together!!
        </Heading>
        <Text fontSize={{ base: "16px", md: "24px" }}>
          How do you like pizza?
        </Text>
      </Flex>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ base: "24px", md: "48px" }}
      >
        {socials.map((social, index) => {
          return (
            <Link
              key={index}
              href={social.action}
              fontSize={{ base: "30px", md: "24px" }}
              _hover={{ textDecoration: "none", color: "navBar" }}
            >
              <Icon as={social.icon} />
              {social.name}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}
