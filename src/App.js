// Want to first set up pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EngCons from "./pages/EngCons";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/english-consonants" element={<EngCons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
