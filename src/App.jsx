import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Lista from "./Lista";
import Resumo from "./Resumo";
import "./App.css";

function App() {
  const [lancamentos, setLancamentos] = useState([]);

  // Carregar do localStorage
  useEffect(() => {
    const dados = localStorage.getItem("lancamentos");
    if (dados) setLancamentos(JSON.parse(dados));
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem("lancamentos", JSON.stringify(lancamentos));
  }, [lancamentos]);

  function adicionarLancamento(lancamento) {
    setLancamentos([...lancamentos, lancamento]);
  }

  function removerLancamento(id) {
    setLancamentos(lancamentos.filter(l => l.id !== id));
  }

  return (
    <div className="app">

      <header className="header">
        <h2>Controle Financeiro</h2>
      </header>

      <Resumo lancamentos={lancamentos} />

      <Formulario onAdd={adicionarLancamento} />

      <Lista
        lancamentos={lancamentos}
        onDelete={removerLancamento}
      />

    </div>
  );
}

export default App;
