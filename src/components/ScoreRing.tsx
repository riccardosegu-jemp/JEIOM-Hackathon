import React from 'react';

interface ScoreRingProps {
  score: number; // 0 to 5
  size?: number;
  strokeWidth?: number;
  showSubtext?: boolean;
  className?: string;
}

export const ScoreRing: React.FC<ScoreRingProps> = ({
  score,
  size = 136,
  strokeWidth = 12,
  showSubtext = true,
  className = '',
}) => {
  const clampedScore = Math.max(0, Math.min(5, score));
  const r = (size - strokeWidth * 2) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * r;
  const progress = clampedScore / 5;
  const strokeDashoffset = circumference * (1 - progress);

  // Angle in radians starting from -90deg (top)
  const angle = progress * 2 * Math.PI - Math.PI / 2;
  const dotX = center + r * Math.cos(angle);
  const dotY = center + r * Math.sin(angle);

  const formattedScore = clampedScore.toFixed(1).replace('.', ',');

  return (
    <div className={`relative inline-grid place-items-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="block"
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke="var(--sunk)"
          strokeWidth={strokeWidth}
        />
        {/* Fill */}
        <circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke="var(--meter)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${center} ${center})`}
          className="transition-all duration-700 ease-out"
        />
        {/* Dot at head */}
        {progress > 0.02 && (
          <circle
            cx={dotX}
            cy={dotY}
            r={strokeWidth * 0.75}
            fill="var(--pista)"
            className="transition-all duration-700 ease-out"
          />
        )}
      </svg>
      {/* Central number */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-mono font-bold text-3xl sm:text-4xl leading-none text-ink tracking-tight">
          {formattedScore}
        </span>
        {showSubtext && (
          <span className="font-mono text-[11px] text-ink-muted mt-1 leading-none">
            su 5
          </span>
        )}
      </div>
    </div>
  );
};
