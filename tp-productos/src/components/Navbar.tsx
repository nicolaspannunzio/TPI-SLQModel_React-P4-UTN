interface NavbarProps {
  titulo: string;
}

export const Navbar = ({ titulo }: NavbarProps) => {
  return (
    <header className="bg-white border-b border-gray-100 py-6 text-center">
      <h1 className="text-2xl font-bold text-indigo-900 flex items-center justify-center gap-2">
        <span>📦</span> {titulo}
      </h1>
      <p className="text-xs text-gray-400 mt-1">Datos Estáticos · TS Interfaces · Capa UI</p>
    </header>
  );
};