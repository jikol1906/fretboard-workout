import { ThemeUIStyleObject } from "theme-ui";
import { maxHeightbpSmall } from "../../Styles/maxHeightMqs";

export const menuContainerStyles: ThemeUIStyleObject = {
  gridTemplateAreas: [
    `
      'start-button       start-button      '
      'practice-mode      hide-circles      '
      'fretboard-rotation-x  fretboard-rotation-center'
    `,
    null,
    null,
    `
      'practice-mode start-button  fretboard-rotation-x'
      'hide-circles start-button  fretboard-rotation-center'
    `
  ],
  gridTemplateColumns:[null,null,null,"1fr auto 1fr"],
  maxWidth:'110rem',
  margin:'0 auto',
  alignContent: "center",
  alignItems: "center",
  gap: ["1.9rem",null,'5rem'],
  [maxHeightbpSmall]: {
    gridTemplateAreas:`
    'practice-mode start-button  fretboard-rotation-x'
    'hide-circles start-button  fretboard-rotation-center'
  `,
  gap: "1.9rem",
  }
};

export const inputContainer: ThemeUIStyleObject = {
  gap: "1",
  flexDirection: "column",
  justifyItems: "center",
};
