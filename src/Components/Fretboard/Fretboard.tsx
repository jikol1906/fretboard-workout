/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import {
  selectFretboardRotation,
  selectPointers,
} from "../../redux/guessNoteSlice";
import { useAppSelector } from "../../redux/hooks";
import FretboardSvg from "./FretboardSvg";
import { fretboardElementContainerStyles, pointerStyles } from "./PointerStyles";

const Fretboard: React.FunctionComponent = (props) => {
  const rotation = useAppSelector(selectFretboardRotation);
  const pointersRedux = useAppSelector(selectPointers);

  const pointers = pointersRedux.map(([x, y]) => { 
    const position = { "--x": x, "--y": y } as React.CSSProperties;
    return <Box sx={fretboardElementContainerStyles} style={position} key={`${x}${y}`} >
      <div sx={pointerStyles} />
    </Box>;
  });

  const styles = { "--rotation": rotation } as React.CSSProperties;

  return (
    <Box
      sx={{
        alignSelf:"end",
        height:"17em",
        fontSize:"min(1.4vw,1.6rem)",
        position: 'relative',
        top:"calc(var(--rotation) * 0.05em)",
      }}
      style={styles}
    >
      <Box
        sx={{
          margin: "0 auto",
          width: "calc(65.25em - var(--rotation,0) * .1em)",
          position: "relative",
          transform: "perspective(650px) rotateX(calc(var(--rotation) * 1deg))",
        }}
      >
        <FretboardSvg/>
        {pointers}
      </Box>
    </Box>
  );
};

export default Fretboard;
