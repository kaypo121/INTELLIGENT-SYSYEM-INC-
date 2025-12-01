import { useEffect, useState } from 'react';

export function ChristmasDecorations() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; duration: number; delay: number; size: number }>>([]);

  useEffect(() => {
    // Generate 50 snowflakes with random properties
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 0.5 + Math.random() * 1.5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <>
      {/* Christmas Badge */}
      <div className="christmas-badge">
        🎄 Merry Christmas! 🎅
      </div>

      {/* Christmas Garland Lights with Curved Wire */}
      <div className="christmas-lights">
        {/* SVG curved wire path */}
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <linearGradient id="wireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(40, 40, 40, 0.8)', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: 'rgba(60, 60, 60, 0.6)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(40, 40, 40, 0.4)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Curved garland wire path - creates the swag/droop effect */}
          <path
            d="M 0,10 Q 12.5,25 25,30 T 50,35 T 75,30 Q 87.5,25 100,10"
            stroke="url(#wireGradient)"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
            style={{
              filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3))',
            }}
            transform="scale(1, 1)"
            preserveAspectRatio="none"
          />
        </svg>
        
        {/* Individual hanging light bulbs */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="light" />
        ))}
      </div>

      {/* Snowflakes */}
      <div className="snowflakes">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              fontSize: `${flake.size}em`,
            }}
          >
            ❄
          </div>
        ))}
      </div>
    </>
  );
}
