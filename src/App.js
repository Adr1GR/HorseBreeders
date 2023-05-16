import { Navbar, Home, Finder, Register, Login } from "./hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
      <Router>
        <header>
          <Navbar />
        </header>
        <main className="mt-20 ml-0 mb-20 sm:ml-32 sm:mb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finder" element={<Finder />} />
          </Routes>
        </main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
