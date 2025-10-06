import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
      <div className="container text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
          Hola, soy {portfolioData.name}. {portfolioData.title}
        </h1>
        <p className="font-headline text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8">
          {portfolioData.summary}
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects">Ver mis Proyectos</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contacto</a>
          </Button>
        </div>
        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
