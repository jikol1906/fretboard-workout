/** @jsxImportSource theme-ui */

import { useCallback, useEffect, useState } from "react";
import useCountDown from "react-countdown-hook";
import { Grid, Text } from "theme-ui";
import {
  findNodeSetCorrectFret,
  findNodeSetString,
  resetCorrectAndTotalAnswers,
  selectPracticeMode,
  selectTotalandCorrectAnswered,
  setCorrectAnswer,
  setGameStarted,
  setNoteButtonValues,
  setPointers,
  setWrongClickedButtons,
  setWrongClickedCrosses,
} from "../../../redux/guessNoteSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  generateFretboardWithoutOpenStrings,
  getRandomIntInclusive,
  randomBool,
  shuffle,
} from "../../../Utils/Utils";
import GoBackButton from "../../GoBackButton/GoBackButton";
import Gamestats from "../Gamestats/Gamestats";
import { NoteButtons } from "../NoteButtons/NoteButtons";
import NoteSlider from "../NoteSlider/NoteSlider";
import { guessNoteGameControlsGridStyles } from "./GuessNoteGameControlsStyles";

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

  const restartGame = useCallback(() => {
    start(60000)
    dispatch(resetCorrectAndTotalAnswers())
    dispatch(setWrongClickedCrosses([]))
    dispatch(setWrongClickedButtons([false,false,false,false,]))
  },[dispatch,start])

  useEffect(() => {
    if (!isPracticeMode) {
      start();
    }

    return () => {
      dispatch(setPointers([]))
      dispatch(resetCorrectAndTotalAnswers())
    }
  }, [dispatch,isPracticeMode,start]);

  useEffect(() => {
    newRound();
  }, [newRound, correct]);

  let currentMode;

  switch(mode) {
    case 'guess':
      currentMode = <NoteButtons />
      break;
    case 'find':
      currentMode = <NoteSlider />
  }

  return (
    <Grid
      sx={guessNoteGameControlsGridStyles}
    >
      <GoBackButton onClick={_ => dispatch(setGameStarted(false))}/>

        <Text variant="stat" style={{gridArea:'stat1', justifySelf:'center', alignSelf:'center'}}>
          {correct}/{total}
        </Text>
        <Text variant="stat" style={{gridArea:'stat2', justifySelf:'center', alignSelf:'center'}}>{isPracticeMode ? "∞" : timeLeft / 1000}</Text>
      <Gamestats show={timeLeft <= 0 && !isPracticeMode} onTryAgainClicked={restartGame} />
      {currentMode}
    </Grid>
  );
};

export default GuessNoteGameControls;
