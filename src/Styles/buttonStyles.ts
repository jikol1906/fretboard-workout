import { ThemeUIStyleObject } from 'theme-ui';

export const buttonStyles: ThemeUIStyleObject = {
  padding: "0.6em 1.7em",
  textAlign:'center',
  letterSpacing:"2px",
  cursor: "pointer",
  textTransform: "uppercase",
  textDecoration:'none',
  fontFamily: "main",
  borderRadius: "999px",
  borderWidth: [2.67,null,4],
  borderStyle: "solid",
  borderColor: "text",
  fontSize:["1.37rem","1.5rem","2.4rem"],
  color: "text",
  bg: 'transparent'
};


export const btnStyles = {
  primary: {
    ...buttonStyles,
    '&:hover': {
      color:'white'
    }
  },
  secondary: {
    ...buttonStyles,
    bg: 'text',
    color: "white",
  }
}
