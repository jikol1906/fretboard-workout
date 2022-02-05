/** @jsxImportSource theme-ui */

import { Flex, Grid } from "theme-ui";
import Button from "./Button/Button";
import MainHeading from "./Typography/MainHeading";



function App() {
  return (
    <Flex sx={{height:'100%'}}>
      <Flex margin="auto" sx={{flexDirection:"column"}}>
        <MainHeading sx={{mb:'5rem'}}>Fretboard Workout</MainHeading>
        <Grid sx={{justifyContent:"center"}}>
          <Button sx={{fontSize:"2rem"}}>Find node mode</Button>
          <Button  secondary sx={{fontSize:"2rem"}}>Guess node mode</Button>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default App;
