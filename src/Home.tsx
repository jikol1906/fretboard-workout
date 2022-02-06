/** @jsxImportSource theme-ui */

import { NavLink } from "react-router-dom";
import { Box, Flex, Grid, Link, Themed } from "theme-ui";

import MainHeading from "./Typography/MainHeading";




function Home() {
  return (
    <Flex sx={{height:'100%'}}>
      <Box margin="auto">
        <MainHeading>Fretboard Workout</MainHeading>
        <Grid gap={["1",null,"2"]} sx={{justifyContent:"center"}}>
          <Themed.a as={NavLink} to={"/test"}>Find node mode</Themed.a>
          <Themed.a as={NavLink} to={"/test"}>Guess node mode</Themed.a>
        </Grid>
      </Box>
    </Flex>
  );
}

export default Home;
