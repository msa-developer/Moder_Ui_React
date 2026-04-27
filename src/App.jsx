import Hero from "./components/Hero";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-900 text-white">
      <Nav />
      <Hero />
    </div>
  );
};

export default App;
