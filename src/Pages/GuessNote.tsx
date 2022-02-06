/** @jsxImportSource theme-ui */
import { Grid} from "theme-ui";
import Fretboard from "../Components/Fretboard/Fretboard";

interface IGuessNoteProps {}

const GuessNote: React.FunctionComponent<IGuessNoteProps> = (props) => {
  return (
    <Grid sx={{ 
      height: "100%",
      gridTemplateRows:"1fr 1fr"
    }}>
      <Fretboard />
    </Grid>
  );
};

export default GuessNote;
