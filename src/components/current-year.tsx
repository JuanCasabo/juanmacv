"use client";

import { useState, useEffect } from 'react';

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // By returning null on the server and on the first client render,
  // we prevent a hydration mismatch. The year will appear only after
  // the client-side code has safely run.
  if (year === null) {
    return null;
  }

  return <span>{year}</span>;
}
