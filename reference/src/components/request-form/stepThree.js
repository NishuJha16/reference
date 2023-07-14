import { useState } from "react";
import CustomInput from "../input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const StepThree = ({ onNextClick, onPrevClick }) => {
  const [stepThreeData, setStepThreeData] = useState({});

  const handleChange = (key, value) => {
    setStepThreeData((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <div>
      <div className="steps">
        <div className="header">Replacement Details of the Employee</div>
        <div className="form">
          <div className="section">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Replacement Offer Raised:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="yes"
                name="radio-buttons-group"
                row
                value={stepThreeData?.replacementOfferRaised}
                onChange={(event) =>
                  handleChange("replacementOfferRaised", event.target.value)
                }
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Replacement Offered:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="internal"
                name="radio-buttons-group"
                row
                value={stepThreeData?.replacementOffered}
                onChange={(event) =>
                  handleChange("replacementOffered", event.target.value)
                }
              >
                <FormControlLabel
                  value="internal"
                  control={<Radio />}
                  label="Internal"
                />
                <FormControlLabel
                  value="external"
                  control={<Radio />}
                  label="External"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {stepThreeData?.replacementOffered === "internal" ? (
            <div className="section">
              <CustomInput
                label="Name of Employee"
                className="field"
                value={stepThreeData?.employeeName}
                onChange={(event) =>
                  handleChange("employeeName", event.target.value)
                }
              />

              <CustomInput
                label="Employee Id"
                className="field"
                value={stepThreeData?.employeeId}
                onChange={(event) =>
                  handleChange("employeeId", event.target.value)
                }
              />
              <CustomInput
                label="Assignment Start Date"
                className="field"
                type="date"
                value={stepThreeData?.assignmentDate}
                onChange={(event) =>
                  handleChange("assignmentDate", event.target.value)
                }
              />
            </div>
          ) : (
            <div className="section">
              <CustomInput
                label="No. of offers Made"
                className="field"
                value={stepThreeData?.noOfOffers}
                onChange={(event) =>
                  handleChange("noOfOffers", event.target.value)
                }
              />
              <CustomInput
                label="Expected Date of Joining"
                className="field"
                type="date"
                value={stepThreeData?.expectedJoiningDate}
                onChange={(event) =>
                  handleChange("expectedJoiningDate", event.target.value)
                }
              />
            </div>
          )}
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
          onClick={() => {
            onNextClick({ stepThreeData: stepThreeData });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default StepThree;
