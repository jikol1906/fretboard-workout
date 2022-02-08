/** @jsxImportSource theme-ui */
import { Grid } from "theme-ui";
import { flat } from "./Flat";
import { sharp } from "./Sharp";

interface IAccidentalNoteProps {
    sharpNote:string;
    flatNote:string;
}

const AccidentalNote: React.FunctionComponent<IAccidentalNoteProps> = (
  {sharpNote,flatNote}
) => {
  return (
    <Grid
      sx={{
        fontFamily: "main",
        lineHeight: 1,
        height: "1.5em",
        gridAutoFlow:"column",
        gap: ".2em",
        "& svg": {
          marginTop: ".5em",
          width:"auto",
          height:"1em"
        },
      }}
    >
      <span>{sharpNote}</span>{sharp}/<span>{flatNote}</span>{flat}
    </Grid>
  );
};

export default AccidentalNote;
