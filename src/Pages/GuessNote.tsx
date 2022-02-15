/** @jsxImportSource theme-ui */
import { useNavigate } from "react-router-dom";
import { Grid } from "theme-ui";
import Fretboard from "../Components/Fretboard/Fretboard";
import GoBackButton from "../Components/GoBackButton/GoBackButton";
import GuessNoteGameControls from "../Components/GuessNote/GuessNoteGameControls/GuessNoteGameControls";
import GuessNoteMenu from "../Components/GuessNote/GuessNoteMenu";

import { selectGameStarted } from "../redux/guessNoteSlice";
import { useAppSelector } from "../redux/hooks";
import { maxHeightbpSmall } from "../Styles/maxHeightMqs";

const GuessNote: React.FunctionComponent = () => {
  const gameStarted = useAppSelector(selectGameStarted);
  const navigate = useNavigate();
  return (
    <Grid
      sx={{
        height: "100%",
        gridTemplateRows: "1fr 1fr",
        padding: "2",
        gap: "2",
        [maxHeightbpSmall]: {
          gridTemplateRows: "auto 1fr",
        }
      }}
    >
      {!gameStarted && <GoBackButton onClick={_ => navigate("/")}/>}
      <Fretboard />
      {gameStarted ? <GuessNoteGameControls /> : <GuessNoteMenu />}
    </Grid>
  );
};

export default GuessNote;
