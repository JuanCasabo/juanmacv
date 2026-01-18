import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Code,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
  ArrowLeft,
} from 'lucide-react';
import { resumeData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { CurrentYear } from '@/components/current-year';
import type { Metadata } from 'next';
import { PrintButton } from '@/components/print-button';

export const metadata: Metadata = {
  title: 'CV Online | Perfil Profesional',
  description: 'Versión online e imprimible del currículum de Juan M. Correa.',
};

export default function ResumePage() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === 'profile-picture'
  );

  return (
    <div className="bg-background print:bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-30 bg-background/80 backdrop-blur-sm no-print">
        <Button asChild variant="ghost">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Volver al Perfil</span>
          </Link>
        </Button>
        <PrintButton />
      </header>
      
      <div className="container mx-auto p-4 md:p-8">
        <main className="printable-area bg-card text-card-foreground shadow-lg rounded-lg p-8 md:p-12 print:shadow-none print:rounded-none print:p-0">
          {/* Hero Section */}
          <section id="hero-printable" className="flex flex-col md:flex-row items-center gap-8 border-b pb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full shrink-0 overflow-hidden border-4 border-primary/20 shadow-lg print:w-32 print:h-32">
              <Image
                src={
                  profileImage?.imageUrl || 'https://picsum.photos/seed/1/200/200'
                }
                alt={resumeData.name}
                width={160}
                height={160}
                className="object-cover h-full w-full"
                data-ai-hint={profileImage?.imageHint}
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold font-headline text-foreground print:text-3xl">
                {resumeData.name}
              </h1>
              <p className="text-xl text-primary mt-1 font-headline print:text-lg">
                {resumeData.title}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start flex-wrap gap-x-6 gap-y-2 mt-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{resumeData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${'juanmacorrea1602@gmail.com'}`} className="hover:underline">{'juanmacorrea1602@gmail.com'}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a href={`https://${'linkedin.com/in/juanmcorrea-example'}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{'linkedin.com/in/juanmcorrea-example'}</a>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="py-8">
              <p className="text-muted-foreground text-center md:text-left print:text-justify">
                  {resumeData.summary}
              </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 mt-4">
            <div className="md:col-span-2 space-y-10">
              {/* Experience Section */}
              <section id="experience-printable">
                <h2 className="text-2xl font-bold font-headline mb-6 flex items-center gap-3 text-primary print:text-xl">
                  <Briefcase className="h-7 w-7" />
                  Experiencia Laboral
                </h2>
                <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:-translate-x-px before:bg-border/70 print:before:hidden">
                  {resumeData.experience.map((job, index) => (
                    <div key={index} className="relative flex items-start gap-4 print:pl-0 print:border-b print:pb-4 print:last:border-0 print:gap-2">
                       <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary border shadow-sm shrink-0 z-10 mt-1 print:hidden">
                          <div className="h-3 w-3 rounded-full bg-primary/80"></div>
                       </div>
                       <div className="flex-grow print:pl-0">
                          <p className="text-sm text-muted-foreground font-medium">{job.period}</p>
                          <h3 className="font-headline text-lg font-semibold print:text-base">{job.role}</h3>
                          <p className="text-muted-foreground font-medium">{job.company}</p>
                          <p className="mt-2 text-sm whitespace-pre-wrap text-muted-foreground print:text-xs print:whitespace-normal">{job.description}</p>
                        </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className="md:col-span-1 space-y-10 mt-10 md:mt-0">
              {/* Skills Section */}
              <section id="skills-printable">
                <h2 className="text-2xl font-bold font-headline mb-6 flex items-center gap-3 text-primary print:text-xl">
                  <Sparkles className="h-7 w-7" />
                  Habilidades
                </h2>
                <div className="space-y-6">
                  {Object.entries(resumeData.skills).map(([category, skillsList]) => (
                    <div key={category}>
                      <h3 className="font-headline text-base mb-3 font-medium flex items-center gap-2 print:text-sm">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section id="education-printable">
                <h2 className="text-2xl font-bold font-headline mb-6 flex items-center gap-3 text-primary print:text-xl">
                  <GraduationCap className="h-7 w-7" />
                  Educación
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="pl-4 border-l-2 border-accent print:pl-0">
                      <h3 className="font-headline text-base font-semibold print:text-sm">
                        {edu.institution}
                      </h3>
                      <p className="text-muted-foreground text-sm print:text-xs">{edu.degree}</p>
                      <p className="text-muted-foreground text-xs">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground no-print">
        <p>&copy; <CurrentYear /> {resumeData.name}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
