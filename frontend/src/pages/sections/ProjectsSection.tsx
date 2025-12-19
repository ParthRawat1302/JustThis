import { useEffect, useState } from "react";
import { api } from "../../api/api";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data));
  }, []);

  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((p: any) => (
        <ProjectCard key={p._id} project={p} />
      ))}
    </section>
  );
}
