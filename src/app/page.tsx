import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Code,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { resumeData } from '@/lib/data';
import { ProfileGenerator } from '@/components/profile-generator';
import { ContactForm } from '@/components/contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === 'profile-picture'
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-30 bg-background/80 backdrop-blur-sm">
        <h1 className="text-xl font-bold font-headline">Perfil Profesional</h1>
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
        <section id="hero" className="text-center py-16">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/20 shadow-lg">
            <Image
              src={
                profileImage?.imageUrl || 'https://picsum.photos/seed/1/200/200'
              }
              alt={resumeData.name}
              width={128}
              height={128}
              className="object-cover h-full w-full"
              data-ai-hint={profileImage?.imageHint}
              priority
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            {resumeData.name}
          </h2>
          <p className="text-xl md:text-2xl text-primary mt-2 font-headline">
            {resumeData.title}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{resumeData.location}</span>
          </div>
          <p className="max-w-3xl mx-auto mt-6 text-muted-foreground">
            {resumeData.summary}
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </div>
        </section>

        <section id="profile-generator" className="py-16">
          <ProfileGenerator />
        </section>

        <section id="resume" className="py-16 space-y-16">
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
                      <p>{job.description}</p>
                      <Badge variant="secondary" className="sm:hidden mt-2">
                        {job.period}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold font-headline mb-8 text-center flex items-center justify-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              Habilidades
            </h3>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Object.entries(resumeData.skills).map(
                    ([category, skillsList]) => (
                      <div key={category}>
                        <h4 className="font-headline text-lg mb-4 flex items-center gap-2 font-medium">
                          {category === 'Programación' && (
                            <Code className="h-5 w-5 text-accent" />
                          )}
                          {category === 'Ventas y Negocios' && (
                            <TrendingUp className="h-5 w-5 text-accent" />
                          )}
                          {category === 'Administración' && (
                            <Briefcase className="h-5 w-5 text-accent" />
                          )}
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillsList.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-3xl font-bold font-headline mb-8 text-center flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              Educación
            </h3>
            <div className="flex justify-center">
              {resumeData.education.map((edu, index) => (
                <Card key={index} className="w-full max-w-md">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-secondary rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-headline text-xl">
                          {edu.institution}
                        </CardTitle>
                        <p className="text-muted-foreground">{edu.degree}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <ContactForm />
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {resumeData.name}. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}
