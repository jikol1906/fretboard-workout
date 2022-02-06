import { keyframes } from "@emotion/react";
import { ThemeUIStyleObject } from "theme-ui";

const pulse = keyframes({
  from: {
    transform: "scale(.8)",
    filter: "brightness(.8)",
  },
  to: {
    transform: "scale(1.5)",
    filter: "brightness(1.9)",
  },
});

export const pointerStyles: ThemeUIStyleObject = {
  height: " 1.2em",
  width: " 1.2em",
  borderRadius: "50%",
  top: "calc(16.6% * var(--y,0) + 0.6em)",
  left: "calc((100% / 12) * var(--x,0) + 2em)",
  backgroundColor: " yellow",
  animationName: pulse,
  animationDuration:'.3s',
  animationIterationCount:'infinite',
  position: "absolute",
};
