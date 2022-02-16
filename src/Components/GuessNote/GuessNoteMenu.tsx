import { useDispatch } from "react-redux";
import { Button, Grid, Label, Slider } from "theme-ui";
import {
  selectFretboardRotationCenter,
  selectFretboardRotationX,
  selectHideFretboardCircles,
  selectPracticeMode,
  setFretboardRotationCenter,
  setFretboardRotationX,
  setGameStarted,
  setHideFretboardCircles,
  setPracticemode,
} from "../../redux/guessNoteSlice";
import { useAppSelector } from "../../redux/hooks";
import Checkbox from "../Checkbox/Checkbox";
import { inputContainer, menuContainerStyles } from "./GuessNoteMenuStyles";

interface IGuessNoteMenuProps {}

const GuessNoteMenu: React.FunctionComponent<IGuessNoteMenuProps> = (props) => {
  const dispatch = useDispatch();
  const isPracticeMode = useAppSelector(selectPracticeMode);
  const circlesHidden = useAppSelector(selectHideFretboardCircles);
  const rotation = useAppSelector(selectFretboardRotationX);
  const rotationCenter = useAppSelector(selectFretboardRotationCenter);
  return (
    <Grid sx={menuContainerStyles}>
      <Button
        style={{ gridArea: "start-button", justifySelf:"center" }}
        onClick={(e) => dispatch(setGameStarted(true))}
      >
        Start
      </Button>
      <Grid sx={inputContainer} style={{ gridArea: "practice-mode" }}>
        <Label htmlFor="checkbox">Practice mode</Label>
        <Checkbox
          id="checkbox"
          checked={isPracticeMode}
          onChange={(e) => dispatch(setPracticemode(e.target.checked))}
        />
      </Grid>
      <Grid sx={inputContainer} style={{ gridArea: "hide-circles" }}>
        <Label htmlFor="checkbox">hide circles</Label>
        <Checkbox
          id="checkbox"
          checked={circlesHidden}
          onChange={(e) => dispatch(setHideFretboardCircles(e.target.checked))}
        />
      </Grid>
      <Grid sx={inputContainer} style={{ gridArea: "fretboard-rotation-x" }}>
        <Label htmlFor="sliderx">Rotation X</Label>
        <Slider
          value={rotation}
          onChange={(e) => dispatch(setFretboardRotationX(+e.target.value))}
          min="0"
          max="70"
          margin="1rem 0"
          id="sliderx"
        />
      </Grid>
      <Grid sx={inputContainer} style={{ gridArea: "fretboard-rotation-center" }}>
        <Label htmlFor="sliderCenter">Rotation Center</Label>
        <Slider
          value={rotationCenter}
          onChange={(e) => dispatch(setFretboardRotationCenter(+e.target.value))}
          min="0"
          max="10"
          margin="1rem 0"
          id="sliderCenter"
        />
      </Grid>
    </Grid>
  );
};

export default GuessNoteMenu;
