/** @jsxImportSource theme-ui */

import { useCallback, useEffect, useState } from "react";
import useCountDown from "react-countdown-hook";
import { Grid, Text } from "theme-ui";
import {
  findNodeSetCorrectFret,
  findNodeSetString,
  selectPracticeMode,
  selectTotalandCorrectAnswered,
  setCorrectAnswer,
  setGameStarted,
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
import GoBackButton from "../../GoBackButton/GoBackButton";
import { NoteButtons } from "../NoteButtons/NoteButtons";
import NoteSlider from "../NoteSlider/NoteSlider";

const fretboard = generateFretboardWithoutOpenStrings();

const GuessNoteGameControls: React.FunctionComponent = (props) => {
  const [total, correct] = useAppSelector(selectTotalandCorrectAnswered);
  const [mode,setMode] = useState<'guess'|'find'>("find")
  const [timeLeft, { start }] = useCountDown(60000, 1000);
  const dispatch = useAppDispatch();
  const isPracticeMode = useAppSelector(selectPracticeMode);

  const newRound = useCallback(() => {
    
    if(randomBool()) {
      findNodeMode();
    } else {
      chooseNoteMode();
    }

    function findNodeMode() {
      const fretNo = getRandomIntInclusive(0, fretboard[0].length - 1);
      const stringNo = getRandomIntInclusive(0, fretboard.length - 1);
      const noteToFind = fretboard[stringNo][fretNo];

      

      dispatch(setCorrectAnswer(noteToFind))
      dispatch(findNodeSetCorrectFret(fretNo))
      dispatch(findNodeSetString(stringNo))
      dispatch(setPointers([[getRandomIntInclusive(0, fretboard[0].length - 1),stringNo]]))
      setMode("find")

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
      setMode("guess")
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isPracticeMode) {
      start();
    }

    return () => {
      dispatch(setPointers([]))
      dispatch(resetCorrectAndTotalAnswers())
    }
  }, [dispatch,isPracticeMode,start,resetCorrectAndTotalAnswers,setPointers]);

  useEffect(() => {
    newRound();
  }, [newRound, total]);

  let currentMode;

  switch(mode) {
    case 'guess':
      currentMode = <NoteButtons disabled={!isPracticeMode && timeLeft/1000 <= 0}/>
      break;
    case 'find':
      currentMode = <NoteSlider />
  }

  return (
    <Grid
      sx={{
        gridTemplateRows: "auto 1fr",
        rowGap: "1",
        columnGap: "0",
        gridTemplateColumns: "1fr minmax(auto,100rem) 1fr",
      }}
    >
      <GoBackButton onClick={_ => dispatch(setGameStarted(false))}/>
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
      {currentMode}
    </Grid>
  );
};

export default GuessNoteGameControls;
