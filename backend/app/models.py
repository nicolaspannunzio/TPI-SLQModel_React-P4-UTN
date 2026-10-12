from sqlmodel import Field, SQLModel


class Producto(SQLModel, table=True):
    __tablename__ = "productos"

    id: int | None = Field(default=None, primary_key=True)
    nombre: str = Field(index=True, nullable=False)
    descripcion: str = Field(default="", nullable=False)
    precio: float = Field(nullable=False)