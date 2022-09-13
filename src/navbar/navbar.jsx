import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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
      justifyContent={{ base: "space-between", md: "space-around" }}
      columnGap="32px"
      p="0px 32px"
      backdropFilter="auto"
      backdropBlur="20px"
      boxShadow="base"
      bg="navbar"
    >
      <Box color="textColor" fontWeight="bold">
        Welcome
      </Box>

      <Flex columnGap={{ base: "0", sm: "40px" }}>
        {navMenuObj.map(function (value, index) {
          return (
            <Box
              as="a"
              color="textColor"
              key={index}
              href={value.href}
              fontSize="20px"
              alignItems="center"
              columnGap="8px"
              _hover={{ color: "white" }}
              display={{ base: "none", sm: "flex" }}
            >
              {value.name}
            </Box>
          );
        })}
        <IconButton
          color="textColor"
          _hover={{ bg: "none", color: "yellow" }}
          onClick={toggleColorMode}
          icon={
            colorMode === "light" ? (
              <MoonIcon w={6} h={6} />
            ) : (
              <SunIcon w={6} h={6} />
            )
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
        <IconButton
          color="textColor"
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
        <DrawerContent bg="bgApp">
          <DrawerHeader>
            <DrawerCloseButton color="textColor" w={6} h={6} />
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" rowGap="16px">
            {navMenuObj.map(function (value, index) {
              return (
                <Box
                  as="a"
                  color="textColor"
                  key={index}
                  href={value.href}
                  fontSize="20px"
                  alignItems="center"
                  columnGap="8px"
                  display={{ base: "flex" }}
                  onClick={onClose}
                >
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
