import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const tags = [
    "react",
    "spring boot",
    "angular",
    "mysql",
    "java",
    "mongobd",
    "php",
  ];
  const [selectedValue, setSelectedValue] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");
  const [keyword, setKeyword]=useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  return (
    <div className="relative flex gap-5 justify-center p-14">
      <section className="lg:w-[20rem] sticky top-10">
        <Card className="p-5 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between">
            <p className="text-xl tracking-wider">Filter</p>
          </div>
          <CardContent className="mt-5">
            <div className="space-y-7">
              <Typography variant="h7" component="div" className="text-left">
                Category
              </Typography>
              <RadioGroup value={selectedValue} onChange={handleChange}>
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Option 1"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Option 2"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Option 3"
                />
              </RadioGroup>
            </div>
            <div className="space-y-7 mt-10">
              <Typography variant="h7" component="div" className="text-left">
                Tag
              </Typography>
              <RadioGroup value={selectedValue} onChange={handleChange}>
                {tags.map((tag, index) => (
                  <FormControlLabel
                    key={index}
                    value={tag}
                    control={<Radio />}
                    label={tag}
                  />
                ))}
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="flex-1 lg:ml-10">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search a project"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="text-gray-500" />
          </div>
        </div>
        <div>
          <div className="space-y-5 min-h-[74vh]">
            {
              keyword?[1,1,1].map((item)=> <ProjectCard key={item}/>)
              :[1,1,1,1,1].map((item) => (
                <ProjectCard key={item}/>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
