import { ThemeUIStyleObject } from "theme-ui";

export const noteButtonGridStyles: ThemeUIStyleObject = {
  '--border-width':'4px',
  gridColumn:'2/3',
  gridTemplateColumns: ["1fr auto 1fr",null,null,'repeat(4,1fr)'],
  gridTemplateRows: ["1fr auto 1fr",null,null,"auto"],
  alignSelf:[null,null,null,"center"],
  borderRadius:'10px',
  padding:[null,null,null,"4rem 0"],
  gridTemplateAreas: [`
        'b1 l b2'
        'l2s l l2e'
        'b3 l b4'
    `,
    null,
    null,
    "'b1 b2 b3 b4'"
  ],
  borderWidth:'var(--border-width)',
  borderStyle:'solid',
  borderColor:'text',
  "&::before,&::after": {
      content:"''",
      background: "text",
      display: [null,null,null,'none']
  },
  "&::before": {
    width: "var(--border-width)",
    gridColumn: "b1-end/b2-start",
    gridRow: "l-start/l-end",
  },
  "&::after": {
    height: "var(--border-width)",
    gridColumn: "l2s/l2e",
    gridRow: "b1-end/b3-start",
  },
};
