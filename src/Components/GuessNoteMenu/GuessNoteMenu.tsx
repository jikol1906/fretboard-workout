import { useDispatch } from "react-redux";
import { Button, Grid, Label, Slider } from "theme-ui";
import { selectFretboardRotation, setFretboardRotation } from "../../redux/guessNoteSlice";
import { useAppSelector } from "../../redux/hooks";
import Checkbox from "../Checkbox/Checkbox";
import { inputContainer, menuContainerStyles } from "./GuessNoteMenuStyles";

interface IGuessNoteMenuProps {}

const GuessNoteMenu: React.FunctionComponent<IGuessNoteMenuProps> = (props) => {
  const dispatch = useDispatch();
  const rotation = useAppSelector(selectFretboardRotation);
  return (
    <Grid sx={menuContainerStyles}>
      <Button style={{ gridArea: "a1" }}>Start</Button>
      <Grid sx={inputContainer} style={{gridArea:'a2'}}>
        <Label htmlFor="checkbox">Practice mode</Label>
        <Checkbox id="checkbox" />
      </Grid>
      <Grid sx={inputContainer} style={{gridArea:'a3'}} >
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
