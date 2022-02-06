/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import {
  selectFretboardRotation,
  selectPointers,
} from "../../redux/guessNoteSlice";
import { useAppSelector } from "../../redux/hooks";
import FretboardSvg from "./FretboardSvg";
import { pointerStyles } from "./PointerStyles";

const Fretboard: React.FunctionComponent = (props) => {
  const rotation = useAppSelector(selectFretboardRotation);
  const pointersRedux = useAppSelector(selectPointers);

  const pointers = pointersRedux.map(([x, y]) => {
    const position = { "--x": x, "--y": y } as React.CSSProperties;
    return <div sx={pointerStyles} style={position} key={`${x}${y}`} />;
  });

  const styles = { "--rotation": `${rotation}` } as React.CSSProperties;

  return (
    <Box>
      <FretboardSvg />
      {pointers}
    </Box>
  );
};

export default Fretboard;
