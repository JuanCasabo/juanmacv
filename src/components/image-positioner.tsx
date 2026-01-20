'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type ImagePositionerProps = {
  profileImage: ImagePlaceholder | undefined;
  resumeName: string;
  width: number;
  height: number;
  initialX?: number;
  initialY?: number;
  scale?: number;
};

export function ImagePositioner({
  profileImage,
  resumeName,
  width,
  height,
  initialX = 50,
  initialY = 70,
  scale = 1.25,
}: ImagePositionerProps) {
  const [positionX, setPositionX] = useState(initialX);
  const [positionY, setPositionY] = useState(initialY);

  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-full overflow-hidden border-4 border-primary/20 shadow-lg"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <Image
          src={profileImage?.imageUrl || '/Foto%20CV%20Juan.png'}
          alt={resumeName}
          width={width}
          height={height}
          className="object-cover h-full w-full"
          style={{
            objectPosition: `${positionX}% ${positionY}%`,
            transform: `scale(${scale})`,
          }}
          data-ai-hint={profileImage?.imageHint}
          priority
        />
      </div>
      <div className="mt-8 p-4 border rounded-lg bg-card w-full max-w-sm">
        <h4 className="text-sm font-medium mb-4 text-center">Ajustar Posición de Imagen (Temporal)</h4>
        <div className="space-y-4">
          <div>
            <Label htmlFor="position-x" className="text-muted-foreground">Horizontal (X): {positionX}%</Label>
            <Slider
              id="position-x"
              min={0}
              max={100}
              step={1}
              value={[positionX]}
              onValueChange={(value) => setPositionX(value[0])}
            />
          </div>
          <div>
            <Label htmlFor="position-y" className="text-muted-foreground">Vertical (Y): {positionY}%</Label>
            <Slider
              id="position-y"
              min={0}
              max={100}
              step={1}
              value={[positionY]}
              onValueChange={(value) => setPositionY(value[0])}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">Una vez que encuentres la posición ideal, avísame para que pueda fijarla en el código y eliminar estos controles.</p>
      </div>
    </div>
  );
}
