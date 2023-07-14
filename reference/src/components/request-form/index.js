import { useLocation, useNavigate } from "react-router-dom";
import EmployeeDetails from "../employee-details";
import "./index.style.scss";
import { raisedRetentionRequests } from "../../dummy-data/asdm.meta";
import NavBar from "../navbar";
import { useState } from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import { toast } from "react-toastify";
import Stepper from "../stepper";
import { useEffect } from "react";

const RetentionRequestForm = () => {
  const { state } = useLocation();
  const selectedEmployee = raisedRetentionRequests?.filter(
    (request) => request?.profile?.employeeId === state?.employeeId
  );

  const [formData, setFormData] = useState({});

  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedEmployee.length) {
      navigate("/");
    }
  }, [navigate, selectedEmployee.length]);

  const onNextClick = (stepData) => {
    setFormData((prevState) => ({ ...prevState, stepData }));
    setActiveStep(activeStep + 1);
  };

  const onPrevClick = () => {
    setActiveStep(activeStep - 1);
  };

  const onSubmit = () => {
    toast(
      `Successfully Added Retention request for Employee ID: ${state?.employeeId}`,
      {
        hideProgressBar: true,
        type: "success",
        autoClose: 5000,
        position: "top-center",
      }
    );
    navigate("/");
  };

  return selectedEmployee.length ? (
    <div>
      <NavBar />
      <div className="retention-request-form">
        <Stepper activeIndex={activeStep} />
        <EmployeeDetails employeeDetails={selectedEmployee[0]} hideStepper />
        {activeStep === 1 && (
          <StepOne onNextClick={onNextClick} onPrevClick={onPrevClick} />
        )}
        {activeStep === 2 && (
          <StepTwo onNextClick={onNextClick} onPrevClick={onPrevClick} />
        )}
        {activeStep === 3 && (
          <StepThree onNextClick={onSubmit} onPrevClick={onPrevClick} />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};
export default RetentionRequestForm;
