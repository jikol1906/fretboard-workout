/** @jsxImportSource theme-ui */

import { useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { Button, Grid, Text } from "theme-ui";
import {
  selectPracticeMode,
  selectTotalandCorrectAnswered,
} from "../../../redux/guessNoteSlice";
import { useAppSelector } from "../../../redux/hooks";
import AccidentalNote from "../../AccidentalNote/AccidentalNote";
import { noteButtonGridStyles } from "./GuessNoteGameControlsStyles";


const GuessNoteGameControls: React.FunctionComponent = (props) => {
  const [total, correct] = useAppSelector(selectTotalandCorrectAnswered);
  const [timeLeft, { start }] = useCountDown(60000, 1000);
  const isPracticeMode = useAppSelector(selectPracticeMode);

  useEffect(() => {
    if (!isPracticeMode) {
      start();
    }
  }, []);

  return (
    <Grid
      sx={{
        gridTemplateRows: "auto 1fr",
        rowGap:'1',
        columnGap:'0',
        gridTemplateColumns:'1fr minmax(auto,100rem) 1fr'
      }}
    >
      <Grid gap="0" variant="equalWidths" sx={{ justifyItems: "center", gridColumn:'2/3' }}>
        <Text variant="stat">
          {correct}/{total}
        </Text>
        <Text variant="stat">{isPracticeMode ? "∞" : timeLeft / 1000}</Text>
      </Grid>
      <Grid sx={noteButtonGridStyles} gap="0">
        <Button style={{gridArea:'b1'}} variant="noteBtn">A</Button>
        <Button style={{gridArea:'b2'}} variant="noteBtn">B</Button>
        <Button style={{gridArea:'b3'}} variant="noteBtn">C</Button>
        <Button style={{gridArea:'b4'}} variant="noteBtn">
          <AccidentalNote sharpNote="D" flatNote="G"/>
        </Button>
      </Grid>
    </Grid>
  );
};

export default GuessNoteGameControls;
