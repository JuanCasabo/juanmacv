"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button onClick={handlePrint} className="bg-accent text-accent-foreground hover:bg-accent/90">
      <Printer className="mr-2 h-5 w-5" />
      Imprimir o Guardar
    </Button>
  );
}
