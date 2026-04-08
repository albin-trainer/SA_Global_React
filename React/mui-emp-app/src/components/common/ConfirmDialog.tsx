import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@mui/material";

type Props = {
  open: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDialog = ({
  open,
  title = "Confirm",
  message = "Are you sure?",
  onConfirm,
  onCancel
}: Props) => {
  return (
    <Dialog open={open} onClose={onCancel} disablePortal  transitionDuration={0} > 
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>

        <Button  data-testid="confirm-btn"   onClick={onConfirm} color="error" variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;