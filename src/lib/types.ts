export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  width: number;
  height: number;
};

export type NavLink = {
  name: string;
  href: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: ImagePlaceholder;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: React.ElementType;
};

export type PortfolioData = {
  name: string;
  title: string;
  summary: string;
  about: {
    professionalStory: string[];
    education: string;
    careerGoals: string;
    image: ImagePlaceholder;
  };
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  contact: {
    email: string;
    socials: Omit<SocialLink, 'icon'>[];
  };
};
