/** @jsxImportSource theme-ui */

import { NavLink } from "react-router-dom";
import { Box, Flex, Grid } from "theme-ui";
import { btnStyles } from "../Styles/buttonStyles";

import MainHeading from "../Typography/MainHeading";

function Home() {
  return (
    <Flex sx={{ height: "100%" }}>
      <Box margin="auto">
        <MainHeading>Fretboard Workout</MainHeading>
        <Grid gap={["1", null, "2"]} sx={{ justifyContent: "center" }}>
          <NavLink to="guess-note" sx={btnStyles.primary}>Find node practice</NavLink>
          <NavLink to="guess-note" sx={btnStyles.primary}>Guess node practie</NavLink>
        </Grid>
      </Box>
    </Flex>
  );
}

export default Home;
