import { ThemeUIStyleObject } from "theme-ui";

export const menuContainerStyles: ThemeUIStyleObject = {
  gridTemplateColumns: "auto auto",
  gridTemplateAreas: [
    `
      'a1 a1'
      'a2 a4'
      'a3 a3'
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
