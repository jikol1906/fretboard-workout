/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Slider, Text } from "theme-ui";
import { selectPointers, setPointers } from "../../../redux/guessNoteSlice";
import { useAppSelector } from "../../../redux/hooks";
import AccidentalNote from "../../AccidentalNote/AccidentalNote";

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
  const stringNumber = useAppSelector(selectFindNodeString);

  const buttonClicked = useCallback(() => {
    
  },[]);

  useEffect(() => {
    sliderRef.current?.focus()
  },[pointers])
  
  useEffect(() => {    
    if(pointers[0]) {
      console.log(pointers[0]);
      console.log(pointers[0][0]);
      
      setSliderVal(pointers[0][0])
    }
  },[pointers])

  const sliderHandler = (e: React.FormEvent<HTMLInputElement>) => {

  let correctAnswerJsx;

  if(correctAnswer.includes("#")) {
    const notes = correctAnswer.replace(/#|b/g,"").split("/")
    correctAnswerJsx = <AccidentalNote sharpNote={notes[0]} flatNote={notes[1]} />
  } else {correctAnswerJsx = correctAnswer}


  return (
    <Grid
      gap="0"
      sx={{ gridColumn: "2/3", alignContent: "center", justifyItems: "center" }}
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
      <Button onClick={buttonClicked}>
        Place
      </Button>
    </Grid>
  );
};

export default NoteSlider;
