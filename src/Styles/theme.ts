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
      space:["0","1rem","2.7rem","5rem"],
      text: {
        default:{
          fontFamily:'main',
          textTransform:'uppercase',
          fontSize:['1.1rem',"1.5rem","2.5rem"]          
        },
        stat: {
          fontFamily:'main',
          fontSize:['2.4rem','3.5rem',null,"4.5rem"]
        },
        heading: {
          fontFamily:'main'
        }
      },
      shadows: {
        default:"rgba(0, 0, 0, 0.35) 0px 5px 15px"
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