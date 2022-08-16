// Want to first set up pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EngCons from "./pages/EngCons";
import EngVowels from "./pages/EngVowels";
import IntCons from "./pages/IntCons";
import IntVowels from './pages/IntVowels'
import NonPulmonic from "./pages/NonPulmonic";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/fighting-phonetics" element={<HomePage />} />
          <Route path="/english-consonants" element={<EngCons />} />
          <Route path="/english-vowels" element={<EngVowels />} />
          <Route path="/international-consonants" element={<IntCons />} />
          <Route path="/international-vowels" element={<IntVowels />} />
          <Route path="/non-pulmonic" element={<NonPulmonic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
