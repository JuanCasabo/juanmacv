"use client";

import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export function ResumeHeader() {
  useEffect(() => {
    const printButton = document.getElementById("print-resume-button");
    if (!printButton) return;

    const handlePrint = () => {
      window.print();
    };

    printButton.addEventListener("click", handlePrint);

    return () => {
      printButton.removeEventListener("click", handlePrint);
    };
  }, []);

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center no-print">
      <Button asChild variant="ghost">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al Perfil</span>
        </Link>
      </Button>
      <Button
        id="print-resume-button"
        className="bg-accent text-accent-foreground hover:bg-accent/90"
      >
        <Printer className="mr-2 h-5 w-5" />
        Imprimir o Guardar
      </Button>
    </header>
  );
}
