import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";

function NewProject({ open, handleClose }) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = [
    "react",
    "spring boot",
    "angular",
    "mysql",
    "java",
    "mongodb",
    "php",
  ];

  const handleCreateProject = () => {
    // Implement create project logic here
    console.log("Project Name:", projectName);
    console.log("Project Description:", projectDescription);
    console.log("Project Type:", projectType);
    console.log("Tags:", selectedTags);
    handleClose();
  };

  const handleTagChange = (event) => {
    const { value } = event.target;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create New Project</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Project Name"
              type="text"
              fullWidth
              variant="standard"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="description"
              label="Project Description"
              type="text"
              fullWidth
              variant="standard"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="dense" variant="standard">
              <InputLabel id="project-type-label">Project Type</InputLabel>
              <Select
                labelId="project-type-label"
                id="project-type"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                label="Project Type"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                      width: 250,
                    },
                  },
                }}
              >
                <MenuItem value="Fullstack">Fullstack</MenuItem>
                <MenuItem value="Frontend">Front End</MenuItem>
                <MenuItem value="Backend">Back End</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="dense" variant="standard">
              <InputLabel id="tags-label">Tags</InputLabel>
              <Select
                labelId="tags-label"
                id="tags"
                multiple
                value={selectedTags}
                onChange={handleTagChange}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                      width: 250,
                    },
                  },
                }}
              >
                {allTags.map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreateProject} color="primary">
          Create Project
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewProject;
