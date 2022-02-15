import { ThemeUIStyleObject } from "theme-ui";
import { maxHeightbpSmall } from "../../../Styles/maxHeightMqs";


export const guessNoteGameControlsGridStyles: ThemeUIStyleObject = {
  
  rowGap: "1",
  columnGap: "0",
  gridTemplateAreas:`
  '. stat1     stat2   .'
  '. control   control .'
  `,
  gridTemplateRows:'auto 1fr',
  gridTemplateColumns:[
    '1fr minmax(auto,25.2rem) minmax(auto,25.2rem) 1fr',
    null,
    null,
    '1fr minmax(auto,50rem) minmax(auto,50rem) 1fr'
  ],
  [maxHeightbpSmall]: {
    gridTemplateAreas:`
    'stat1 control   control stat2'
    `,
    gridTemplateColumns:['1fr 4fr 4fr 1fr','1fr 2fr 2fr 1fr'],
    gridTemplateRows:'1fr',
  }

};
