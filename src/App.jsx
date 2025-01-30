import Navbar from "./components/Navbar";
import Homepage from "./routes/Homepage";

const App = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      {/* NAVBAR */}
      <Navbar />
      {/* BREADCRUMB */}
      <Homepage />
      {/* INTRODUCTION */}
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  );
};

export default App;