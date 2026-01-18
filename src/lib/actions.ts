'use server';

import { generateProfileFromExperience } from '@/ai/flows/generate-profile-from-experience';
import { z } from 'zod';

const ProfileSchema = z.object({
  workExperience: z.string().min(50, 'Por favor, detalla más tu experiencia laboral (mínimo 50 caracteres).'),
  skills: z.string().min(10, 'Por favor, enumera algunas de tus habilidades (mínimo 10 caracteres).'),
});

type State = {
  message?: string | null;
  profile?: string | null;
  errors?: {
    workExperience?: string[];
    skills?: string[];
  };
};

export async function createProfile(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = ProfileSchema.safeParse({
    workExperience: formData.get('workExperience'),
    skills: formData.get('skills'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Faltan campos o son inválidos. No se pudo generar el perfil.',
    };
  }
  
  try {
    const { workExperience, skills } = validatedFields.data;
    const result = await generateProfileFromExperience({ workExperience, skills });
    
    if (result.profile) {
        return { message: 'Perfil generado exitosamente.', profile: result.profile };
    } else {
        return { message: 'La IA no pudo generar un perfil. Inténtalo de nuevo con más detalles.' };
    }
  } catch (error) {
    console.error('AI Profile Generation Error:', error);
    return { message: 'Error en el servidor. No se pudo generar el perfil.' };
  }
}
