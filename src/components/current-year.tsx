"use client";

import { useState, useEffect } from 'react';

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) {
    // Return null on the server and initial client render to avoid hydration mismatch
    return null;
  }

  return <span>{year}</span>;
}
