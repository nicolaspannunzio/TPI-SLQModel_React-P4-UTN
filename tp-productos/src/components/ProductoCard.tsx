import type { Producto } from "../types/producto";

interface ProductoCardProps {
  producto: Producto;
}

export const ProductoCard = ({ producto }: ProductoCardProps) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
      <td className="py-3 px-4 text-sm text-gray-400 font-normal">{producto.id}</td>
      <td className="py-3 px-4 text-sm font-semibold text-gray-800">{producto.nombre}</td>
      <td className="py-3 px-4 text-sm text-gray-600 font-medium">${producto.precio.toFixed(2)}</td>
      <td className="py-3 px-4 text-sm text-gray-400">{producto.descripcion}</td>
    </tr>
  );
};