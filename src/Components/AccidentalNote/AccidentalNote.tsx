/** @jsxImportSource theme-ui */
import { Grid, SxProp } from "theme-ui";
import { flat } from "./Flat";
import { sharp } from "./Sharp";

interface IAccidentalNoteProps {
    sharpNote:string;
    flatNote:string;
}

const AccidentalNote: React.FunctionComponent<IAccidentalNoteProps & SxProp> = (
  {sharpNote,flatNote, ...props}
) => {
  return (
    <span
      sx={{
        display: "inline-grid",
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
      {...props}
    >
      <span>{sharpNote}</span>{sharp}/<span>{flatNote}</span>{flat}
    </span>
  );
};

export default AccidentalNote;
