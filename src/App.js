import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProjectList from "./Components/ProjectList";
import ProjectDetail from "./Components/ProjectDetail";
import IssueDetails from "./Components/IssueDetails";
import Auth from "./Components/Auth"; 
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Redux/Auth/Action";

function App() {
  const isAuthenticated = false; // Replace with your authentication check
  const dispatch = useDispatch();
  const { auth } = useSelector(store=>store)

  useEffect(() => {
    dispatch(getUser())
  }, [auth.jwt])

  console.log(auth);

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
