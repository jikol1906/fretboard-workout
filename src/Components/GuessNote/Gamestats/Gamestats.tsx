/** @jsxImportSource theme-ui */

import { Box, Button, Grid, Heading, Text } from "theme-ui";
import Modal from "../../Modal/Modal";

interface IGamestatsProps {
    onTryAgainClicked:() => void
}

const Gamestats: React.FunctionComponent<IGamestatsProps> = ({onTryAgainClicked}) => (
  <Modal show={true}>
    <Grid
      gap="3"
      sx={{
        height: "100%",
        gridTemplateRows: "auto 1fr auto",
        bg: "background",
        p: "6rem",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Heading>Results</Heading>
      </Box>
      <Grid gap="1" sx={{ alignContent: "center" }}>
        <Text as="p" sx={{ fontSize: "1.5rem", display: "flex" }}>
          <span style={{ flex: "1" }}>total:</span>
          <span>6</span>
        </Text>
        <Text as="p" sx={{ fontSize: "1.5rem", display: "flex" }}>
          <span style={{ flex: "1" }}>correct:</span>
          <span>6</span>
        </Text>
      </Grid>
      <Grid gap="2">
        <Button>Main menu</Button>
        <Button onClick={onTryAgainClicked}>try again</Button>
      </Grid>
    </Grid>
  </Modal>
);

export default Gamestats;
