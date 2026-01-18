"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { createProfile } from "@/lib/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const initialState = { message: null, errors: {}, profile: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? "Generando..." : "Generar Perfil con IA"}
      {!pending && <Sparkles className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function ProfileGenerator() {
  const [state, dispatch] = useFormState(createProfile, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.profile) {
      toast({
        variant: "destructive",
        title: "Error de Generación",
        description: state.message,
      });
    }
    if (state.profile) {
      toast({
        title: "¡Éxito!",
        description: "Tu nuevo perfil ha sido generado.",
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Sparkles className="text-primary" />
          Generador de Perfil con IA
        </CardTitle>
        <CardDescription>
          Describe tu experiencia y habilidades para crear un resumen profesional optimizado, enfocado en tus talentos híbridos.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} action={dispatch}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="workExperience">Experiencia Laboral</Label>
            <Textarea
              id="workExperience"
              name="workExperience"
              placeholder="Ej: Lideré el desarrollo de una plataforma SaaS, mejorando la eficiencia del cliente en un 40%..."
              rows={6}
              required
              aria-describedby="workExperience-error"
            />
            <div id="workExperience-error" aria-live="polite">
                {state.errors?.workExperience &&
                state.errors.workExperience.map((error: string) => (
                    <p className="text-sm font-medium text-destructive" key={error}>{error}</p>
                ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="skills">Habilidades</Label>
            <Textarea
              id="skills"
              name="skills"
              placeholder="Ej: JavaScript, React, Node.js, Ventas Técnicas, Gestión de Proyectos..."
              rows={3}
              required
              aria-describedby="skills-error"
            />
            <div id="skills-error" aria-live="polite">
                {state.errors?.skills &&
                state.errors.skills.map((error: string) => (
                    <p className="text-sm font-medium text-destructive" key={error}>{error}</p>
                ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
        </CardFooter>
      </form>
      {state.profile && (
        <CardFooter>
            <Card className="w-full bg-secondary/50">
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Perfil Sugerido</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-secondary-foreground">{state.profile}</p>
                </CardContent>
            </Card>
        </CardFooter>
      )}
    </Card>
  );
}
