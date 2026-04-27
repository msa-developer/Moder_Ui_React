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

      <div className="relative order-2 w-full">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:h-[450px] border-white/5">
            {/*Header IDE*/}
            <header className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10"></header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
