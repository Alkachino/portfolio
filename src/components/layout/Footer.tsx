import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import type { SocialLink } from "@/lib/types";

const iconMap: { [key: string]: React.ElementType } = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const socials: SocialLink[] = portfolioData.contact.socials.map(social => ({
  ...social,
  icon: iconMap[social.name],
}));

const Footer = () => {
  return (
    <footer id="contact" className="py-12 md:py-20 bg-secondary">
      <div className="container max-w-screen-md mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
          Hablemos
        </h2>
        <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
          Estoy buscando activamente oportunidades para aplicar mis habilidades y comenzar mi carrera profesional. Si tienes un proyecto en mente o una vacante que se alinee con mi perfil, no dudes en contactarme.
        </p>
        <div className="flex justify-center items-center gap-4 mb-8">
          {socials.map(({ name, url, icon: Icon }) => (
            <Button key={name} variant="outline" size="icon" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
          <Button variant="outline" asChild>
            <a href={`mailto:${portfolioData.contact.email}`}>
              {portfolioData.contact.email}
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
