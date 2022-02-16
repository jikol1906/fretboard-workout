import { ThemeUIStyleObject } from "theme-ui";

export const menuContainerStyles: ThemeUIStyleObject = {
  gridTemplateAreas: [
    `
      'start-button       start-button      '
      'practice-mode      hide-circles      '
      'fretboard-rotation fretboard-rotation'
    `,
    null,
    null,
    `
      'start-button       practice-mode fretboard-rotation'
      'start-button       hide-circles fretboard-rotation'
    `,
  ],
  gridTemplateColumns:[null,null,null,"1fr auto 1fr"],
  maxWidth:'110rem',
  margin:'0 auto',
  alignContent: "center",
  alignItems: "center",
  justifyItems: "center",
  gap: ["1.9rem",null,'5rem'],
};

export const inputContainer: ThemeUIStyleObject = {
  gap: "1",
  flexDirection: "column",
  justifyItems: "center",
};
