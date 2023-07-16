import { TextField } from "@mui/material";
import "./index.style.scss";
const CustomInput = (props) => {
  const { label, ...otherProps } = props;
  return (
    <div className="input-wrapper">
      <div className="input-label">{props.label}</div>
      <TextField {...otherProps} />
    </div>
  );
};
export default CustomInput;
