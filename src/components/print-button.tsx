"use client";

import { Printer } from "lucide-react";
import { Button } from "./ui/button";

export function PrintButton() {
  const handlePrint = () => {
    alert("¡El botón ha sido presionado! El evento de clic está funcionando.");
  };

  return (
    <Button
      variant="outline"
      onClick={handlePrint}
    >
      <Printer className="h-4 w-4" />
      <span className="ml-2">Imprimir o Guardar (Test)</span>
    </Button>
  );
}
