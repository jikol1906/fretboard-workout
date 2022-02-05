/** @jsxImportSource theme-ui */

import { Button as ThemeUiButton, SxProp, ThemeUIStyleObject } from "theme-ui";

interface IButtonProps {
  secondary?: boolean;
}

const Button: React.FunctionComponent<IButtonProps & SxProp> = ({
  children,
  secondary,
  ...rest
}) => {
  const newLocal : ThemeUIStyleObject = {
    padding: "0.6em 1.7em",
    cursor: "pointer",
    textTransform: "uppercase",
    fontFamily: "main",
    borderRadius: "999px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "text",
    color: secondary ? "white" : "text",
    bg: secondary ? "text" : 'transparent'
  };
  return (
    <ThemeUiButton
      sx={newLocal}
    {...rest}
    >
      {children}
    </ThemeUiButton>
  );
};

export default Button;
