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
        fontSize: "1.5rem",
        lineHeight: 1,
        gridAutoFlow:"column",
        gap: ".2em",
        "& svg": {
          marginTop: ".5em",
        },
      }}
    >
      <span>{sharpNote}</span>{sharp}/<span>{flatNote}</span>{flat}
    </Grid>
  );
};

export default AccidentalNote;
