import {
  Box,
  Flex,
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

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let navMenuObj = [
    {
      name: "Home",
      href: "#sectionAbout",
    },
    {
      name: "My work",

      href: "#sectionMyWork",
    },
    {
      name: "Contact me",

      href: "#sectionContactme",
    },
  ];

  return (
    <Box
      as="nav"
      display="flex"
      position="fixed"
      width="100%"
      flexDirection="row"
      h="50px"
      left="0px"
      top="0px"
      alignItems="center"
      justifyContent="space-around"
      columnGap="32px"
      p="0px 32px"
      backdropFilter="auto"
      backdropBlur="20px"
      boxShadow="base"
    >
      <Box fontWeight="bold">Welcome</Box>
      <Flex columnGap="40px" p="0px 32px">
        {navMenuObj.map(function (value, index) {
          return (
            <Box
              as="a"
              color="black"
              key={index}
              href={value.href}
              fontSize="20px"
              alignItems="center"
              columnGap="8px"
              _hover={{ color: "#DFF6FF" }}
              display={{ base: "none", sm: "flex" }}
            >
              {value.name}
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
      </Flex>

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
