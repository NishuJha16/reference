import "./index.style.scss";
import RequestPieChart from "../pie-chart";
import RaisedRetentionRequests from "../raised-retention-requests";
import {
  raisedRetentionRequests,
  validEmployees,
} from "../../dummy-data/asdm.meta";
import { requestStatus } from "../../helpers/constants";
import ApprovedIcon from "../../icons/approved.svg";
import RejectedIcon from "../../icons/rejected.svg";
import OpenIcon from "../../icons/pending.svg";
import { Button } from "@mui/material";
import CustomInput from "../input";
import Card from "../card";
import { useState } from "react";
import ConfirmationModal from "../confirmation-modal";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AsdmHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="asdm-home">
      <div className="welcome-text">
        {`Welcome ${user?.name}!!`}
        <Button variant="contained" onClick={() => setShowRequestModal(true)}>
          + Raise Request
        </Button>
      </div>
      <div className="charts">
        <RequestPieChart
          values={[
            {
              value: raisedRetentionRequests.filter(
                (request) => request.status === requestStatus.APPROVED
              ).length,
              color: "#04bfa4",
              name: "Approved",
            },
            {
              value: raisedRetentionRequests.filter(
                (request) => request.status === requestStatus.REJECTED
              ).length,
              color: "#ea2d30",
              name: "Rejected",
            },
            {
              value: raisedRetentionRequests.filter(
                (request) => request.status === requestStatus.OPEN
              ).length,
              color: "#fdb71d",
              name: "Open",
            },
          ]}
        />
        <div className="cards">
          <Card
            title="Total Approved"
            total={
              raisedRetentionRequests.filter(
                (request) => request.status === requestStatus.APPROVED
              ).length
            }
            image={ApprovedIcon}
          />
          <Card
            title="Total Pending"
            total={
              raisedRetentionRequests.filter(
                (request) => request.status === requestStatus.OPEN
              ).length
            }
            image={OpenIcon}
          />
          <Card
            title="Total Rejected"
            total={
              raisedRetentionRequests.filter(
                (request) => request.status === requestStatus.REJECTED
              ).length
            }
            image={RejectedIcon}
          />
        </div>
      </div>
      <div className="request-table">
        <RaisedRetentionRequests employeeData={state?.employee} />
      </div>
      <ConfirmationModal
        open={showRequestModal}
        title="Raise Request"
        onCancel={() => {
          setShowRequestModal(false);
          setEmployeeId("");
        }}
        onConfirm={() => {
          const selectedEmployee = validEmployees.filter(
            (request) => request.profile.employeeId === employeeId
          );
          selectedEmployee.length
            ? navigate("/raise-request", {
                state: {
                  employeeId: employeeId,
                },
              })
            : toast(
                "Employee ID is incorrect or Request is already raised. Please try with another Employee Id",
                {
                  hideProgressBar: true,
                  type: "error",
                  position: "top-center",
                  autoClose: 5000,
                }
              );
        }}
        confirmText="Next"
      >
        <div className="asdm-form">
          <div className="hint">
            Please enter Employee ID to proceed with retention request
          </div>
          <CustomInput
            value={employeeId}
            onChange={(event) => setEmployeeId(event.target.value)}
            label="Employee ID*"
            className="input"
          />
        </div>
      </ConfirmationModal>
    </div>
  );
};
export default AsdmHome;
