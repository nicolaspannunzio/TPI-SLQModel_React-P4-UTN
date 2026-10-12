import os
from collections.abc import Generator
from sqlmodel import Session, SQLModel, create_engine

DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "postgresql://postgres:admin123@localhost:5432/productos_db"
)

engine = create_engine(DATABASE_URL, echo=True)


def init_db() -> None:
    """Crea las tablas en PostgreSQL si no existen."""
    SQLModel.metadata.create_all(engine)


def get_session() -> Generator[Session, None, None]:
    """Provee una sesión de base de datos para cada request."""
    with Session(engine) as session:
        yield session