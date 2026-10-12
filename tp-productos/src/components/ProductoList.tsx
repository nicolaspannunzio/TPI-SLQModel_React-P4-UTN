import type { Producto } from "../types/producto";
import { ProductoCard } from "./ProductoCard";

interface ProductoListProps {
  productos: Producto[];
}

export const ProductoList = ({ productos }: ProductoListProps) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>📋</span> Productos ({productos.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-gray-400 border-b border-gray-100">
              <th className="py-2 px-4 font-normal">Id</th>
              <th className="py-2 px-4 font-normal">Nombre</th>
              <th className="py-2 px-4 font-normal">Precio</th>
              <th className="py-2 px-4 font-normal">Categoría</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod) => (
              <ProductoCard key={prod.id} producto={prod} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};