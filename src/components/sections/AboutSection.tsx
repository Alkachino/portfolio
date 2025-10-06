import Image from "next/image";
import { portfolioData } from "@/lib/data";

const AboutSection = () => {
  const { professionalStory, education, careerGoals, image } = portfolioData.about;

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
          Sobre Mí
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            {professionalStory.map((paragraph, index) => (
              <p key={index} className="text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary font-headline">Educación</h3>
              <p className="text-foreground/80">{education}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary font-headline">Metas Profesionales</h3>
              <p className="text-foreground/80">{careerGoals}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
