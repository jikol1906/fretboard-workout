import { Box, Button, Grid, Slider } from "theme-ui";
import Checkbox from "../Checkbox/Checkbox";

interface IGuessNoteMenuProps {}

const GuessNoteMenu: React.FunctionComponent<IGuessNoteMenuProps> = (props) => {
  return (
    <Grid
      sx={{
        justifyItems: "center",
        gridTemplateColumns: "auto auto",
        gridTemplateAreas:`
        'a1 a2'
        'a1 a3'
        `,
        justifyContent: "center",
        alignContent:"center",
        alignItems: "center",
        columnGap:"10rem"
      }}
    >
      <Button sx={{gridArea:'a1'}}>Start</Button>
      <Box sx={{gridArea:'a2'}}>
        <Checkbox id="checkbox" onChange={(e) => console.log("here",e.target.checked)}/>
      </Box>
      <Box sx={{gridArea:'a3'}}>
        <Slider />
      </Box>
    </Grid>
  );
};

export default GuessNoteMenu;
