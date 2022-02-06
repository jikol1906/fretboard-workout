    import type { Theme } from 'theme-ui'
    import { btnStyles } from './buttonStyles'

    export const theme: Theme = {
      fonts: {
        main:"'Sriracha', cursive, sans-serif",
      },
      colors: {
        text: "#715450",
        background: "#F3EED9",
      },
      breakpoints:["31.25em", "46.5em", "65.625em", "90em"],
      buttons:btnStyles,
      space:["0","1.2rem","2.5rem","5rem"],
      links:{secondary:btnStyles.secondary},  
      text: {
        heading: {
          fontFamily:'main'
        }
      },
      styles: {
        root:{
          lineHeight:'1.6'
        },
        a: btnStyles.primary
      }
    }