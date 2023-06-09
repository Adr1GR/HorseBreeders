import { Navbar, Home, Finder,FakeFinder, HorseDetails, Register, Login } from "./hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finder" element={<Finder />} />
          <Route path="/needlogin" element={<FakeFinder />} />
          <Route path="/horse/:id" element={<HorseDetails />}></Route>
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
