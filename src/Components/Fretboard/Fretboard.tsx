/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import {
  selectFretboardRotationCenter,
  selectFretboardRotationX,
  selectPointers,
  selectWrongClickedCrosses,
} from "../../redux/guessNoteSlice";
import { useAppSelector } from "../../redux/hooks";
import { maxHeightbpSmall } from "../../Styles/maxHeightMqs";
import WrongNoteClickedCross from "../WrongNoteClickedCross/WrongNoteClickedCross";
import FretboardSvg from "./FretboardSvg";
import { fretboardElementContainerStyles, pointerStyles } from "./PointerStyles";

const Fretboard: React.FunctionComponent = (props) => {
  const rotationX = useAppSelector(selectFretboardRotationX);
  const rotationCenter = useAppSelector(selectFretboardRotationCenter);
  const pointersRedux = useAppSelector(selectPointers);
  const wrongClickedCrossesRedux = useAppSelector(selectWrongClickedCrosses);
  
  const pointers = pointersRedux.map(([x, y]) => { 
    const position = { "--x": x, "--y": y } as React.CSSProperties;
    return <Box sx={fretboardElementContainerStyles} style={position} key={`${x}${y}`} >
      <div sx={pointerStyles} />
    </Box>;
  });

  const wrongClickedCrosses = wrongClickedCrossesRedux.map(([x,y]) => {
    const position = { "--x": x, "--y": y } as React.CSSProperties;
    return <Box sx={{...fretboardElementContainerStyles, width:'4em'}} style={position} key={`${x}${y}`} >
      <WrongNoteClickedCross/>
    </Box>
  }) 

  const styles = {
    "--rotationX": rotationX,
    "--rotationCenter": rotationCenter,
  } as React.CSSProperties;

  return (
    <Box
      sx={{
        alignSelf:"end",
        fontSize:"clamp(4.5px, calc(0.28125rem + ((1vw - 3.2px) * 1.5909)), 18.5px)",
        minHeight:'0vw',
        position: 'relative',
        [maxHeightbpSmall]: {
          fontSize:["6.5px",null,"8.3px"],
        }
      }}
      style={styles}
    >
      <Box
        sx={{
          margin: "0 auto",
          width:'67.5em',
          position: "relative",
          transform: "perspective(650px) translateZ(calc(-1 * var(--rotationX) * .15em)) rotateX(calc(var(--rotationX) * 1deg)) rotate(calc(var(--rotationCenter) * 1deg))",
        }}
      >
        <FretboardSvg/>
        {pointers}
        {wrongClickedCrosses}
      </Box>
    </Box>
  );
};

export default Fretboard;
