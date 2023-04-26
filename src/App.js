import { Flowbite } from "flowbite-react";
import { Navbar, Home, Register } from "./hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Flowbite>
      <Router>
        <header>
          <Navbar />
        </header>
        <main className="mt-20 ml-0 mb-20 sm:ml-32 sm:mb-0">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Flowbite>
  );
}

export default App;
