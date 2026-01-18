"use client";

import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={cn(
        buttonVariants({ variant: "default" }),
        "bg-accent text-accent-foreground hover:bg-accent/90"
      )}
    >
      <Printer className="mr-2 h-5 w-5" />
      Imprimir o Guardar
    </button>
  );
}
