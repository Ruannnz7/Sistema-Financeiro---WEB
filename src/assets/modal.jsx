function Modal({ aberto, onClose, onSave, dados }) {
  if (!aberto) return null;

  function salvar(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    onSave({
      ...dados,
      descricao: form.get("descricao"),
      valor: parseFloat(form.get("valor")),
      tipo: form.get("tipo"),
    });

    onClose();
  }

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h3>Editar Lançamento</h3>

        <form onSubmit={salvar}>

          <input
            name="descricao"
            defaultValue={dados.descricao}
            required
          />

          <input
            name="valor"
            type="number"
            defaultValue={dados.valor}
            required
          />

          <select name="tipo" defaultValue={dados.tipo}>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>

          <div className="modal-botoes">
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default Modal;
