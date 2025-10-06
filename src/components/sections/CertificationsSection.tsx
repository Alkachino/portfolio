import { portfolioData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-4">
          Certificaciones y Formación Continua
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Estoy comprometido con el aprendizaje constante para mantenerme actualizado con las últimas tecnologías y mejores prácticas del sector.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-secondary/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold">{cert.name}</CardTitle>
                    <CardDescription className="mt-1">{cert.issuer} - {cert.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
