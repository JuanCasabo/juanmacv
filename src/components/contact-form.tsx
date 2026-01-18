"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  
  if (!name || !email || !message) {
      return { success: false, message: "Por favor, completa todos los campos." };
  }

  // In a real app, you would send an email or save to a database here.
  console.log("New Contact Form Submission:", { name, email, message });

  return { success: true, message: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto." };
}

const initialState = {
  message: null,
  success: false,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Enviando..." : "Enviar Mensaje"}
        </Button>
    )
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Mensaje Enviado" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Mail className="text-primary"/>
            Contacto
        </CardTitle>
        <CardDescription>
          ¿Interesado en colaborar? Envíame un mensaje.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <Input name="name" type="text" placeholder="Tu Nombre" required aria-label="Tu Nombre" />
          <Input name="email" type="email" placeholder="Tu Correo Electrónico" required aria-label="Tu Correo Electrónico" />
          <Textarea name="message" placeholder="Tu Mensaje" rows={5} required aria-label="Tu Mensaje" />
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
