import { ThemeUIStyleObject } from "theme-ui";

export const checkBoxSliderStyles: ThemeUIStyleObject = {
  borderRadius: '100vh',
  height: 'var(--slider-container-height)',
  width: 'var(--slider-container-width)',
  bg: 'gray',
  display: 'flex',
  alignItems: 'center',
  padding: '0 var(--slider-padding)',
  transition: 'transform 0.3s ease-out, background-color 0.3s ease-out',
  '&::after':{
    content: '""',
    borderRadius: '50%',
    display: 'block',
    background: 'white',
    height: 'var(--slider-size)',
    width: 'var(--slider-size)',
    transition: 'inherit',
  }
}

export const checkBoxLabelStyles:ThemeUIStyleObject = {
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  '--slider-container-height': '2rem',
  '--slider-container-width': 'calc(var(--slider-container-height) * 2)',
  '--slider-size': 'calc(var(--slider-container-height) * 0.7)',
  '--slider-padding': 'calc(var(--slider-container-height) * 0.15)',
  '& input': {
    display: "none"
  },
  '& input:checked + span': {
    bg:'text',
    '&::after':{
      transform: 'translateX(calc(var(--slider-container-width) - var(--slider-size) - var(--slider-padding) * 2))'
    }
  }
}