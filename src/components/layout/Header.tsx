import Link from "next/link";
import { portfolioData } from "@/lib/data";
import type { NavLink } from "@/lib/types";
import { Button } from "@/components/ui/button";

const navLinks: NavLink[] = [
  { name: "Sobre Mí", href: "#about" },
  { name: "Herramientas", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="font-headline text-xl font-bold text-primary transition-colors hover:text-primary/90">
          {portfolioData.name}
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
            <Button asChild>
                <a href="#contact">Hablemos</a>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
