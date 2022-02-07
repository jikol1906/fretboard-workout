/** @jsxImportSource theme-ui */

import { checkBoxLabelStyles, checkBoxSliderStyles } from "./CheckboxStyles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Checkbox: React.FunctionComponent<Props> = ({...props}) => {
  return (
    <label sx={checkBoxLabelStyles}>
      <input {...props} type="checkbox" />
      <span sx={checkBoxSliderStyles}></span>
    </label>
  );
};

export default Checkbox;
