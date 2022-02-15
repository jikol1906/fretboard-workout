/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import {
  selectFretboardRotation,
  selectPointers,
  selectWrongClickedCrosses,
} from "../../redux/guessNoteSlice";
import { useAppSelector } from "../../redux/hooks";
import { maxHeightbpSmall } from "../../Styles/maxHeightMqs";
import WrongNoteClickedCross from "../WrongNoteClickedCross/WrongNoteClickedCross";
import FretboardSvg from "./FretboardSvg";
import { fretboardElementContainerStyles, pointerStyles } from "./PointerStyles";

const Fretboard: React.FunctionComponent = (props) => {
  const rotation = useAppSelector(selectFretboardRotation);
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

  const styles = { "--rotation": rotation } as React.CSSProperties;

  return (
    <Box
      sx={{
        alignSelf:"end",
        fontSize:["0.52rem","0.72rem","1.04rem","1.44rem"],
        position: 'relative',
        [maxHeightbpSmall]: {
          fontSize:".8rem",
        }
      }}
      style={styles}
    >
      <Box
        sx={{
          margin: "0 auto",
          width:'67.5em',
          position: "relative",
          transform: "perspective(650px) translateZ(calc(-1 * var(--rotation) * .15em)) rotateX(calc(var(--rotation) * 1deg))",
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
