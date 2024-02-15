import { extendTheme,  } from "@chakra-ui/react";

export default extendTheme({
  breakpoints: {
    mobile: "0px",
    desktop: "768px",
  },
  styles: {
    global: {
      body: {
        "--border": "4px solid #000",
        "--bgColor1": "#FFEAEA",
        "--bgColor2": "#fef7ec",
        "--bgColor3": "#F25A41",
        "--bgColor4": "#F9BFBB",
        img: {
          pointerEvents: "none",
          userSelect: "none"
        }
      }
    }
  },
  fonts: {
    heading: "Helvetica",
    body: "Helvetica",
  }

})