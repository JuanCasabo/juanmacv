"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      type="button"
      onClick={handlePrint}
      className="bg-accent text-accent-foreground hover:bg-accent/90"
    >
      <Printer className="mr-2 h-5 w-5" />
      Imprimir o Guardar
    </Button>
  );
}
