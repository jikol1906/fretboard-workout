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
      space:["0","1.3rem","2.8rem","5rem"],
      text: {
        stat: {
          fontFamily:'main',
          fontSize:['2.5rem','2.8rem',null,"4rem"]
        },
        heading: {
          fontFamily:'main'
        }
      },
      forms: {
        label:{
          fontFamily: 'main',
          textTransform:'uppercase',
          letterSpacing:2,
          fontSize:["1.6rem",null,"2.8rem"],
          width: "auto"
        },
      },
      grids: {
        equalWidths: {
          gridAutoFlow:'column',
          gridAutoColumns:"1fr"
        }
      },
      styles: {
        root:{
          lineHeight:'1.6',
          fontSize:'62.5%',
        },
        a: btnStyles.primary
      }
    }