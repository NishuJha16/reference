import { useState } from "react";
import CustomInput from "../input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const StepTwo = ({ onNextClick, onPrevClick }) => {
  const [stepTwoData, setStepTwoData] = useState({});

  const handleChange = (key, value) => {
    setStepTwoData((prevState) => ({ ...prevState, [key]: value }));
  };

  const isValid =
    stepTwoData?.lastDate &&
    stepTwoData?.currentBillRate &&
    stepTwoData?.currentMargin &&
    stepTwoData?.newBillRate &&
    stepTwoData?.newMargin;

  return (
    <div>
      <div className="steps">
        <div className="header">Additional Details</div>
        <div className="form">
          <div className="section">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Retention Type:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="proactive"
                name="radio-buttons-group"
                row
                value={stepTwoData?.retentionType}
                onChange={(event) =>
                  handleChange("retentionType", event.target.value)
                }
              >
                <FormControlLabel
                  value="proactive"
                  control={<Radio />}
                  label="Proactive"
                />
                <FormControlLabel
                  value="reactive"
                  control={<Radio />}
                  label="Reactive"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="section">
            <CustomInput
              label="Last Date of Employee"
              className="field"
              type="date"
              value={stepTwoData?.lastDate}
              onChange={(event) => handleChange("lastDate", event.target.value)}
            />

            <CustomInput
              label="Current Bill Rate"
              className="field"
              value={stepTwoData?.currentBillRate}
              onChange={(event) =>
                handleChange("currentBillRate", event.target.value)
              }
            />
            <CustomInput
              label="Current Margin"
              className="field"
              value={stepTwoData?.currentMargin}
              onChange={(event) =>
                handleChange("currentMargin", event.target.value)
              }
            />
          </div>
          <div className="section">
            <CustomInput
              label="New Bill Rate"
              className="field"
              value={stepTwoData?.newBillRate}
              onChange={(event) =>
                handleChange("newBillRate", event.target.value)
              }
            />
            <CustomInput
              label="New Margin"
              className="field"
              value={stepTwoData?.newMargin}
              onChange={(event) =>
                handleChange("newMargin", event.target.value)
              }
            />
            <CustomInput
              type="textArea"
              className="field"
              label="New Cost"
              value={stepTwoData?.newCost}
              onChange={(event) => handleChange("newCost", event.target.value)}
            />
          </div>

          <div className="section">
            <CustomInput
              label="Business Justification"
              type="textArea"
              value={stepTwoData?.businessJustification}
              onChange={(event) =>
                handleChange("businessJustification", event.target.value)
              }
            />
          </div>
          <div className="section">
            <CustomInput
              label="Risk"
              type="textArea"
              value={stepTwoData?.risk}
              onChange={(event) => handleChange("risk", event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="next-button section">
        <Button
          variant="outlined"
          onClick={() => {
            onPrevClick();
          }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          className="next-button"
          disabled={!isValid}
          onClick={() => {
            onNextClick({ stepTwoData: stepTwoData });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default StepTwo;
