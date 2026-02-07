function Resumo({ lancamentos }) {
  const receitas = lancamentos
    .filter((l) => l.tipo === "receita")
    .reduce((total, l) => total + l.valor, 0);

  const despesas = lancamentos
    .filter((l) => l.tipo === "despesa")
    .reduce((total, l) => total + l.valor, 0);

  const saldo = receitas - despesas;

  return (
    <div>
      <p>Receitas: R$ {receitas}</p>
      <p>Despesas: R$ {despesas}</p>
      <p>Saldo: R$ {saldo}</p>
    </div>
  );
}

export default Resumo;

