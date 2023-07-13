import "./index.style.scss";
import RequestPieChart from "../pie-chart";
import RaisedRetentionRequests from "../raised-retention-requests";
import { raisedRetentionRequests } from "../../dummy-data/asdm.meta";
import { requestStatus } from "../../helpers/constants";
import ApprovedIcon from "../../icons/approved.svg";
import RejectedIcon from "../../icons/rejected.svg";
import OpenIcon from "../../icons/pending.svg";
import { Button } from "@mui/material";
import CustomInput from "../input";

import Card from "../card";
import { useState } from "react";
import ConfirmationModal from "../confirmation-modal";
const AsdmHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [employeeId, setEmployeeId] = useState(null);

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
        <RaisedRetentionRequests />
      </div>
      <ConfirmationModal
        open={showRequestModal}
        title="Raise Request"
        onCancel={() => setShowRequestModal(false)}
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
          />
        </div>
      </ConfirmationModal>
    </div>
  );
};
export default AsdmHome;
