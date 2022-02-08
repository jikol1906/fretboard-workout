/** @jsxImportSource theme-ui */
import { Grid } from "theme-ui";
import Fretboard from "../Components/Fretboard/Fretboard";
import GuessNoteGameControls from "../Components/GuessNote/GuessNoteGameControls/GuessNoteGameControls";
import GuessNoteMenu from "../Components/GuessNote/GuessNoteMenu";

import { selectGameStarted } from "../redux/guessNoteSlice";
import { useAppSelector } from "../redux/hooks";

const GuessNote: React.FunctionComponent = () => {
  const gameStarted = useAppSelector(selectGameStarted);
  return (
    <Grid
      sx={{
        height: "100%",
        gridTemplateRows: "1fr 1fr",
        padding: "1",
        gap: "2",
      }}
    >
      <Fretboard />
      {gameStarted ? <GuessNoteGameControls /> : <GuessNoteMenu />}
    </Grid>
  );
};

export default GuessNote;
