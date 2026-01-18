"use client";

import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ResumeHeader() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center no-print">
      <Button asChild variant="ghost">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al Perfil</span>
        </Link>
      </Button>
      <Button variant="outline" onClick={handlePrint}>
        <Printer className="mr-2 h-4 w-4" />
        Imprimir o Guardar
      </Button>
    </header>
  );
}
