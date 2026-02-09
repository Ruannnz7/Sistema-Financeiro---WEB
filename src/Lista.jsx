function Lista({ lancamentos, onDelete, onEdit }) {
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
          <tr key={l.id} className="fade-in">

            <td>{l.descricao}</td>

            <td>
              <span className={`badge ${l.tipo}`}>
                {l.tipo.toUpperCase()}
              </span>
            </td>

            <td>R$ {l.valor.toFixed(2)}</td>

            <td className="acoes">

              <button
                className="edit"
                onClick={() => onEdit(l)}
              >
                ✏️
              </button>

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
