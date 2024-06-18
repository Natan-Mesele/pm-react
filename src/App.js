import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Projectm from "./Components/Projectm";
import Upgrade from "./Components/Upgrade";
import ProjectList from "./Components/ProjectList";
import ProjectDetail from "./Components/ProjectDetail";
import IssueDetails from "./Components/IssueDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/ProjectList" element={<ProjectList />} ></Route>
          <Route path="/ProjectDetail" element={<ProjectDetail />} ></Route>
          <Route path="/IssueDetails" element={<IssueDetails />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
