function Lista({ lancamentos, onDelete }) {
  return (
    <table className="tabela">

      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Valor</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {lancamentos.map(l => (
          <tr key={l.id}>

            <td>{l.descricao}</td>

            <td>
              <span className={`badge ${l.tipo}`}>
                {l.tipo.toUpperCase()}
              </span>
            </td>

            <td>
              R$ {Number(l.valor).toFixed(2)}
            </td>

            <td>
              <button
                className="delete"
                onClick={() => onDelete(l.id)}
              >
                🗑
              </button>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default Lista;
