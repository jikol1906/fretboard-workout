/** @jsxImportSource theme-ui */

import { Button } from "theme-ui";

interface IGuessNoteNoteButtonProps {
}

const GuessNoteNoteButton: React.FunctionComponent<IGuessNoteNoteButtonProps> = ({children}) => {
  return <Button variant="noteBtn">
      {children}
  </Button>;
};

export default GuessNoteNoteButton;
