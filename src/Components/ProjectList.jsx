import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

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

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
        
      </section>
    </div>
  );
}

export default ProjectList;