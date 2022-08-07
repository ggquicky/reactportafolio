import { Box, Icon, Link } from "@chakra-ui/react";
import {
  MdAssignmentInd,
  MdIntegrationInstructions,
  MdAttachEmail,
} from "react-icons/md";

export default function navbar() {
  let navMenuObj = [
    {
      name: "Home",
      icon: MdAssignmentInd,
      href: "#sectionAbout",
    },
    {
      name: "My work",
      icon: MdIntegrationInstructions,
      href: "#sectionMyWork",
    },
    {
      name: "Contact me",
      icon: MdAttachEmail,
      href: "#sectionContactme",
    },
  ];

  return (
    <Box
      as="nav"
      display="flex"
      position="fixed"
      w="100%"
      flexDirection="row"
      bg="navBar"
      h="50px"
      left="0px"
      top="0px"
      alignItems="center"
      justifyContent="flex-end"
      columnGap="30px"
      p="0px 32px"
      boxShadow="md"
    >
      {navMenuObj.map(function (value, index) {
        return (
          <Box
            as="a"
            color="navText"
            key={index}
            href={value.href}
            fontSize="20px"
            display="flex"
            alignItems="center"
            columnGap="8px"
            _hover={{ color: "#DFF6FF" }}
          >
            <Icon as={value.icon} />
            <Box>{value.name}</Box>
          </Box>
        );
      })}
    </Box>
  );
}
