/** @jsxImportSource theme-ui */
import { Grid} from "theme-ui";
import Fretboard from "../Components/Fretboard/Fretboard";
import GuessNoteMenu from "../Components/GuessNoteMenu/GuessNoteMenu";

interface IGuessNoteProps {}

const GuessNote: React.FunctionComponent<IGuessNoteProps> = (props) => {
  return (
    <Grid gap="0" sx={{ 
      height: "100%",
      gridTemplateRows:"1fr 1fr"
    }}>
      <Fretboard />
      <GuessNoteMenu/>
    </Grid>
  );
};

export default GuessNote;
