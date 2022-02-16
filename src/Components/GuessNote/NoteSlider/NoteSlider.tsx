/** @jsxImportSource theme-ui */
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Slider, Text } from "theme-ui";
import { incrementCorrectAnswered, incrementTotalAnswered, selectCorrectAnswer, selectFindNodeCorrectFret, selectFindNodeString, selectPointers, selectWrongClickedCrosses, setPointers, setWrongClickedCrosses } from "../../../redux/guessNoteSlice";
import { useAppSelector } from "../../../redux/hooks";
import AccidentalNote from "../../AccidentalNote/AccidentalNote";
import useEventListener from "../../Hooks/useEventListener";

interface INoteSliderProps {}

function getStringNumber(number: number) {
  switch (number) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return number + "th";
  }
}

const NoteSlider: React.FunctionComponent<INoteSliderProps> = (props) => {

  const sliderRef = useRef<HTMLInputElement>(null);
  const [sliderVal, setSliderVal] = useState(0);
  const dispatch = useDispatch();
  const pointers = useAppSelector(selectPointers);
  const correctAnswer = useAppSelector(selectCorrectAnswer);
  const correctFret = useAppSelector(selectFindNodeCorrectFret);
  const stringNumber = useAppSelector(selectFindNodeString);
  const wrongClickedCrossesRedux = useAppSelector(selectWrongClickedCrosses);

  useEventListener("keyup",e => {
    if(e.key === 'Enter') {
      buttonClicked() 
    }
  })

  const buttonClicked = useCallback(() => {
    if(pointers[0][0] === correctFret) {
      dispatch(incrementCorrectAnswered())
      dispatch(incrementTotalAnswered())
      dispatch(setWrongClickedCrosses([])) 
    } else {
      const alreadyClicked = wrongClickedCrossesRedux.some(([fret,_]) => {
        return fret === sliderVal 
      })

      if(!alreadyClicked) {

        dispatch(setWrongClickedCrosses([...wrongClickedCrossesRedux,[sliderVal,stringNumber]])) 
        dispatch(incrementTotalAnswered())
      }
      
    }

    sliderRef.current?.focus();
        
  },[pointers,correctFret,dispatch,sliderVal,stringNumber,wrongClickedCrossesRedux]);

  useEffect(() => {
    sliderRef.current?.focus();
  });

  useEffect(() => {
    if (pointers[0]) {
      setSliderVal(pointers[0][0]);
    }
  }, [pointers]);

  useEffect(() => {
    return () => {dispatch(setWrongClickedCrosses([]))}
  },[dispatch])

  const sliderHandler = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const currentString = pointers[0][1];
    dispatch(setPointers([[+e.currentTarget.value, currentString]]));
  },[dispatch,pointers]);

  let correctAnswerJsx;

  if(correctAnswer.includes("#")) {
    const notes = correctAnswer.replace(/#|b/g,"").split("/")
    correctAnswerJsx = <AccidentalNote sharpNote={notes[0]} flatNote={notes[1]} />
  } else {correctAnswerJsx = correctAnswer}


  return (
    <Grid
      gap={["3","2"]}
      style={{gridArea:'control'}}
      sx={{ gridColumn: "2/3", alignContent: "center", justifyItems: "center"}}
    >
      <Text as="p" sx={{ display: "flex", alignItems: "center" }}>
        Place{" "}
        <Text variant="stat" mx={[1, 2, 3]}>
          {correctAnswerJsx}
        </Text>{" "}
        on the{" "}
        <Text mx={[1, 2, 3]} variant="stat">
          {getStringNumber(stringNumber + 1)}
        </Text>{" "}
        string
      </Text>
      <Slider
        ref={sliderRef}
        m="0"
        min="0"
        max="11"
        value={sliderVal}
        onChange={sliderHandler}
      />
      <Button onClick={buttonClicked}>
        Place
      </Button>
    </Grid>
  );
};

export default NoteSlider;
