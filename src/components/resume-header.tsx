"use client";

import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function ResumeHeader() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center no-print">
      <Button asChild variant="ghost">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al Perfil</span>
        </Link>
      </Button>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      >
        <Printer className="h-4 w-4" />
        Imprimir o Guardar
      </button>
    </header>
  );
}
