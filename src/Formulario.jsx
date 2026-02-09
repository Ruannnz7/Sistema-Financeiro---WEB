import { useState } from "react";

function Formulario({ onAdd }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");

  function enviar(e) {
    e.preventDefault();

    if (!descricao || !valor) return;

    const novoLancamento = {
      id: Date.now(),
      descricao,
      valor: parseFloat(valor),
      tipo
    };

    onAdd(novoLancamento);

    setDescricao("");
    setValor("");
  }

  return (
    <form className="formulario" onSubmit={enviar}>

      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={e => setValor(e.target.value)}
      />

      <select
        value={tipo}
        onChange={e => setTipo(e.target.value)}
      >
        <option value="receita">Receita</option>
        <option value="despesa">Despesa</option>
      </select>

      <button type="submit">Adicionar</button>

    </form>
  );
}

export default Formulario;
