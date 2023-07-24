import React from "react";
import "./project1.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";
function Projects1() {
  const data = ProjectData;
  return (
    <div>
      <Separator />
      <label className="section-title">Projects</label>
      <div className="containerp">
        {data.map((project, index) => (
          <div className="cardp" key={index}>
            <h3>{project.title}</h3>
            <a className="project-link" href={project.github} target="_blank">
              <div className="link-button">
                <i class="devicon-github-original colored"></i> GitHub
              </div>
            </a>
            <p>{project.about}</p>
            <div className="project-tags">
              {project.tags.map((tag) => {
                return <label className="tag">{tag}</label>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects1;
