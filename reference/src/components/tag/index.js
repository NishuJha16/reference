import "./index.style.scss";
const Tag = ({ type, text, customClass }) => {
  return <div className={`tag ${type} ${customClass}`}>{text}</div>;
};
export default Tag;
