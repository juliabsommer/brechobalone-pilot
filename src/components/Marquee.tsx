interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export function Marquee({
  items,
  direction = "left",
  speed = "medium",
  className = "",
  itemClassName = "",
  separator = "✦",
}: MarqueeProps) {
  const duration = { slow: "55s", medium: "32s", fast: "18s" }[speed];
  const animClass =
    direction === "right" ? "animate-marquee-right" : "animate-marquee-left";

  // Duplicate so the loop is seamless
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <div
        className={`flex w-max ${animClass}`}
        style={{ animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={`shrink-0 ${itemClassName}`}>
            {item}
            <span className="mx-5 opacity-40">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
