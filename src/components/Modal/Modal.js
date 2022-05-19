import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';




const Modal = ({handleClose, open, children}) => {

    return(
        <Dialog onClose={handleClose} open ={open}>
            <DialogTitle>
            {children}
            </DialogTitle>
        </Dialog>
       
    )
    
}

export default Modal