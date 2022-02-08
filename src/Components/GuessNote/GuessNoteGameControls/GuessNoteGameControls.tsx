/** @jsxImportSource theme-ui */

import { useCallback, useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { Grid, Text } from "theme-ui";
import {
  selectPracticeMode,
  selectTotalandCorrectAnswered,
  setCorrectAnswer,
  setNoteButtonValues,
  setPointers,
} from "../../../redux/guessNoteSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  generateFretboardWithFlatsAndSharps,
  getRandomIntInclusive,
  shuffle,
} from "../../../Utils/Utils";
import { NoteButtons } from "./NoteButtons";

let fretboard = generateFretboardWithFlatsAndSharps();
fretboard.forEach((s) => s.shift());
fretboard = fretboard.map((s) => s.map((n) => n.replace(/\d+/g, "")));

const GuessNoteGameControls: React.FunctionComponent = (props) => {
  const [total, correct] = useAppSelector(selectTotalandCorrectAnswered);
  const [timeLeft, { start }] = useCountDown(60000, 1000);
  const dispatch = useAppDispatch();
  const isPracticeMode = useAppSelector(selectPracticeMode);

  const newRound = useCallback(() => {
    const randInt1 = getRandomIntInclusive(0, fretboard[0].length - 1);
    const randInt2 = getRandomIntInclusive(0, fretboard.length - 1);
    const correctAnswer = fretboard[randInt2][randInt1];
    const string = fretboard[randInt2]
      .slice()
      .filter((n) => n !== correctAnswer);
    dispatch(setCorrectAnswer(correctAnswer));
    shuffle(string);

    const notesForAnswerButtons: [string, string, string, string] = [
      correctAnswer,
      string[0],
      string[1],
      string[2],
    ];
    shuffle(notesForAnswerButtons);

    dispatch(setNoteButtonValues(notesForAnswerButtons));
    dispatch(setCorrectAnswer(fretboard[randInt2][randInt1]));
    dispatch(setPointers([[randInt1, randInt2]]));
  }, [dispatch]);

  useEffect(() => {
    if (!isPracticeMode) {
      start();
    }
  }, []);

  useEffect(() => {
    newRound();
  }, [newRound, total]);

  return (
    <Grid
      sx={{
        gridTemplateRows: "auto 1fr",
        rowGap: "1",
        columnGap: "0",
        gridTemplateColumns: "1fr minmax(auto,100rem) 1fr",
      }}
    >
      <Grid
        gap="0"
        variant="equalWidths"
        sx={{ justifyItems: "center", gridColumn: "2/3" }}
      >
        <Text variant="stat">
          {correct}/{total}
        </Text>
        <Text variant="stat">{isPracticeMode ? "∞" : timeLeft / 1000}</Text>
      </Grid>
      <NoteButtons disabled={!isPracticeMode && timeLeft/1000 <= 0}/>
    </Grid>
  );
};

export default GuessNoteGameControls;
