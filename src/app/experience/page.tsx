import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  ArrowLeft,
  Linkedin,
  Mail,
} from 'lucide-react';
import { resumeData } from '@/lib/data';
import Link from 'next/link';
import { CurrentYear } from '@/components/current-year';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experiencia Laboral | Perfil Profesional',
  description: 'Un recorrido detallado por la experiencia laboral de Juan M. Correa.',
};


export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-30 bg-background/80 backdrop-blur-sm">
        <Button asChild variant="ghost">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Volver al Perfil</span>
          </Link>
        </Button>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${resumeData.contact.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={`https://${resumeData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="experience-details" className="py-16">
          <div>
            <h3 className="text-3xl font-bold font-headline mb-12 text-center flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Experiencia Laboral
            </h3>
            <div className="relative space-y-8 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-border/70 md:before:mx-auto md:before:left-auto">
              {resumeData.experience.map((job, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 md:justify-center md:odd:flex-row-reverse"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card border shadow-sm shrink-0 z-10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <Card className="md:w-[calc(50%-2.5rem-0.75rem)]">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-headline text-xl">
                            {job.role}
                          </CardTitle>
                          <p className="text-muted-foreground">{job.company}</p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="hidden sm:inline-flex whitespace-nowrap"
                        >
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-wrap">{job.description}</p>
                      <Badge variant="secondary" className="sm:hidden mt-2">
                        {job.period}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>
          &copy; <CurrentYear /> {resumeData.name}. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}