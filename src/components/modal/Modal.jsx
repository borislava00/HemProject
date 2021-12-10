import { Dialog , DialogTitle , DialogContent , Button , DialogActions }  from "@mui/material";
import { useState } from "react";

import styles from "./Modal.module.scss";

export default function Modal({ open , title , buttonText , handleSubmit , handleClose }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClickOpen = () => {
      setIsOpen(true);
    };
  
    const handleOnClose = () => {
      setIsOpen(false);
    };
    return(
        <div className={styles['modal-wrapper']}>
             <Button variant="outlined" onClick={handleClickOpen}>
                {buttonText}
            </Button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
            >
            <DialogTitle className={styles.title}>{title}</DialogTitle>
            <DialogContent className={styles.content} >
                <ChildExample />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>Modal Action</Button>
                <Button onClick={handleOnClose}>Close</Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}

function ChildExample() {
    return(
        <div>Modal Content</div>
    );
}