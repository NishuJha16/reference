import Tag from "../tag";
import "./index.style.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Raised",
  "Approved by VH/VDHUH",
  "Approval Pendinh at HRBP",
  "Approval Pending at HR Geo Head",
  "Approval Pending at CPO",
  "Approved/Rejected",
];

const EmployeeDetails = ({ employeeDetails, hideStepper = false }) => {
  return (
    <div className="emp-details">
      <div className="ed-wrapper">
        <div className="header">Employee Details</div>
        <div className="ed-content">
          <img src={employeeDetails.profile.profileImage} alt="img" />
          <div className="section">
            <div className="text-bold">{employeeDetails.profile.name}</div>
            <div className="hint">{employeeDetails.designation}</div>
            <div className="hint">{employeeDetails.email}</div>
            <Tag text={employeeDetails.phone} type="success" />
          </div>
          <div className="section">
            <div className="text-bold">Experience</div>
            <div className="hint">{employeeDetails.experience}</div>
            <div className="text-bold">EmployeeId</div>
            <div className="hint">{employeeDetails.profile.employeeId}</div>
          </div>
          <div className="section">
            <div className="text-bold">Reporting Manager</div>
            <div className="hint">{employeeDetails.reportingManager}</div>
            <div className="hint">Project</div>
            <div className="hint">{employeeDetails.projects}</div>
          </div>
        </div>
      </div>
      {!hideStepper && (
        <div className="ed-wrapper">
          <div className="header">Request Status</div>
          <div className="ed-content">
            <Stepper
              activeStep={employeeDetails.requestStatusStep}
              alternativeLabel
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
      )}
    </div>
  );
};
export default EmployeeDetails;
