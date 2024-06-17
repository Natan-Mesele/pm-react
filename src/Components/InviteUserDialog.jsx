import React, { useState } from "react";
import { Dialog, Button, TextField } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';

function InviteUserDialog({ open, onClose }) {
  const [inviteEmail, setInviteEmail] = useState(""); // State for invite email input

  const handleInviteEmailChange = (event) => {
    setInviteEmail(event.target.value); // Update the email input value
  };

  const handleInviteUser = () => {
    // Logic to invite user with inviteEmail
    console.log(`Inviting ${inviteEmail}`);
    onClose(); // Close the dialog after inviting
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-3">Invite User</h2>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={inviteEmail}
          onChange={handleInviteEmailChange}
          className="mb-3"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleInviteUser}
        >
          Invite
          <AddIcon className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </Dialog>
  );
}

export default InviteUserDialog;
