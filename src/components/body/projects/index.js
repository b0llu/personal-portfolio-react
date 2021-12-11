import React from "react";
import { ProjectData } from "../../data/projects";
import Separator from "../../common/separator/index";
import ProjectCard from "./project-card";
import "./projects.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
      <label className="section-title">Projects</label>
      <Separator />
    </div>
  );
}

export default Projects;
