"use client";

import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function ResumeHeader() {
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = "Mi_Curriculum_Vitae"; // Nombre que sugerirá el PDF
    window.print();
    document.title = originalTitle; // Restaura el título original
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
        variant="outline"
        onClick={handlePrint}
      >
        <Printer className="h-4 w-4" />
        <span className="ml-2">Imprimir o Guardar</span>
      </Button>
    </header>
  );
}
