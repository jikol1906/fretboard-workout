import { ThemeUIStyleObject } from "theme-ui";
import { maxHeightbpSmall } from "./maxHeightMqs";


const btnReset: ThemeUIStyleObject = {
  bg: "transparent",
  display:'block',
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
  [maxHeightbpSmall]: {
    fontSize:'1.3rem'
  }

};

let btnStyles: {[k:string] : any} = {
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
    position:'relative',
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
    },
    [maxHeightbpSmall]: {
      fontSize: "2.2rem",
    }

  },
};

const goBackBtn : ThemeUIStyleObject = {
  ...btnReset,
  zIndex:1000,
  position:'fixed',
  width:'2.7rem',
  left:'1.8rem',
  top:'1.9rem',
  'svg': {
    width: '100%',
    height: 'auto'
  }
}

btnStyles.goBackBtn = goBackBtn;

export {btnStyles}
