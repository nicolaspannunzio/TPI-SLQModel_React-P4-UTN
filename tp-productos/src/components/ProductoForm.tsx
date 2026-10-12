export const ProductoForm = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
      <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-1.5">
        <span className="text-gray-600 font-normal text-lg">+</span> Nuevo Producto
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Nombre</label>
          <input
            type="text"
            placeholder="Ej: Auriculares Bluetooth"
            disabled
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-gray-400 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Precio ($)</label>
          <input
            type="number"
            placeholder="Ej: 99.99"
            disabled
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-gray-400 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Descripción</label>
          <input
            type="text"
            placeholder="Ej: Auriculares inalámbricos con cancelación de ruido"
            disabled
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-gray-400 text-sm focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition shadow-sm"
          >
            Guardar producto
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium rounded-lg transition"
          >
            Ejemplo onClick
          </button>
        </div>
      </div>
    </section>
  );
};