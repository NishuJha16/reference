import { TextField } from "@mui/material";
import "./index.style.scss";
const CustomInput = (props) => {
  return (
    <div className="input-wrapper">
      <div className="input-label">{props.label}</div>
      <TextField {...props} />
    </div>
  );
};
export default CustomInput;
