const TICKS = Array.from({ length: 72 }, (_, i) => i);
const NODES = [
  { angle: 20, label: "PHP 8.6" },
  { angle: 65, label: "SYMFONY" },
  { angle: 110, label: "NODE" },
  { angle: 155, label: "REACT" },
  { angle: 200, label: "VUE" },
  { angle: 245, label: "DOCKER" },
  { angle: 290, label: "KUBERNETES" },
  { angle: 335, label: "API" },
];

function polar(radius: number, angle: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: 200 + radius * Math.cos(rad), y: 200 + radius * Math.sin(rad) };
}

function arc(radius: number, start: number, end: number) {
  const a = polar(radius, start);
  const b = polar(radius, end);
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${radius} ${radius} 0 0 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
}

export default function HudIllustration({
  className = "",
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      role="img"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="hud-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeOpacity="0.15" />
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeOpacity="0.1" />

      <g className="hud-spin-slow">
        {TICKS.map((i) => {
          const long = i % 6 === 0;
          const a = polar(long ? 176 : 180, i * 5);
          const b = polar(190, i * 5);
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="currentColor"
              strokeOpacity={long ? 0.9 : 0.4}
              strokeWidth={long ? 1.5 : 1}
            />
          );
        })}
      </g>

      <g className="hud-spin-reverse">
        <path d={arc(160, 10, 110)} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d={arc(160, 150, 190)} stroke="currentColor" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
        <path d={arc(160, 215, 335)} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g className="hud-spin-mid">
        <circle cx="200" cy="200" r="128" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="2 8" strokeWidth="2" />
        <path d={arc(118, 300, 360)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d={arc(118, 100, 170)} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g>
        {NODES.map((n) => {
          const p = polar(160, n.angle);
          const t = polar(138, n.angle);
          return (
            <g key={n.label}>
              <circle cx={p.x} cy={p.y} r="5" fill="currentColor" className="hud-pulse" />
              <text
                x={t.x}
                y={t.y}
                fill="currentColor"
                fontSize="8"
                letterSpacing="1"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="monospace"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </g>

      <circle cx="200" cy="200" r="86" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="70" fill="url(#hud-core)" className="hud-pulse" />
      <circle cx="200" cy="200" r="34" stroke="currentColor" strokeWidth="2" />
      <circle cx="200" cy="200" r="10" fill="currentColor" />

      <line x1="200" y1="0" x2="200" y2="30" stroke="currentColor" strokeOpacity="0.6" />
      <line x1="200" y1="370" x2="200" y2="400" stroke="currentColor" strokeOpacity="0.6" />
      <line x1="0" y1="200" x2="30" y2="200" stroke="currentColor" strokeOpacity="0.6" />
      <line x1="370" y1="200" x2="400" y2="200" stroke="currentColor" strokeOpacity="0.6" />
    </svg>
  );
}
