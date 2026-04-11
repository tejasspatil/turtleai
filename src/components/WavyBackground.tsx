"use client";

import { useEffect, useRef } from "react";

interface WavyBackgroundProps {
  className?: string;
  colors?: string[];
  waveOpacity?: number;
  blur?: number;
}

/**
 * Stripe-style ribbon wave.
 * Dense parallel sine curves modulated by an asymmetric envelope so the
 * ribbon pinches near the left and fans out toward the right — the same
 * "narrow waist" feel as stripe.com/in.
 */
export default function WavyBackground({
  className = "",
  colors = ["#f4c89a", "#ff5fae", "#a04bff", "#1B2A4A"],
  waveOpacity = 0.95,
  blur = 0,
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    const LINES = 90;

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      const centerY = height * 0.55;

      // Horizontal gradient through the brand colors.
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0.0, colors[0]);
      gradient.addColorStop(0.32, colors[1]);
      gradient.addColorStop(0.62, colors[2]);
      gradient.addColorStop(1.0, colors[colors.length - 1]);

      ctx.lineWidth = 1.4;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.globalCompositeOperation = "source-over";

      for (let i = 0; i < LINES; i++) {
        const t = i / (LINES - 1); // 0..1 across the ribbon stack

        // Frequency / phase staggered per line for the parallax ribbon look.
        const freq = 0.0018 + t * 0.0008;
        const phase = i * 0.16;
        const ampBase = 130 + t * 260;

        ctx.beginPath();

        for (let x = 0; x <= width; x += 3) {
          const nx = x / width;

          // Asymmetric envelope: pinched waist around 22%, fans out right.
          // sin(pi*nx) gives a smooth bell; multiplying by (0.15 + nx^1.4)
          // skews the bell so amplitude is small on the left, max on the right.
          const bell = Math.sin(Math.PI * nx);
          const skew = 0.18 + Math.pow(nx, 1.35) * 1.05;
          const envelope = bell * skew;

          const y =
            centerY +
            Math.sin(x * freq + time + phase) * ampBase * envelope +
            Math.sin(x * freq * 0.5 - time * 0.7 + phase * 0.3) *
              ampBase *
              envelope *
              0.25;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = gradient;
        // Front strands brighter, back strands fading into the dark navy.
        const alpha = waveOpacity * (1 - t * 0.7);
        ctx.globalAlpha = alpha;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      time += 0.009;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, waveOpacity]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 z-0"
        style={{
          filter: blur > 0 ? `blur(${blur}px)` : "none",
        }}
      />
    </div>
  );
}
