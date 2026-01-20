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
  Landmark,
  Cog,
  FileText,
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { resumeData } from '@/lib/data';
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
          <div className="mb-6 flex justify-center">
            <div
              className="rounded-full overflow-hidden border-4 border-primary/20 shadow-lg"
              style={{ width: `288px`, height: `288px` }}
            >
              <Image
                src={profileImage?.imageUrl || '/Foto%20CV%20Juan.png'}
                alt={resumeData.name}
                width={288}
                height={288}
                className="object-cover h-full w-full"
                style={{
                  objectPosition: `50% 80%`,
                  transform: `scale(1.25)`,
                }}
                data-ai-hint={profileImage?.imageHint}
                priority
              />
            </div>
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
            <Button asChild size="lg">
              <Link href="/resume">
                <Eye className="mr-2 h-5 w-5" />
                Ver CV Online
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cover-letter">
                <FileText className="mr-2 h-5 w-5" />
                Ver Carta de Presentación
              </Link>
            </Button>
          </div>
        </section>

        <section id="resume" className="py-16 space-y-16">
          <section id="functional-achievements">
            <h3 className="text-3xl font-bold font-headline mb-8 text-center flex items-center justify-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                Logros por Área Funcional
            </h3>
            <Tabs defaultValue="commercial" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 h-auto py-2">
                    <TabsTrigger value="commercial" className="flex flex-col sm:flex-row h-full gap-1 sm:gap-2">
                        <TrendingUp className="h-5 w-5"/><span>Comercial</span>
                    </TabsTrigger>
                    <TabsTrigger value="administrative" className="flex flex-col sm:flex-row h-full gap-1 sm:gap-2">
                        <Landmark className="h-5 w-5"/><span>Administrativa</span>
                    </TabsTrigger>
                    <TabsTrigger value="operational" className="flex flex-col sm:flex-row h-full gap-1 sm:gap-2">
                        <Cog className="h-5 w-5"/><span>Operaciones</span>
                    </TabsTrigger>
                </TabsList>
                
                <TabsContent value="commercial" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-3">
                                 <TrendingUp className="h-6 w-6 text-accent" />
                                {resumeData.functionalAchievements.commercial.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc space-y-3 pl-5 text-muted-foreground">
                                {resumeData.functionalAchievements.commercial.achievements.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="administrative" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-3">
                                 <Landmark className="h-6 w-6 text-accent" />
                                {resumeData.functionalAchievements.administrative.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc space-y-3 pl-5 text-muted-foreground">
                                {resumeData.functionalAchievements.administrative.achievements.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="operational" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-3">
                                 <Cog className="h-6 w-6 text-accent" />
                                {resumeData.functionalAchievements.operational.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc space-y-3 pl-5 text-muted-foreground">
                                {resumeData.functionalAchievements.operational.achievements.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
        
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
      </main>

      <a
        href={`https://wa.me/${resumeData.contact.phone.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg group-hover:bg-green-600 transition-colors"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white fill-current"
          >
            <title>WhatsApp</title>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.37-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.595-.487-.5-.669-.51-.18-.01-.37-.01-.57-.01s-.52.075-.792.372c-.27.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 5.451 0 9.885 4.434 9.889 9.884.002 5.452-4.433 9.886-9.889 9.886z" />
          </svg>
        </div>
      </a>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>
          &copy; <CurrentYear /> {resumeData.name}. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}
