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
                <DialogContentText>
                    Fill in the details below please
                </DialogContentText>
                <div className='dialogContent'>
                    <div className='formContainer'>
                        <form style={{width: '100%'}}>
                            <label>
                                Task description:
                                <input type='text' style={{height: '20%', width: '50%'}}></input>
                            </label>
                            <br />
                            <label>
                                Assignee:
                                <input placeholder='Assign this task to someone or yourself'></input>
                                <a><p>Assign to me</p></a>
                            </label>
                            <br />
                            <label>
                                Due date:
                                <input type='date'></input>
                            </label>
                        </form>
                    </div>
                </div>
            </DialogContent>
            <DialogActions sx={{justifyContent: 'space-around'}}>
                    <button>Cancel</button>
                    <button>Save</button>
            </DialogActions>
        </Dialog>
  )
}

export default CreateTask