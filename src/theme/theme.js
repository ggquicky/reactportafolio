import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      navText: {
        default: "#F9F5EB",
        _dark: "gray.900",
      },
      navBar: {
        default: "#1363DF",
        _dark: "#4EA5D9",
      },
      bGround: {
        default: "#DFF6FF",
        _dark: "#4EA5D9",
      },
      textColor: {
        default: "#06283D",
        _dark: "#F9F5EB",
      },
    },
  },
});
