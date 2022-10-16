/** @jsxImportSource theme-ui */

import { NavLink } from "react-router-dom";
import { Box, Flex, Grid } from "theme-ui";
import ComingSoon from "../Components/ComingSoon/ComingSoon";
import { btnStyles } from "../Styles/buttonStyles";

import MainHeading from "../Typography/MainHeading";

function Home() {
  return (
    <Flex sx={{ height: "100%" }}>
      <Box margin="auto">
        <MainHeading>Fretboard Workout</MainHeading>
        <Grid gap={["1", null, "2"]} sx={{ justifyContent: "center" }}>
          <NavLink to="guess-note" sx={btnStyles.primary}>Guess note mode</NavLink>
          <ComingSoon overlayBorderradius="999px">
            <NavLink to="#" tabIndex={-1} sx={btnStyles.primary}>Find note mode</NavLink>
          </ComingSoon>
        </Grid>
      </Box>
    </Flex>
  );
}

export default Home;
