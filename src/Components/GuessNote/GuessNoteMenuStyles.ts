import { ThemeUIStyleObject } from "theme-ui";
import { maxHeightbpSmall } from "../../Styles/maxHeightMqs";

export const menuContainerStyles: ThemeUIStyleObject = {
  gridTemplateAreas: [
    `
      'start-button       start-button      '
      'practice-mode      hide-circles      '
      'fretboard-rotation-x fretboard-rotation-y'
    `,
    null,
    null,
    `
      'start-button       practice-mode fretboard-rotation-x'
      'start-button       hide-circles fretboard-rotation-y'
    `
  ],
  gridTemplateColumns:[null,null,null,"1fr auto 1fr"],
  maxWidth:'110rem',
  margin:'0 auto',
  alignContent: "center",
  alignItems: "center",
  gap: ["1.9rem",null,'5rem'],
  [maxHeightbpSmall]: {
    gridTemplateAreas:        `
    'start-button       practice-mode fretboard-rotation-x'
    'start-button       hide-circles fretboard-rotation-y'
  `
  }
};

export const inputContainer: ThemeUIStyleObject = {
  gap: "1",
  flexDirection: "column",
  justifyItems: "center",
};
