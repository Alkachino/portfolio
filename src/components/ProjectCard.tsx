import Image from "next/image";
import type { Project } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, technologies, githubUrl, liveUrl, image } = project;

  return (
    <Card className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={description}
            width={image.width}
            height={image.height}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-1">
        <CardTitle className="font-headline text-xl mb-2">{title}</CardTitle>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex w-full justify-start gap-4">
          <Button variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github /> Ver en GitHub
            </a>
          </Button>
          {liveUrl && (
            <Button asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink /> Ver Demo
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
