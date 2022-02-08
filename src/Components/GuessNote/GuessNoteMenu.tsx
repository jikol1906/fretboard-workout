import { useDispatch } from "react-redux";
import { Button, Grid, Label, Slider } from "theme-ui";
import { selectFretboardRotation, setFretboardRotation, setGameStarted, setHideFretboardCircles } from "../../redux/guessNoteSlice";
import { useAppSelector } from "../../redux/hooks";
import AccidentalNote from "../AccidentalNote/AccidentalNote";
import Checkbox from "../Checkbox/Checkbox";
import { inputContainer, menuContainerStyles } from "./GuessNoteMenuStyles";

interface IGuessNoteMenuProps {}

const GuessNoteMenu: React.FunctionComponent<IGuessNoteMenuProps> = (props) => {
  const dispatch = useDispatch();
  const rotation = useAppSelector(selectFretboardRotation);
  return (
    <Grid sx={menuContainerStyles}>
      <Button 
      style={{ gridArea: "start-button" }}
      onClick={e => dispatch(setGameStarted(true))}
      >Start</Button>
      <Grid sx={inputContainer} style={{gridArea:'practice-mode'}}>
        <Label htmlFor="checkbox">Practice mode</Label>
        <Checkbox id="checkbox" />
      </Grid>
      <Grid sx={inputContainer} style={{gridArea:'hide-circles'}}>
        <Label htmlFor="checkbox">hide circles</Label>
        <Checkbox id="checkbox" onChange={e => dispatch(setHideFretboardCircles(e.target.checked))}/>
      </Grid>
      <Grid sx={inputContainer} style={{gridArea:'fretboard-rotation'}} >
        <Label htmlFor="slider">Fretboard Rotation</Label>
        <Slider
          sx={{ width: "50%" }}
          value={rotation}
          onChange={e => dispatch(setFretboardRotation(+e.target.value))}
          min="0"
          max="70"
          margin="1rem 0"
          id="slider"
        />
      </Grid>
    </Grid>
  );
};

export default GuessNoteMenu;
