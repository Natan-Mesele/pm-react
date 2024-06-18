import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function IssueDetails() {
  const [activeTab, setActiveTab] = useState("All");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [status, setStatus] = useState("In Progress");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  return (
    <div className="flex mt-10 px-16">
      {/* Left Section for Issue Details */}
      <div className="w-3/4 h-[80vh] text-left pr-5">
        <div>
          <h1 className="text-lg font-semibold text-gray-400">Create Navbar</h1>
          <div className="py-5">
            <h2 className="font-semibold text-gray-400">Description</h2>
            <p className="text-gray-400 mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            </p>
          </div>
          <div className="mt-5">
            <h1 className="pb-3">Activity</h1>
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <ul className="flex space-x-8">
                {["All", "Comments", "History"].map((tab) => (
                  <li
                    key={tab}
                    className={`cursor-pointer pb-2 ${
                      activeTab === tab
                        ? "text-black border-b-2 border-black"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              {/* Conditional Rendering based on Active Tab */}
              {activeTab === "All" && <div>All content goes here...</div>}
              {activeTab === "Comments" && (
                <div>
                  {/* Comment Form */}
                  <div className="mb-4">
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded"
                      rows="3"
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                      onClick={handleAddComment}
                    >
                      Add Comment
                    </button>
                  </div>
                  {/* Display Comments */}
                  <div className="space-y-4">
                    {comments.length > 0 ? (
                      comments.map((comment, index) => (
                        <div
                          key={index}
                          className="p-4 border border-gray-300 rounded"
                        >
                          {comment}
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400">No comments yet.</p>
                    )}
                  </div>
                </div>
              )}
              {activeTab === "History" && <div>History content goes here...</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section for Task Details */}
      <div className="w-1/4 h-[80vh] border-l border-gray-200 pl-5">
  <div className="mb-5">
    <select
      className="border border-gray-300 rounded p-2 w-full"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  </div>
  <div className="mb-5">
    <label className="flex text-gray-400 mb-2">Detail:</label>
  </div>
  <div className="flex mb-5 justify-between">
    <label className="block text-gray-400 mb-2">Assignee:</label>
    <div className="flex items-center gap-2">
      {[1].map((item) => (
        <AccountCircleIcon key={item} className="cursor-pointer" />
      ))}
    </div>
  </div>
  <div className="flex justify-between mb-5">
    <label className="block text-gray-400 mb-2 items-center">Label:</label>
    <span className="p-2 w-full items-center text-right">
      None
    </span>
  </div>
  <div className="mb-5 flex justify-between">
    <label className="block text-gray-400 mb-2">Status</label>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
      In Progress
    </button>
  </div>
  <div className="mb-5 flex justify-between">
    <label className="block text-gray-400 mb-2">Release:</label>
    <p>19-04-2024</p>
  </div>
  <div className="mb-5 flex justify-between">
    <label className="block text-gray-400 mb-2">Reporter:</label>
    <div className="flex items-center gap-2">
      {[1].map((item) => (
        <AccountCircleIcon key={item} className="cursor-pointer" />
      ))}
    </div>
  </div>
</div>
    </div>
  );
}

export default IssueDetails;
