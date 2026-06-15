import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Enem from "./pages/Faculdades/Enem/Enem";
import Unesp from "./pages/Faculdades/Unesp/Unesp";
import Puccamp from "./pages/Faculdades/Puccamp/Puccamp";
import Unicamp from "./pages/Faculdades/Unicamp/Unicamp";
import Usp from "./pages/Faculdades/Usp/Usp";
import BQ from "./pages/BancoDeQuestoes/BQ";
import Desempenho from "./pages/Desempenho/Desempenho";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/enem" element={<Enem />} />
        <Route path="/usp" element={<Usp />} />
        <Route path="/unicamp" element={<Unicamp />} />
        <Route path="/unesp" element={<Unesp />} />
        <Route path="/puccamp" element={<Puccamp />} />
        <Route path="/bq" element={<BQ />} />
        <Route path="/desempenho" element={<Desempenho />} />
      </Routes>
    </Router>
  );
}

export default App;
