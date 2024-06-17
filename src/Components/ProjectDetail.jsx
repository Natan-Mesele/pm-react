import React, { useState } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Badge, Button } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import InviteUserDialog from "./InviteUserDialog";

function ProjectDetail() {
  const [openInviteDialog, setOpenInviteDialog] = useState(false);

  const handleInviteDialogOpen = () => {
    setOpenInviteDialog(true); // Open the invite dialog
  };

  const handleInviteDialogClose = () => {
    setOpenInviteDialog(false); // Close the invite dialog
  };

  return (
    <div className="mt-10 lg:px-10 text-left">
      <div className="lg:flex gap-5 justify-between pb-4">
        <section className="h-screen lg:w-[69%] pr-2">
          <div className="text-gray-400 pb-10 w-full">
            <h1 className="text-lg font-semibold pb-5">
              Create Ecommerce Website Using React
            </h1>
          </div>
          <div className="space-y-5 pb-10">
            <p className="w-full md:max-w-lg lg:max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            </p>
            <div className="flex">
              <p className="w-36">Project Lead :</p>
              <p>Nati</p>
            </div>
            <div className="flex">
              <p className="w-36">Members :</p>
              <div className="flex items-center gap-2">
                {[1, 1, 1, 1].map((item) => (
                  <AccountCircleIcon key={item} className="cursor-pointer" />
                ))}
                <Button onClick={handleInviteDialogOpen}>
                  <span>Invite</span>
                  <AddIcon className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <div className="flex">
              <p className="w-36">Category :</p>
              <p>Full Stack</p>
            </div>
            <div className="flex">
              <p className="w-36">Status :</p>
              <Badge className="border border-gray-300 p-1 rounded-md text-gray-700">
                Nati
              </Badge>
            </div>
          </div>
        </section>
      </div>

      {/* Invite User Dialog */}
      <InviteUserDialog open={openInviteDialog} onClose={handleInviteDialogClose} />
    </div>
  );
}

export default ProjectDetail;
