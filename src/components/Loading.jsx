import React, { useEffect, useRef, useState } from "react";

export default function Loading({ visible = true }) {
  const [percent, setPercent] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let last = performance.now();

    if (visible) {
      const step = (now) => {
        const delta = now - last;
        last = now;

        setPercent((p) => {
          if (p >= 95) return 95;

          let inc =
            p < 50
              ? 0.12 * (delta / 16)
              : p < 85
              ? 0.045 * (delta / 16)
              : 0.01 * (delta / 16);

          return Math.min(95, Math.round((p + inc) * 10) / 10);
        });

        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    } else {
      setPercent(100);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500
        bg-gradient-to-br from-white via-black to-white

        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      aria-hidden={!visible}
      aria-busy={visible}
      role="status"
    >
      <div className="flex flex-col items-center gap-4 text-white">
        <svg
          className="w-30 h-30 md:w-42 md:h-42"
          viewBox="0 0 100 100"
          role="img"
          aria-label={`Loading ${Math.round(percent)} percent`}
        >
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#133935" />
              <stop offset="100%" stopColor="#3b1479" />
            </linearGradient>

            <radialGradient id="face" cx="50%" cy="45%">
              <stop offset="0%" stopColor="#8b9ab5" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#444546" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.8" />
            </radialGradient>
          </defs>

          {/* outer bezel */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255, 255, 255, 0.51)"
            strokeWidth="7"
          />

          {/* inner face */}
          <circle cx="50" cy="50" r="30" fill="url(#face)" />

          {/* animated ring */}
          <g transform="rotate(-90 50 50)">
            <circle
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke="url(#g)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray="80 160"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* hour ticks */}
          <g stroke="rgba(255,255,255,0.6)" strokeWidth="1">
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="12"
                x2="50"
                y2="16"
                transform={`rotate(${i * 30} 50 50)`}
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* minute ticks */}
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1">
            {Array.from({ length: 60 }).map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="8"
                x2="50"
                y2={i % 5 === 0 ? 15 : 11}
                transform={`rotate(${i * 6} 50 50)`}
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* percentage */}
          <text
            x="50"
            y="56"
            fontSize="16"
            textAnchor="middle"
            fill="white"
            className="font-semibold"
          >
            {Math.round(percent)}%
          </text>
        </svg>

        <span className="text-base md:text-lg text-white">
          Loading… {Math.round(percent)}%
        </span>
      </div>
    </div>
  );
}
