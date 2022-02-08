import { ThemeUIStyleObject } from "theme-ui";

export const menuContainerStyles: ThemeUIStyleObject = {
  gridTemplateAreas: [
    `
      'start-button       start-button      '
      'practice-mode      hide-circles      '
      'fretboard-rotation fretboard-rotation'
    `,
    `
      'a1 a2'
      'a1 a3'
    `,
  ],
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  justifyItems: "center",
  gap: "2",
};

export const inputContainer: ThemeUIStyleObject = {
  gap: "1",
  flexDirection: "column",
  justifyItems: "center",
};
