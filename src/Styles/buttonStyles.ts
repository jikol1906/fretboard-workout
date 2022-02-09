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
  outline: "none",
};

const buttonStyles: ThemeUIStyleObject = {
  ...btnReset,
  padding: "0.6em 1.7em",
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
    borderRadius:0,
    fontSize: ["2.4rem","3rem","4rem","5rem"],
    padding:[null,null,null,"4rem 0"],
    '&:not(:last-child)': {
      borderStyle:'solid',
      borderColor:'text',
      borderRightWidth:[null,null,null,'var(--border-width)'],
    }

  }
};
