import { keyframes } from "@emotion/react";
import { ThemeUIStyleObject } from "theme-ui";

const pulse = keyframes`
  from {
    transform: scale(.8);
    filter: brightness(.8);
  }

  to {
    transform: scale(1.5);
    filter: brightness(1.9);
  }
`

export const pointerStyles: ThemeUIStyleObject = {
  height: "1.2em",
  width: "1.2em",
  borderRadius: "50%",
  backgroundColor: " yellow",
  animation: `${pulse} .3s infinite alternate`,
};

export const fretboardElementContainerStyles : ThemeUIStyleObject = {
  position: "absolute",
  top: "calc(2.97em * var(--y) + 1.3em)",
  left: "calc(5.85em * var(--x) + 2.9em)",
  transform: "translate(-50%,-50%)",
}

