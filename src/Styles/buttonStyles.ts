import { ThemeUIStyleObject } from 'theme-ui';

export const buttonStyles: ThemeUIStyleObject = {
  padding: "0.6em 1.7em",
  outline: "none",
  textAlign:'center',
  letterSpacing:"2px",
  cursor: "pointer",
  textTransform: "uppercase",
  textDecoration:'none',
  fontFamily: "main",
  borderRadius: "999px",
  borderWidth: [4,null,4],
  borderStyle: "solid",
  borderColor: "text",
  fontSize:["1.7rem","1.5rem","2.4rem"],
  color: "text",
  bg: 'transparent'
};


export const btnStyles = {
  primary: {
    ...buttonStyles,
    '&:hover,&:focus':{
      bg:'text',
      color:'white'
    }
  },
  secondary: {
    ...buttonStyles,
    bg: 'text',
    color: "white",
  }
}


