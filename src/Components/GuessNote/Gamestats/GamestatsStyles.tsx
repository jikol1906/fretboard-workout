import { ThemeUICSSObject } from "theme-ui";
import { maxHeightbpSmall } from "../../../Styles/maxHeightMqs";

export const container : ThemeUICSSObject = {
    gridTemplateRows: "auto 1fr auto",
    bg: "background",
    p: "6rem",
    gridTemplateAreas:`
        "header"
        "stats"
        "btns"
    `,
    [maxHeightbpSmall]: {
        rowGap:'1.5rem',  
        columnGap:'2rem',
        gridTemplateColumns:'1fr 1fr',      
        gridTemplateAreas:`
            "header header"
            "stats  btns  "
        `,
        p: "2rem",
    }
  }