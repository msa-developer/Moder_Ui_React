import React from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="min-h-screen overflow-hidden relative flex items-center justify-center">
      <div
        className="absolute opacity-40 inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,rgb(59,130,246,0.15),transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
