import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProjectList from "./Components/ProjectList";
import ProjectDetail from "./Components/ProjectDetail";
import IssueDetails from "./Components/IssueDetails";
import Auth from "./Components/Auth"; 

function App() {
  const isAuthenticated = false; // Replace with your authentication check

  return (
    <BrowserRouter>
      
        
        {false ? <div>
          <Header />
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/ProjectDetail" element={<ProjectDetail />} />
            <Route path="/IssueDetails" element={<IssueDetails />} />
          </Routes>
        </div>:
          <Auth />
        }
      
    </BrowserRouter>
  );
}

export default App;
