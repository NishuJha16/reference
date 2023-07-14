import { useNavigate } from "react-router-dom";
import RetentionRequestForm from "../../components/request-form";
import { useEffect } from "react";

const RetentionRequest = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user?.name]);

  return <RetentionRequestForm />;
};
export default RetentionRequest;
