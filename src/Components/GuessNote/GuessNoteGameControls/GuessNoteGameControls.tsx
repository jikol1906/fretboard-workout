/** @jsxImportSource theme-ui */

import { useCallback, useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { Grid, Text } from "theme-ui";
import {
  findNodeSetString,
  selectPracticeMode,
  selectTotalandCorrectAnswered,
  setCorrectAnswer,
  setNoteButtonValues,
  setPointers,
} from "../../../redux/guessNoteSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  generateFretboardWithFlatsAndSharps,
  generateFretboardWithoutOpenStrings,
  getRandomIntInclusive,
  randomBool,
  shuffle,
} from "../../../Utils/Utils";
import { NoteButtons } from "../NoteButtons/NoteButtons";
import NoteSlider from "../NoteSlider/NoteSlider";

const fretboard = generateFretboardWithoutOpenStrings();

const GuessNoteGameControls: React.FunctionComponent = (props) => {
  const [total, correct] = useAppSelector(selectTotalandCorrectAnswered);
  const [timeLeft, { start }] = useCountDown(60000, 1000);
  const dispatch = useAppDispatch();
  const isPracticeMode = useAppSelector(selectPracticeMode);

  const newRound = useCallback(() => {
    
    chooseNoteMode();
    if(randomBool()) {
    } else {
      findNodeMode();
    }

    function findNodeMode() {
      const fretNo = getRandomIntInclusive(0, fretboard[0].length - 1);
      const stringNo = getRandomIntInclusive(0, fretboard.length - 1);
      const noteToFind = fretboard[stringNo][fretNo];

      const onString = getRandomIntInclusive(0, fretboard.length - 1);

      dispatch(setCorrectAnswer(noteToFind))
      dispatch(findNodeSetString(onString))
      dispatch(setPointers([[getRandomIntInclusive(0, fretboard[0].length - 1),onString]]))

    }

    function chooseNoteMode() {
      const fretNo = getRandomIntInclusive(0, fretboard[0].length - 1);
      const stringNo = getRandomIntInclusive(0, fretboard.length - 1);
      const correctAnswer = fretboard[stringNo][fretNo];
      const string = fretboard[stringNo]
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
      dispatch(setCorrectAnswer(fretboard[stringNo][fretNo]));
      dispatch(setPointers([[fretNo, stringNo]]));
    }
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
      {/* <NoteButtons disabled={!isPracticeMode && timeLeft/1000 <= 0}/> */}
      <NoteSlider />
    </Grid>
  );
};

export default GuessNoteGameControls;
