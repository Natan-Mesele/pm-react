import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
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
    "mongodb",
    "php",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  return (
    <div className="flex gap-5 justify-center p-14">
      <section className="lg:w-[20rem] sticky top-10 overflow-y-auto max-h-[90vh)]">
        <Card className="p-5">
          <div className="flex justify-between">
            <p className="text-xl tracking-wider">Filter</p>
          </div>
          <CardContent className="mt-5">
            <div className="">
              <Typography variant="h7" component="div" className="text-left">
                Category
              </Typography>
              <RadioGroup value={selectedCategory} onChange={handleCategoryChange} className="mt-6">
                <FormControlLabel
                  value="front_end"
                  control={<Radio />}
                  label="Front end"
                />
                <FormControlLabel
                  value="back_end"
                  control={<Radio />}
                  label="Back end"
                />
                <FormControlLabel
                  value="full_stack"
                  control={<Radio />}
                  label="Full stack"
                />
              </RadioGroup>
            </div>
            <div className="space-y-7 mt-10">
              <Typography variant="h7" component="div" className="text-left">
                Tag
              </Typography>
              <RadioGroup value={selectedTag} onChange={handleTagChange}>
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
            {[1, 1, 1, 1, 1].map((item) => (
              <ProjectCard key={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
