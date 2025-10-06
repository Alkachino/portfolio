import { portfolioData } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
