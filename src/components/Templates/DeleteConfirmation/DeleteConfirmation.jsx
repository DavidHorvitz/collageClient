import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const DeleteConfirmation = ({ onCancel, onConfirm }) => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const handleYes = () => {
        setOpen(false);
        onConfirm()
    };
    const handleNo = () => {
        onCancel()
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div>

                    <DialogTitle>{"Are you sure you want to delete this item?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            If you delete, you will not be able to recover it !!!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleYes}>Yes</Button>
                        <Button onClick={handleNo}>No</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
};

export default DeleteConfirmation;
