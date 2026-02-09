function Resumo({ lancamentos }) {
  const receitas = lancamentos
    .filter(l => l.tipo === "receita")
    .reduce((acc, l) => acc + Number(l.valor), 0);

  const despesas = lancamentos
    .filter(l => l.tipo === "despesa")
    .reduce((acc, l) => acc + Number(l.valor), 0);

  const saldo = receitas - despesas;

  const formatar = valor =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  return (
    <div className="resumo">

      <div className="card receita">
        <h4>Receitas</h4>
        <p>{formatar(receitas)}</p>
      </div>

      <div className="card despesa">
        <h4>Despesas</h4>
        <p>{formatar(despesas)}</p>
      </div>

      <div className="card saldo">
        <h4>Saldo</h4>
        <p>{formatar(saldo)}</p>
      </div>

    </div>
  );
}

export default Resumo;
