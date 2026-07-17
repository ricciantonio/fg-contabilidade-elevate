export function HeroGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Main halo — behind the photo on the right */}
      <div
        className="animate-hero-breathe motion-reduce:animate-none absolute right-[-15%] top-[10%] h-[80vw] w-[80vw] max-h-[900px] max-w-[900px] rounded-full blur-[100px] sm:blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(218,165,32,0.55) 0%, rgba(184,134,11,0.35) 30%, rgba(184,134,11,0.12) 55%, transparent 75%)",
          animationDelay: "0s",
        }}
      />

      {/* Secondary glow — below-left, asymmetric balance */}
      <div
        className="animate-hero-breathe motion-reduce:animate-none absolute -bottom-[20%] -left-[10%] h-[55vw] w-[55vw] max-h-[600px] max-w-[600px] rounded-full blur-[90px] sm:blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(218,165,32,0.35) 0%, rgba(184,134,11,0.18) 35%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)",
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
        }}
      />

      {/* Left side darkening for extra contrast */}
      <div
        className="absolute inset-y-0 left-0 w-1/3"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), transparent)",
        }}
      />
    </div>
  );
}
