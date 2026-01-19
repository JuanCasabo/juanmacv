
import { resumeData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CurrentYear } from '@/components/current-year';
import type { Metadata } from 'next';
import { ResumeHero } from '@/components/resume-hero';
import { ResumeHeader } from '@/components/resume-header';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carta de Presentación | Perfil Profesional',
  description: 'Carta de presentación de Juan M. Correa para roles de liderazgo.',
};

export default function CoverLetterPage() {
  const profileImage = PlaceHolderImages.find(
    (img) => img.id === 'profile-picture'
  );

  return (
    <div className="bg-background print:bg-white">
      <ResumeHeader />
      
      <div className="container mx-auto p-4 md:p-8">
        <main className="printable-area bg-card text-card-foreground shadow-lg rounded-lg p-8 md:p-12 print:shadow-none print:rounded-none print:p-0">
          <ResumeHero resumeData={resumeData} profileImage={profileImage} />

          <section className="py-8">
            <h2 className="text-2xl font-bold font-headline mb-6 text-primary print:text-xl">
              Carta de Presentación
            </h2>
            <div className="space-y-6 text-muted-foreground print:text-justify">
              <p>Estimados responsables de selección,</p>
              <p>{resumeData.coverLetter.intro}</p>
              <p>{resumeData.coverLetter.body1}</p>
              <p>{resumeData.coverLetter.body2}</p>
              <p>{resumeData.coverLetter.body3}</p>
              <p>{resumeData.coverLetter.conclusion}</p>
              <p>
                Agradezco sinceramente su tiempo y consideración.
              </p>
              <p>Atentamente,</p>
              <p className="font-bold font-headline">{resumeData.name}</p>
            </div>
            <div className="mt-8 pt-6 border-t">
                 <p className="text-sm text-muted-foreground">
                    <span className="font-bold">Disponibilidad:</span> {resumeData.coverLetter.availability}
                </p>
            </div>
          </section>
        </main>
      </div>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground no-print">
        <p>&copy; <CurrentYear /> {resumeData.name}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
