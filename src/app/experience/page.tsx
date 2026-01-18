import { Button } from '@/components/ui/button';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-headline mb-12 text-center flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Experiencia Laboral
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {resumeData.experience.map((job, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="mb-4 last:mb-0 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="w-full p-6 text-left hover:no-underline rounded-lg hover:bg-secondary/20 data-[state=open]:rounded-b-none data-[state=open]:bg-secondary/20">
                    <div className="flex w-full items-start justify-between">
                      <div className="flex-1 pr-4">
                        <h4 className="font-headline text-xl text-primary">{job.role}</h4>
                        <p className="mt-1 font-medium text-muted-foreground">{job.company}</p>
                        <Badge variant="secondary" className="mt-2 sm:hidden">
                          {job.period}
                        </Badge>
                      </div>
                      <Badge
                        variant="outline"
                        className="hidden shrink-0 border-accent/50 bg-accent/10 text-accent sm:inline-flex ml-4"
                      >
                        {job.period}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 bg-card rounded-b-lg">
                      <div className="border-t border-border/50 pt-6">
                        <p className="whitespace-pre-wrap text-muted-foreground">{job.description}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
