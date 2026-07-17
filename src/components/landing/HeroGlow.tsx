export function HeroGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top-left glow */}
      <div
        className="hero-glow motion-reduce:animate-none absolute -left-[15%] -top-[15%] h-[55vw] w-[55vw] max-w-[620px] rounded-full opacity-70 blur-[70px] sm:h-[40vw] sm:w-[40vw] sm:blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,100,0.85) 0%, rgba(218,165,32,0.55) 25%, rgba(184,134,11,0.25) 50%, transparent 70%)",
          animation: "hero-glow-pulse 8s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />

      {/* Top-right glow */}
      <div
        className="hero-glow motion-reduce:animate-none absolute -right-[15%] -top-[15%] h-[50vw] w-[50vw] max-w-[560px] rounded-full opacity-65 blur-[70px] sm:h-[35vw] sm:w-[35vw] sm:blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,100,0.8) 0%, rgba(218,165,32,0.5) 25%, rgba(184,134,11,0.2) 50%, transparent 70%)",
          animation: "hero-glow-pulse 8s ease-in-out infinite",
          animationDelay: "2.5s",
        }}
      />

      {/* Bottom-left glow */}
      <div
        className="hero-glow motion-reduce:animate-none absolute -bottom-[15%] -left-[15%] h-[50vw] w-[50vw] max-w-[560px] rounded-full opacity-65 blur-[70px] sm:h-[35vw] sm:w-[35vw] sm:blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,100,0.8) 0%, rgba(218,165,32,0.5) 25%, rgba(184,134,11,0.2) 50%, transparent 70%)",
          animation: "hero-glow-pulse 8s ease-in-out infinite",
          animationDelay: "5s",
        }}
      />

      {/* Bottom-right glow */}
      <div
        className="hero-glow motion-reduce:animate-none absolute -bottom-[15%] -right-[15%] h-[55vw] w-[55vw] max-w-[620px] rounded-full opacity-70 blur-[70px] sm:h-[40vw] sm:w-[40vw] sm:blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,100,0.85) 0%, rgba(218,165,32,0.55) 25%, rgba(184,134,11,0.25) 50%, transparent 70%)",
          animation: "hero-glow-pulse 8s ease-in-out infinite",
          animationDelay: "7.5s",
        }}
      />
    </div>
  );
}
