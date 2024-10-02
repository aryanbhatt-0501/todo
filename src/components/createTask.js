import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import './styles.css'

function CreateTask() {
    const [openDialog, setOpenDialog] = useState(true);
    const closeDialog = () => setOpenDialog(false);

  return (
        <Dialog open={openDialog} onClose={closeDialog} >
            <DialogTitle>
                Create a task
            </DialogTitle>
            <DialogContent>
                <div className='dialogContent'>abcd</div>
            </DialogContent>
            <DialogActions sx={{justifyContent: 'space-around'}}>
                    <button>Cancel</button>
                    <button>Save</button>
            </DialogActions>
        </Dialog>
  )
}

export default CreateTask