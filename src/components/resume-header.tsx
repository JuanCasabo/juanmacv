"use client";

import { ArrowLeft, Printer } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <button
        onClick={handlePrint}
        className={cn(
          buttonVariants(),
          "bg-accent text-accent-foreground hover:bg-accent/90"
        )}
      >
        <Printer className="mr-2 h-5 w-5" />
        Imprimir o Guardar
      </button>
    </header>
  );
}
