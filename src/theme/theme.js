import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      textColor: {
        default: "black",
        _dark: "#e8e7e9",
      },
      hoverTextColor: {
        default: "white",
        _dark: "black",
      },
      hoverNavButton: {
        default: "white",
        _dark: "yellow",
      },
      navbar: {
        default: "none",
        _dark: "black",
      },
      bgApp: {
        default: "linear-gradient(to right, #757f9a, #d7dde8)",
        // _dark: "linear-gradient(to right, #2c3e50, #d7dde8)",
        _dark: "#1f1f1f",
      },
      shadowImg: {
        default: "dark-lg",
        _dark:
          "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,white 0px 5px 10px,white 0px 15px 40px",
      },
    },
  },
});
