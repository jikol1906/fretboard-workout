/** @jsxImportSource theme-ui */

import { useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { Box, Flex, Grid, Text } from "theme-ui";
import {
  selectPracticeMode,
  selectTotalandCorrectAnswered,
} from "../../../redux/guessNoteSlice";
import { useAppSelector } from "../../../redux/hooks";
import AccidentalNote from "../../AccidentalNote/AccidentalNote";
import GuessNoteNoteButton from "./GuessNoteNoteButton";

const GuessNoteGameControls: React.FunctionComponent = (props) => {
  const [total, correct] = useAppSelector(selectTotalandCorrectAnswered);
  const [timeLeft, { start }] = useCountDown(60000, 1000);
  const isPracticeMode = useAppSelector(selectPracticeMode);

  useEffect(() => {
    if (!isPracticeMode) {
      start();
    }
  }, []);

  return (
    <Grid
      gap="1rem"
      sx={{
        gridTemplateRows: "auto 1fr",
      }}
    >
      <Grid gap="0" variant="equalWidths" sx={{ justifyItems: "center" }}>
        <Text variant="stat">
          {correct}/{total}
        </Text>
        <Text variant="stat">{isPracticeMode ? "∞" : timeLeft / 1000}</Text>
      </Grid>
      <Grid columns="1fr 1fr" gap="0.2rem">
        <GuessNoteNoteButton>A</GuessNoteNoteButton>
        <GuessNoteNoteButton>B</GuessNoteNoteButton>
        <GuessNoteNoteButton>C</GuessNoteNoteButton>
        <GuessNoteNoteButton>
          <AccidentalNote sharpNote="C" flatNote="D"/>
        </GuessNoteNoteButton>
      </Grid>
    </Grid>
  );
};

export default GuessNoteGameControls;
