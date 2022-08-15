import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdAssignmentInd,
  MdIntegrationInstructions,
  MdAttachEmail,
} from "react-icons/md";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            alignItems="center"
            columnGap="8px"
            _hover={{ color: "#DFF6FF" }}
            display={{ base: "none", sm: "flex" }}
          >
            <Icon as={value.icon} />
            <Box>{value.name}</Box>
          </Box>
        );
      })}
      <IconButton
        color="white"
        display={{ base: "block", sm: "none" }}
        onClick={onOpen}
        icon={
          isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />
        }
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
      />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="navBar">
          <DrawerHeader>
            <DrawerCloseButton color="white" w={6} h={6} />
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" rowGap="16px">
            {navMenuObj.map(function (value, index) {
              return (
                <Box
                  as="a"
                  color="white"
                  key={index}
                  href={value.href}
                  fontSize="20px"
                  alignItems="center"
                  columnGap="8px"
                  display={{ base: "flex" }}
                  onClick={onClose}
                >
                  <Icon as={value.icon} />
                  <Box>{value.name}</Box>
                </Box>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
