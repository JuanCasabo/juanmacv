
import Image from 'next/image';
import { Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type { resumeData as ResumeDataType } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type ResumeHeroProps = {
    resumeData: ResumeDataType;
    profileImage: ImagePlaceholder | undefined;
};

export function ResumeHero({ resumeData, profileImage }: ResumeHeroProps) {
  return (
    <section id="hero-printable" className="flex flex-col md:flex-row items-center gap-8 border-b pb-8">
      <div
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shrink-0 overflow-hidden border-4 border-primary/20 shadow-lg print:w-32 print:h-32"
      >
        <Image
          src={profileImage?.imageUrl || '/Foto%20CV%20Juan.png'}
          alt={resumeData.name}
          width={160}
          height={160}
          className="object-cover object-[center_50%] h-full w-full scale-125"
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
            <a href={`mailto:${resumeData.contact.email}`} className="hover:underline">{resumeData.contact.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href={`https://wa.me/${resumeData.contact.phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{resumeData.contact.phone}</a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/juan-manuel-correa...</a>
          </div>
           {resumeData.contact.website && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <a href={resumeData.contact.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {resumeData.contact.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

    
