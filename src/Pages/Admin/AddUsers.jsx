import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export default function AddUserDialog({ open, handleClose } ) {
    
    
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD USER</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please complete the required field to add a new user.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <div className='flex gap-[10px]' >
                <TextField
                autoFocus
                required
                margin="dense"
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                fullWidth
                variant="standard"
                />
                <TextField
                autoFocus
                required
                margin="dense"
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                fullWidth
                variant="standard"
                />
            </div>
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <div className='flex gap-[10px]'>
                <TextField
                autoFocus
                required
                margin="dense"
                id="dob"
                name="dob"
                label="DOB"
                type="number"
                fullWidth
                variant="standard"
                />
                <TextField
                autoFocus
                required
                margin="dense"
                id="country"
                name="country"
                label="Country"
                type="text"
                fullWidth
                variant="standard"
                />
            </div>
            <TextField
              autoFocus
              required
              margin="dense"
              id="phone"
              name="phone"
              label="Phone"
              type="number"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            ADD USER
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
