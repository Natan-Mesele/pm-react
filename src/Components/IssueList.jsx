import React, { useState } from 'react';
import IssueCard from './IssueCard';
import CreateIssueForm from './CreateIssueForm';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function IssueList({ title }) {
  const [openIssueForm, setOpenIssueForm] = useState(false);

  const handleCreateIssue = (issue) => {
    // Handle the creation of the new issue
    console.log('New issue:', issue);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 flex flex-col">
      <div className="font-bold text-lg">{title}</div>
      <div className="flex-1 space-y-4 overflow-y-auto">
        <div className="border border-gray-300 rounded-lg p-4">
          <IssueCard />
        </div>
      </div>
      <div className="flex justify-start">
        <Button
          onClick={() => setOpenIssueForm(true)}
          startIcon={<AddIcon />}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Create Issue
        </Button>
      </div>
      <CreateIssueForm
        open={openIssueForm}
        onClose={() => setOpenIssueForm(false)}
        onSubmit={handleCreateIssue}
      />
    </div>
  );
}

export default IssueList;