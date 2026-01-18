
"use client";

import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function ResumeHeader() {
  // Definimos la función explícitamente
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault(); // Evitamos cualquier comportamiento por defecto
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center no-print">
      <Button asChild variant="ghost">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al Perfil</span>
        </Link>
      </Button>
      
      <Button
        type="button" // Aseguramos que sea tipo button
        variant="outline"
        onClick={handlePrint} // Usamos la función definida arriba
      >
        <Printer className="h-4 w-4" />
        <span className="ml-2">Imprimir o Guardar</span>
      </Button>
    </header>
  );
}
