from pydantic import BaseModel, Field, field_validator


class ProductoBase(BaseModel):
    nombre: str = Field(..., min_length=1, description="Nombre del producto")
    descripcion: str = Field(default="", description="Descripción detallada")
    precio: float = Field(..., ge=0, description="Precio mayor o igual a 0")

    @field_validator("nombre")
    @classmethod
    def nombre_no_vacio(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("El nombre no puede quedar vacío ni contener solo espacios.")
        return value.strip()


class ProductoCreate(ProductoBase):
    pass


class ProductoUpdate(ProductoBase):
    pass


class ProductoResponse(ProductoBase):
    id: int

    class Config:
        from_attributes = True