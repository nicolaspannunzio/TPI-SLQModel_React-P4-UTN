# TP Programación IV: SQLModel + React + Tailwind CSS

Proyecto dividido en dos módulos según las especificaciones de las consignas del presente TP

## Estructura del Proyecto

- **backend/**: API REST desarrollada con FastAPI y SQLModel persistiendo en PostgreSQL.
  - Arquitectura en capas: `models`, `schemas`, `services`, `routers`.
  - Validación con Pydantic y reglas de negocio en la capa de servicios (422 ante datos inválidos, 409 ante duplicados, 404 ante ID inexistente).
  - Archivo de pruebas de endpoints: `test_endpoints.http`.
- **tp-productos/**: Frontend desarrollado con React, TypeScript y Tailwind CSS sobre Vite.
  - Maquetado estático con componentes funcionales puros (sin `useState` ni `useEffect`).
  - `src/types/producto.ts`: Definición de la interfaz tipada `Producto`.
  - `src/components/`: Componentes reutilizables (`Navbar`, `ProductoCard`, `ProductoList`, `ProductoForm`, `Footer`).


## Autor

**Nicolás A. Pannunzio** – Full Stack Developer & QA Automation 
🔗 [Perfil de LinkedIn](https://www.linkedin.com/in/nicolas-a-pannunzio-/)