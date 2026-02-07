function Lista({ lancamentos }) {
  return (
    <ul>
      {lancamentos.map((l) => (
        <li key={l.id}>
          {l.descricao} — R$ {l.valor} ({l.tipo})
        </li>
      ))}
    </ul>
  );
}

export default Lista;
