import { useEffect, useRef } from 'react';
import { NeatGradient } from '@firecms/neat';
import { config } from './config/neatConfig';

export default function NeatBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const neat = new NeatGradient({
      ref: canvasRef.current,
      ...config,
    });

    return () => neat.destroy();
  }, []);

  return (
    <canvas
      id="gradient"
      ref={canvasRef}
      className="absolute inset-0 -z-10 w-full h-full"
    />
  );
}
