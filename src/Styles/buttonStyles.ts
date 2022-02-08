import { ThemeUIStyleObject } from "theme-ui";

const btnReset: ThemeUIStyleObject = {
  bg: "transparent",
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  fontFamily: "main",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  cursor: "pointer",
};

const buttonStyles: ThemeUIStyleObject = {
  ...btnReset,
  padding: "0.6em 1.7em",
  outline: "none",
  textAlign: "center",
  letterSpacing: "2px",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: "999px",
  borderWidth: [4, null, 4],
  borderStyle: "solid",
  borderColor: "text",
  fontSize: ["1.7rem", null, "2.5rem"],
  color: "text",
  bg: "transparent",
};

export const btnStyles = {
  primary: {
    ...buttonStyles,
    "&:hover,&:focus": {
      bg: "text",
      color: "white",
    },
  },
  secondary: {
    ...buttonStyles,
    bg: "text",
    color: "white",
  },
  noteBtn: {
    ...btnReset,
    color:'text',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize: ["2.4rem","4rem"],
  }
};
