import { Button, Dialog, Typography } from "@mui/material";
import "./index.style.scss";

const ConfirmationModal = ({
  title,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  children,
  open,
  disableConfirmButton,
}) => {
  const handleCancel = () => {
    onCancel?.();
  };

  const handleConfirm = () => {
    onConfirm?.();
  };

  return (
    <Dialog onClose={handleCancel} open={open}>
      <div className="confirmation-modal">
        <Typography variant="h6">{title}</Typography>
        {children}
        <div className="footer">
          <Button variant="outlined" onClick={handleCancel}>
            {cancelText || "Cancel"}
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirm}
            disabled={disableConfirmButton}
          >
            {confirmText || "Submit"}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
export default ConfirmationModal;