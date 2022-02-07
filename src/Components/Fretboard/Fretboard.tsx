/** @jsxImportSource theme-ui */
import { useEffect } from "react";
import { Box } from "theme-ui";
import {
  selectFretboardRotation,
  selectPointers,
  setPointers,
} from "../../redux/guessNoteSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import FretboardSvg from "./FretboardSvg";
import { pointerStyles } from "./PointerStyles";

const Fretboard: React.FunctionComponent = (props) => {
  const rotation = useAppSelector(selectFretboardRotation);
  const pointersRedux = useAppSelector(selectPointers);
  const dispatch = useAppDispatch();

  const pointers = pointersRedux.map(([x, y]) => { 
    const position = { "--x": x, "--y": y } as React.CSSProperties;
    return <div sx={pointerStyles} style={position} key={`${x}${y}`} />;
  });

  const styles = { "--rotation": rotation } as React.CSSProperties;

  return (
    <Box
      sx={{
        alignSelf:"end",
        height:"16em",
        fontSize:"min(1.4vw,1.6rem)",
      }}
      style={styles}
    >
      <Box
        sx={{
          margin: "0 auto",
          width: "calc(67.25em - var(--rotation,0) * .1em)",
          position: "relative",
          transform: "perspective(500px) rotateX(calc(var(--rotation) * 1deg))",
        }}
      >
        <FretboardSvg />
        {pointers}
      </Box>
    </Box>
  );
};

export default Fretboard;
