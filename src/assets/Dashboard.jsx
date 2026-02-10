import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function Dashboard() {
  const [showValues, setShowValues] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="bg-white text-blue-600 w-10 h-10 flex items-center justify-center rounded-xl font-bold">
              💰
            </div>

            <div>
              <h1 className="text-xl font-bold">Controle Financeiro</h1>
              <p className="text-sm opacity-90">
                Gerencie suas finanças pessoais
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowValues(!showValues)}
            className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30"
          >
            <Eye size={18} />
            {showValues ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 mt-6">

          <Card
            title="Entradas"
            value="R$ 33.201,00"
            emoji="📈"
            color="bg-green-500/20"
            show={showValues}
          />

          <Card
            title="Saídas"
            value="R$ 22.780,00"
            emoji="📉"
            color="bg-red-500/20"
            show={showValues}
          />

          <Card
            title="Saldo"
            value="R$ 10.421,00"
            emoji="💵"
            color="bg-blue-500/20"
            show={showValues}
            highlight
          />

        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-6">

        {/* Nova transação */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-lg mb-4">
            ➕ Nova Transação
          </h2>

          <input
            placeholder="Título"
            className="w-full border p-2 rounded-lg mb-3"
          />

          <input
            placeholder="Valor"
            className="w-full border p-2 rounded-lg mb-3"
          />

          <div className="flex gap-2 mb-3">
            <button className="flex-1 bg-green-500 text-white p-2 rounded-lg">
              Entrada
            </button>

            <button className="flex-1 bg-red-500 text-white p-2 rounded-lg">
              Saída
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white p-2 rounded-lg">
            Salvar
          </button>
        </div>

        {/* Histórico */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-5">

          <h2 className="font-semibold text-lg mb-4">
            📜 Histórico
          </h2>

          <Transaction
            title="Aluguel"
            value="-R$ 1.000,00"
            positive={false}
          />

          <Transaction
            title="Salário"
            value="+R$ 10.000,00"
            positive
          />

        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center p-4 text-sm">
        © 2026 Sistema Financeiro 🚀
      </footer>
    </div>
  );
}

function Card({ title, value, emoji, color, show, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl p-5 backdrop-blur border border-white/20 ${color}`}
    >
      <div className="flex items-center gap-3 text-white">
        <span className="text-2xl">{emoji}</span>

        <div>
          <p className="text-sm opacity-90">{title}</p>

          <p className={`text-xl font-bold ${highlight ? "text-green-300" : ""}`}>
            {show ? value : "••••••"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Transaction({ title, value, positive }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-between items-center border rounded-xl p-4 mb-3 hover:bg-gray-50"
    >
      <p className="font-semibold">{title}</p>

      <div className="flex items-center gap-3">
        <p className={`font-bold ${positive ? "text-green-600" : "text-red-600"}`}>
          {value}
        </p>

        <Pencil size={18} className="cursor-pointer" />
        <Trash2 size={18} className="cursor-pointer text-red-500" />
      </div>
    </motion.div>
  );
}
