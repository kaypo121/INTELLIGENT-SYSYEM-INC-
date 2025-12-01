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

      {/* Christmas Lights */}
      <div className="christmas-lights">
        {Array.from({ length: 20 }).map((_, i) => (
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
