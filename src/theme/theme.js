import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      textColor: {
        default: "black",
        _dark: "white",
      },
      bgApp: {
        default: "linear-gradient(to right, #757f9a, #d7dde8)",
        _dark: "linear-gradient(to right, #2c3e50, #d7dde8)",
      },
  },
  },
});
