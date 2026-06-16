import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
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
import { getToken, isTokenExpired, removeToken } from "./utils/auth";

function RequireAuth({ children }) {
  const token = getToken();

  if (!token || isTokenExpired(token)) {
    removeToken();
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />} />
          <Route path="/enem" element={<Enem />} />
          <Route path="/usp" element={<Usp />} />
          <Route path="/unicamp" element={<Unicamp />} />
          <Route path="/unesp" element={<Unesp />} />
          <Route path="/puccamp" element={<Puccamp />} />
          <Route path="/bq" element={<BQ />} />
          <Route path="/desempenho" element={<Desempenho />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
