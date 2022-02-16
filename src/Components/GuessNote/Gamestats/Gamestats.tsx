/** @jsxImportSource theme-ui */

import { useDispatch } from "react-redux";
import { Box, Button, Grid, Heading, Text } from "theme-ui";
import { selectTotalandCorrectAnswered, setGameStarted } from "../../../redux/guessNoteSlice";
import { useAppSelector } from "../../../redux/hooks";
import Modal from "../../Modal/Modal";
import { container } from "./GamestatsStyles";

interface IGamestatsProps {
    onTryAgainClicked:() => void;
    show:boolean
}

const Gamestats: React.FunctionComponent<IGamestatsProps> = ({onTryAgainClicked,show}) => {
  const dispatch = useDispatch();
  const [total, correct] = useAppSelector(selectTotalandCorrectAnswered);
  return (
  <Modal show={show}>
    <Grid
      sx={container}
    >
      <Box sx={{ textAlign: "center",gridArea:'header' }}>
        <Heading>Results</Heading>
      </Box>
      <Grid gap="1" sx={{ alignContent: "center",gridArea:'stats' }}>
        <Text as="p" sx={{ fontSize: "1.5rem", display: "flex" }}>
          <span style={{ flex: "1" }}>total:</span>
          <span>{total}</span>
        </Text>
        <Text as="p" sx={{ fontSize: "1.5rem", display: "flex" }}>
          <span style={{ flex: "1" }}>correct:</span>
          <span>{correct}</span>
        </Text>
      </Grid>
      <Grid gap="2" sx={{gridArea:'btns'}}>
        <Button onClick={(e) => dispatch(setGameStarted(false))}>Main menu</Button>
        <Button onClick={onTryAgainClicked}>try again</Button>
      </Grid>
    </Grid>
  </Modal>
  )
};

export default Gamestats;
