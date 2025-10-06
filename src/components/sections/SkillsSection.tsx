import { portfolioData } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { SkillIcon } from "@/components/SkillIcon";

const SkillsSection = () => {
  const { skills: skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
          Mis Herramientas
        </h2>
        <Tabs defaultValue={skillCategories[0].name} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 sm:grid-cols-5 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <Card key={skill} className="bg-secondary/50 hover:bg-secondary transition-colors">
                    <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                      <SkillIcon name={skill} className="w-10 h-10 text-primary"/>
                      <span className="font-medium text-center">{skill}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
