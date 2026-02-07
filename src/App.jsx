import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Lista from "./Lista";
import Resumo from "./Resumo";
import "./App.css";

function App() {
  const [lancamentos, setLancamentos] = useState([]);

  // 🌙 Dark mode
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  function adicionarLancamento(lancamento) {
    setLancamentos([...lancamentos, lancamento]);
  }

  return (
    <div className="app">
      {/* Botão de tema */}
      <button
        className="theme-btn"
        onClick={() => setDark(!dark)}
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      <h1>Sistema Financeiro</h1>

      <Resumo lancamentos={lancamentos} />
      <Formulario onAdd={adicionarLancamento} />
      <Lista lancamentos={lancamentos} />
    </div>
  );
}

export default App;

