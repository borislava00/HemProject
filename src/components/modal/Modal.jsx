import { Dialog , DialogTitle , DialogContent , Button  , DialogContentText , DialogActions }  from "@mui/material";

import styles from "./Modal.module.scss";

export default function Modal({ open , title , buttonText , handleSubmit , handleClose }) {
    return(
        <div className={styles['modal-wrapper']}>
             <Button variant="outlined" onClick={handleSubmit}>
                {buttonText}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
            <DialogTitle className={styles.title}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText className={styles.content}>
                    {title}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Modal Action</Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}