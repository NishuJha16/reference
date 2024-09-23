import { Button, Dialog, IconButton } from "@mui/material";
import "./index.style.scss";
import EmployeeDetails from "../employee-details";
import { useState } from "react";
import CustomInput from "../input";
import ConfirmationModal from "../confirmation-modal";
import Tag from "../tag";
import { toast } from "react-toastify";
import { requestStatus } from "../../helpers/constants";
import CloseIcon from "@mui/icons-material/Close";

const RequestDetailModal = ({
  open,
  onClose,
  requestId,
  raisedBy,
  designation,
  onConfirm,
  employeeDetails,
}) => {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionComment, setRejectionComment] = useState("");

  const handleConfirm = () => {
    setShowApproveModal(true);
  };

  const handleReject = () => {
    setShowRejectModal(true);
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <div className="request-detail-modal">
        <div className="title">
          {`Request ID: ${requestId}`}{" "}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="raised-details">
          <div className="hint">Raised By</div>
          <div className="details">
            <div>
              <span>Name: </span>
              {raisedBy}
            </div>
            <Tag text={designation} />
          </div>
        </div>
        <EmployeeDetails employeeDetails={employeeDetails} hideStepper />
        <CustomInput label="Comments" placeholder="Enter your comments" />
        {employeeDetails.previousComments &&
          employeeDetails.previousComments?.map((comment) => (
            <div className="previous-comments">
              <Tag customClass="blue" text={comment.addedBy} />
              <div className="text">{comment.message}</div>
            </div>
          ))}
        <div className="footer">
          <Button variant="contained" className="reject" onClick={handleReject}>
            Reject
          </Button>
          <Button
            variant="contained"
            className="approve"
            onClick={handleConfirm}
          >
            Approve
          </Button>
        </div>
      </div>
      {showApproveModal && (
        <ConfirmationModal
          title="Approval Confirmation"
          confirmText="Yes"
          cancelText="No"
          onCancel={() => {
            setShowApproveModal(false);
            setRejectionComment("");
          }}
          onConfirm={() => {
            onClose();
            toast(
              `Successfully Approved Request for Employee id  "${employeeDetails.profile.employeeId}"`,
              {
                hideProgressBar: true,
                autoClose: 2000,
                position: "top-center",
                type: "success",
              }
            );
            onConfirm({ ...employeeDetails, status: requestStatus.APPROVED });
          }}
          open={showApproveModal}
        >
          <div>{`Are you sure you want to approve retention request of “${employeeDetails.profile.name}”?`}</div>
        </ConfirmationModal>
      )}
      {showRejectModal && (
        <ConfirmationModal
          onCancel={() => {
            setShowRejectModal(false);
            setRejectionComment("");
          }}
          title="Denial Confirmation"
          confirmText="Yes"
          cancelText="No"
          open={showRejectModal}
          onConfirm={() => {
            onClose();
            toast(
              `Successfully Rejected Request for Employee id  "${employeeDetails.profile.employeeId}"`,
              {
                hideProgressBar: true,
                autoClose: 2000,
                position: "top-center",
                type: "success",
              }
            );
            onConfirm({ ...employeeDetails, status: requestStatus.REJECTED });
          }}
          disableConfirmButton={!rejectionComment}
        >
          <div>{`Are you sure you want to deny retention request of “${employeeDetails.profile.name}”?`}</div>
          <CustomInput
            label="Rejection Comment*"
            placeholder="Please add comments with the reason for rejection"
            value={rejectionComment}
            onChange={(event) => setRejectionComment(event.target.value)}
          />
        </ConfirmationModal>
      )}
    </Dialog>
  );
};
export default RequestDetailModal;
