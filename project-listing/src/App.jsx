import heroImg from "./assets/hero-image.jpg";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="relative h-screen w-full">
      <img
        src={heroImg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-5/6 object-cover z-0"
      />
      <div className="relative z-10 flex flex-col justify-end h-5/6 pb-52 ml-20">
        <h1 className="text-5xl font-bold mb-4">Peace, nature, and dream</h1>
        <p className="text-2xl mb-8">Find and book a great experience.</p>
      </div>
      <div className="relative z-10 flex flex-col items-center bg-white w-full h-1/6">
        <Filter />
      </div>
    </div>
  );
}

export default App;
