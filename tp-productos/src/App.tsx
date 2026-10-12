import { Navbar } from "./components/Navbar";
import { ProductoForm } from "./components/ProductoForm";
import { ProductoList } from "./components/ProductoList";
import { Footer } from "./components/Footer";
import type { Producto } from "./types/producto";

const PRODUCTOS_EJEMPLO: Producto[] = [
  { id: 1, nombre: "iPhone 15", descripcion: "Electrónica", precio: 999.0 },
  { id: 2, nombre: "Remera Nike", descripcion: "Ropa", precio: 35.5 },
  { id: 3, nombre: "Yerba Mate 1kg", descripcion: "Alimentos", precio: 4.5 },
  { id: 4, nombre: "Silla Ergonómica", descripcion: "Hogar", precio: 150.0 },
  { id: 5, nombre: "Pelota de Fútbol", descripcion: "Deportes", precio: 45.0 },
];

export function App() {
  return (
    <div className="min-h-screen bg-slate-50/60 flex flex-col font-sans">
      <Navbar titulo="TP Productos" />

      <main className="max-w-xl w-full mx-auto px-4 py-6 flex-grow">
        <ProductoForm />
        <ProductoList productos={PRODUCTOS_EJEMPLO} />
      </main>

      <Footer />
    </div>
  );
}

export default App;