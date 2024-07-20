import heroImg from "./assets/hero-image.jpg";
import Filter from "./components/elements/Filter";
import Card from "./components/fragments/Card";

function App() {
  return (
    <div className="relative h-screen w-full bg-dark-gray">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-5/6 object-cover z-0"
      />
      {/* Text moved here, below Filter */}

      {/* Filter Component */}
      <div className="relative z-10 flex flex-col justify-end h-5/6 ml-20">
        <div className="ml-20 pb-44">
          <h1 className="text-6xl font-bold mb-5 text-black">Peace, nature, and dream</h1>
          <p className="text-2xl mb-8 text-black">Find and book a great experience.</p>
        </div>
        <Filter />
      </div>
      

      {/* Card Component */}
      <Card />


    </div>
  );
}

export default App;
