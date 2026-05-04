'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Cross-domain hero scene. SVG-based for budget compliance, accessibility,
 * and graceful prefers-reduced-motion fallback. Three vector tracks (air, land,
 * maritime) traversing a stylized Arabian-peninsula-inspired contour, resolving
 * into a unified mesh constellation.
 */
export function CrossDomainScene() {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 0.85 },
    transition: { duration: reduce ? 0 : 2.4, delay, ease: [0.16, 1, 0.3, 1] },
  });
  const fade = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: reduce ? 0 : 1.2, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <svg
      viewBox="0 0 800 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Air, land, and maritime autonomous tracks resolving into a unified mesh."
    >
      <defs>
        <linearGradient id="hzGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c8a96a" stopOpacity="0" />
          <stop offset="0.5" stopColor="#c8a96a" stopOpacity="0.4" />
          <stop offset="1" stopColor="#c8a96a" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="bg" cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#c8a96a" stopOpacity="0.10" />
          <stop offset="1" stopColor="#070708" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft glow */}
      <rect width="800" height="480" fill="url(#bg)" />

      {/* Topographic contour (Arabian-peninsula stylization, abstracted) */}
      {[180, 200, 220, 240, 260, 280, 300, 320].map((y, i) => (
        <motion.path
          key={y}
          d={`M 60 ${y} Q 200 ${y - 14 - i} 400 ${y - 8} T 740 ${y - 4 + i * 0.5}`}
          stroke="#c8a96a"
          strokeOpacity={0.12}
          strokeWidth={0.6}
          fill="none"
          {...draw(0.05 * i)}
        />
      ))}

      {/* Horizon */}
      <motion.line x1="0" y1="340" x2="800" y2="340" stroke="url(#hzGrad)" strokeWidth={0.8} {...fade(0.6)} />

      {/* Air track — high arc */}
      <motion.path
        d="M 60 240 Q 220 100 400 120 T 740 180"
        stroke="#c8a96a"
        strokeWidth={1.1}
        fill="none"
        {...draw(0.4)}
      />
      {/* Land track — terrain following */}
      <motion.path
        d="M 60 320 Q 180 305 280 320 T 480 318 T 740 312"
        stroke="#c8a96a"
        strokeOpacity={0.7}
        strokeWidth={1.0}
        fill="none"
        strokeDasharray="3 3"
        {...draw(0.7)}
      />
      {/* Sea track — coastal */}
      <motion.path
        d="M 60 400 Q 240 390 420 396 T 740 392"
        stroke="#c8a96a"
        strokeOpacity={0.55}
        strokeWidth={1.0}
        fill="none"
        {...draw(1.0)}
      />

      {/* Vehicle silhouettes */}
      <motion.g {...fade(1.4)}>
        {/* Air */}
        <g transform="translate(400 120)">
          <polygon points="0,-4 18,0 0,4 -18,0" fill="#c8a96a" />
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#c8a96a" strokeWidth="0.6" />
        </g>
        {/* Land */}
        <g transform="translate(360 318)">
          <rect x="-10" y="-3" width="20" height="6" fill="none" stroke="#c8a96a" strokeWidth="1" />
          <rect x="-4" y="-7" width="8" height="4" fill="#c8a96a" />
        </g>
        {/* Sea */}
        <g transform="translate(420 396)">
          <polygon points="-14,2 14,2 10,-3 -10,-3" fill="none" stroke="#c8a96a" strokeWidth="1" />
          <line x1="0" y1="-3" x2="0" y2="-9" stroke="#c8a96a" strokeWidth="0.8" />
        </g>
      </motion.g>

      {/* Mesh constellation — connection lines */}
      <motion.g {...fade(1.8)}>
        <line x1="400" y1="120" x2="360" y2="318" stroke="#c8a96a" strokeOpacity="0.35" strokeDasharray="2 4" />
        <line x1="400" y1="120" x2="420" y2="396" stroke="#c8a96a" strokeOpacity="0.35" strokeDasharray="2 4" />
        <line x1="360" y1="318" x2="420" y2="396" stroke="#c8a96a" strokeOpacity="0.35" strokeDasharray="2 4" />
      </motion.g>

      {/* Fixed-asset nodes (sovereign infrastructure points) */}
      <motion.g {...fade(2.0)}>
        {[
          [120, 350],
          [260, 340],
          [560, 350],
          [680, 360],
          [200, 240],
          [600, 220],
        ].map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={2.5} fill="#c8a96a" />
            <circle cx={x} cy={y} r={6} fill="none" stroke="#c8a96a" strokeOpacity="0.25" />
          </g>
        ))}
      </motion.g>

      {/* Scan line */}
      {!reduce && (
        <motion.line
          x1="0"
          y1="200"
          x2="800"
          y2="200"
          stroke="#c8a96a"
          strokeOpacity="0.18"
          strokeWidth="0.8"
          initial={{ y1: 100, y2: 100 }}
          animate={{ y1: [100, 380, 100], y2: [100, 380, 100] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 2.2 }}
        />
      )}
    </svg>
  );
}
