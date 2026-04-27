import React from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="min-h-screen relarive overflow-hidden">
      <div
        className="absolute inset-0 opacity-8"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,rgb(217, 189, 189, 0.6),transparent 40%)`,
        }}
      />
    </section>
  );
};

export default Hero;
