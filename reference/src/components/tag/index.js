import "./index.style.scss";
const Tag = ({ type, text, customClass, onClick }) => {
  return (
    <div className={`tag ${type} ${customClass}`} onClick={onClick}>
      {text}
    </div>
  );
};
export default Tag;
