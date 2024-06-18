import React from "react";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const IssueDetails = () => {
  // Sample data
  const issueDetails = {
    title: "Create Navbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    activityLog: [
      { id: 1, content: "Created the issue", date: "2024-06-18" },
      { id: 2, content: "Assigned to John Doe", date: "2024-06-19" },
    ],
    comments: [
      { id: 1, author: "Jane Doe", content: "This is a comment.", date: "2024-06-18" },
      { id: 2, author: "John Smith", content: "Another comment here.", date: "2024-06-19" },
    ],
    toDoDetails: {
      details: "Details about the task...",
      assignee: "John Doe",
      labels: ["Bug", "Feature"],
      status: "In Progress",
      people: ["John Doe", "Jane Doe"],
      reporter: "Jane Smith",
    },
  };

  return (
    <div className="flex gap-10 p-10">
      {/* Main Issue Details */}
      <div className="flex-1 space-y-6">
        {/* Title and Description */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{issueDetails.title}</h1>
          <p className="text-gray-600">{issueDetails.description}</p>
        </div>

        {/* Activity Log */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Activity Log</h2>
          {issueDetails.activityLog.map((log) => (
            <div key={log.id} className="flex items-center">
              <span className="text-gray-500 text-sm mr-2">{log.date}</span>
              <span>{log.content}</span>
            </div>
          ))}
        </div>

        {/* Comments */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Comments</h2>
          {issueDetails.comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-2">
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-gray-500 text-sm">{comment.date}</span>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar - To Do Details */}
      <div className="w-80 border-l pl-6">
        <h2 className="text-xl font-bold mb-4">To Do Details</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Details</h3>
            <p className="text-gray-600">{issueDetails.toDoDetails.details}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Assignee</h3>
            <p>{issueDetails.toDoDetails.assignee}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Labels</h3>
            <div className="flex gap-2">
              {issueDetails.toDoDetails.labels.map((label, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Status</h3>
            <p>{issueDetails.toDoDetails.status}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">People</h3>
            <div className="flex gap-2">
              {issueDetails.toDoDetails.people.map((person, index) => (
                <Avatar key={index} className="cursor-pointer">
                  <AccountCircleIcon />
                </Avatar>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Reporter</h3>
            <p>{issueDetails.toDoDetails.reporter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
