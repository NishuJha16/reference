import { useState } from "react";
import CustomInput from "../input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const StepOne = ({ onNextClick }) => {
  const [stepOneData, setStepOneData] = useState({});

  const handleChange = (key, value) => {
    setStepOneData((prevState) => ({ ...prevState, [key]: value }));
  };

  const isValid =
    stepOneData?.tsr &&
    stepOneData?.grade &&
    stepOneData?.performanceRating &&
    stepOneData?.experience &&
    stepOneData?.billingType;

  return (
    <div>
      <div className="steps">
        <div className="header">Additional Details</div>
        <div className="form">
          <div className="section">
            <CustomInput
              label="TSR"
              className="field"
              value={stepOneData?.tsr}
              onChange={(event) => handleChange("tsr", event.target.value)}
            />
            <CustomInput
              label="Location"
              className="field"
              value={stepOneData?.location}
              onChange={(event) => handleChange("location", event.target.value)}
            />
          </div>
          <div className="section">
            <CustomInput
              label="Billing Type"
              className="field"
              value={stepOneData?.billingType}
              onChange={(event) =>
                handleChange("billingType", event.target.value)
              }
            />
            <CustomInput
              label="Grade"
              className="field"
              value={stepOneData?.grade}
              onChange={(event) => handleChange("grade", event.target.value)}
            />
            <CustomInput
              label="Performance Rating"
              className="field"
              value={stepOneData?.performanceRating}
              onChange={(event) =>
                handleChange("performanceRating", event.target.value)
              }
            />
          </div>
          <div className="section">
            <CustomInput
              type="textArea"
              className="field"
              label="Experience"
              value={stepOneData?.experience}
              onChange={(event) =>
                handleChange("experience", event.target.value)
              }
            />
          </div>
          <div className="section">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                In Hand Offer Letter Validated:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="yes"
                name="radio-buttons-group"
                row
                value={stepOneData?.offerValidated}
                onChange={(event) =>
                  handleChange("offerValidated", event.target.value)
                }
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <CustomInput type="file" label="Attachment" />
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        disabled={!isValid}
        className="next-button"
        onClick={() => {
          onNextClick({ stepOneData: stepOneData });
        }}
      >
        Next
      </Button>
    </div>
  );
};
export default StepOne;
