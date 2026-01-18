'use client';

import Image from 'next/image';
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
  Code,
  Eye,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { resumeData } from '@/lib/data';
import { ContactForm } from '@/components/contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { CurrentYear } from '@/components/current-year';

export default function Home() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === 'profile-picture'
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6 flex justify-center items-center sticky top-0 z-30 bg-background/80 backdrop-blur-sm">
        <h1 className="text-xl font-bold font-headline">Perfil Profesional</h1>
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
              className="object-cover h-full w-full scale-125"
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

          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href={`mailto:${resumeData.contact.email}`}
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href={`https://wa.me/${resumeData.contact.phone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href={`https://${resumeData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{resumeData.location}</span>
          </div>
          <p className="max-w-3xl mx-auto mt-6 text-muted-foreground">
            {resumeData.summary}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/resume">
                <Eye className="mr-2 h-5 w-5" />
                Ver CV Online
              </Link>
            </Button>
          </div>
        </section>

        <section id="resume" className="py-16 space-y-16">
          <div>
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="font-headline text-3xl flex items-center justify-center gap-3">
                  <Briefcase className="h-8 w-8 text-primary" />
                  Experiencia Laboral
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
                  Un recorrido detallado por mi trayectoria, donde podrás explorar los roles, responsabilidades y logros en cada una de mis experiencias profesionales.
                </p>
                <Button asChild size="lg">
                  <Link href="/experience">Ver mi trayectoria completa</Link>
                </Button>
              </CardContent>
            </Card>
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
                          {category === 'Tecnología y Programación' && (
                            <Code className="h-5 w-5 text-accent" />
                          )}
                          {category === 'Liderazgo y Gestión Comercial' && (
                            <Briefcase className="h-5 w-5 text-accent" />
                          )}
                          {category === 'Análisis y Estrategia de Negocios' && (
                            <TrendingUp className="h-5 w-5 text-accent" />
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
            <div className="flex justify-center flex-wrap gap-8">
              {resumeData.education.map((edu, index) => (
                <Card key={index} className="w-full max-w-sm">
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
          &copy; <CurrentYear /> {resumeData.name}. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}
