import { useEffect, useRef } from "react";
import { Button, Grid } from "theme-ui";
import {
  selectNoteButtons,
  selectCorrectAnswer,
  incrementCorrectAnswered,
  incrementTotalAnswered,
  setWrongAnswerClicked,
} from "../../../redux/guessNoteSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import AccidentalNote from "../../AccidentalNote/AccidentalNote";
import { noteButtonGridStyles } from "../GuessNoteGameControls/GuessNoteGameControlsStyles";

interface INoteButtonsProps {
  disabled: boolean;
}

export const NoteButtons: React.FC<INoteButtonsProps> = ({ disabled }) => {
  const dispatch = useAppDispatch();
  const buttons = useAppSelector(selectNoteButtons);
  const correctAnswer = useAppSelector(selectCorrectAnswer);
  const [wrongClickedButtons,setWrongClickedButtons] = useState([false,false,false,false])

  const btn1ref = useRef<HTMLButtonElement>(null);
  const btn2ref = useRef<HTMLButtonElement>(null);
  const btn3ref = useRef<HTMLButtonElement>(null);
  const btn4ref = useRef<HTMLButtonElement>(null);

  const [b1, b2, b3, b4] = buttons.map((b) => {
    if (b.includes("#")) {
      const [sharp, flat] = b.split("/").map(n => n.replace(/#|b/,""));
      return <AccidentalNote sharpNote={sharp} flatNote={flat} />;
    }
    return <span style={{height:'1.5em'}}>{b}</span>;
  });

  const btnClicked = (val: string,btnNumber:number) => {
    if (val === correctAnswer) {
      dispatch(setWrongAnswerClicked(false));
      dispatch(incrementCorrectAnswered());
      dispatch(incrementTotalAnswered());
    } else {
      setWrongClickedButtons(prev => {
        prev[btnNumber] = true
        return prev
      })
      // dispatch(setWrongAnswerClicked(true));
      // dispatch(incrementTotalAnswered());
    }
  };

  useEffect(() => {
    const handleKeydown = (ev: KeyboardEvent) => {
      switch (ev.key) {
        case "1":
          btn1ref.current?.click();
          break;
        case "2":
          btn2ref.current?.click();
          break;
        case "3":
          btn3ref.current?.click();
          break;
        case "4":
          btn4ref.current?.click();
      }
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [buttons]);

  return (
    <Grid sx={noteButtonGridStyles} gap="0">
      <Button disabled={disabled} ref={btn1ref} onClick={() => btnClicked(buttons[0],0)} style={{gridArea: "b1"}} variant="noteBtn">{b1}</Button>
      <Button disabled={disabled} ref={btn2ref} onClick={() => btnClicked(buttons[1],1)} style={{gridArea: "b2"}} variant="noteBtn">{b2}</Button>
      <Button disabled={disabled} ref={btn3ref} onClick={() => btnClicked(buttons[2],2)} style={{gridArea: "b3"}} variant="noteBtn">{b3}</Button>
      <Button disabled={disabled} ref={btn4ref} onClick={() => btnClicked(buttons[3],3)} style={{gridArea: "b4"}} variant="noteBtn">{b4}</Button>
    </Grid>
  );
};
