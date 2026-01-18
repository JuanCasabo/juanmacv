"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  const handlePrint = () => {
    alert("¡El botón ha sido presionado! El evento de clic está funcionando.");
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
    >
      <Printer className="h-4 w-4" />
      <span className="ml-2">Imprimir o Guardar (Test)</span>
    </button>
  );
}
