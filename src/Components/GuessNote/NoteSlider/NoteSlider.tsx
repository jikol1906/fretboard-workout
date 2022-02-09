/** @jsxImportSource theme-ui */
import { Button, Flex, Grid, Slider, Text } from "theme-ui";
import AccidentalNote from "../../AccidentalNote/AccidentalNote";

interface INoteSliderProps {}

function getStringNumber(number: number) {
  switch (number) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return number + "th";
  }
}

const NoteSlider: React.FunctionComponent<INoteSliderProps> = (props) => {
  return (
    <Grid
      gap="0"
      sx={{ gridColumn: "2/3", alignContent: "center", justifyItems: "center" }}
    >
      <Text as="p" sx={{ display: "flex", alignItems: "center" }}>
        Place{" "}
        <Text variant="stat" mx="1">
          <AccidentalNote sharpNote="C" flatNote="A" />
        </Text>{" "}
        on the{" "}
        <Text mx="1" variant="stat">
          {getStringNumber(2)}
        </Text>{" "}
        string
      </Text>
      <Slider min="0" max="12" onChange={(e) => console.log(e.target.value)} />
      <Button>Place</Button>
    </Grid>
  );
};

export default NoteSlider;