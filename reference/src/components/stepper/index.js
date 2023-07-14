import "./index.style.scss";
import StepOne from "../../icons/stepper.svg";
import StepEnd from "../../icons/stepper-end.svg";
const Stepper = ({ activeIndex }) => {
  const stepData = [
    {
      title: "Step 1",
      description: "Employee Details",
      icon: StepOne,
    },
    {
      title: "Step 2",
      description: "Retention Type",
      icon: StepOne,
    },
    {
      title: "Step 3",
      description: "Replacement Details",
      icon: StepEnd,
    },
  ];
  return (
    <div className="stepper-wrapper">
      {stepData.map((step, index) => (
        <div
          className={activeIndex - 1 >= index ? "step active" : `step`}
          key={index}
        >
          <img src={step.icon} alt="step" />
          <div className="title">
            <div className="title-bold">{step.title}</div>
            <div className="hint">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Stepper;
