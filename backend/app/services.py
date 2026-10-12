from fastapi import HTTPException, status
from sqlmodel import Session, select
from app.models import Producto
from app.schemas import ProductoCreate, ProductoUpdate


class ProductoService:
    def __init__(self, session: Session) -> None:
        self.session = session

    def get_all(self) -> list[Producto]:
        statement = select(Producto)
        return list(self.session.exec(statement).all())

    def get_by_id(self, producto_id: int) -> Producto:
        producto = self.session.get(Producto, producto_id)
        if not producto:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Producto con ID {producto_id} no encontrado.",
            )
        return producto

    def create(self, producto_in: ProductoCreate) -> Producto:
        # Validación de conflicto de negocio (409 Conflict)
        existente = self.session.exec(
            select(Producto).where(Producto.nombre == producto_in.nombre)
        ).first()
        if existente:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Ya existe un producto registrado con el nombre '{producto_in.nombre}'.",
            )

        db_producto = Producto.model_validate(producto_in)
        self.session.add(db_producto)
        self.session.commit()
        self.session.refresh(db_producto)
        return db_producto

    def update(self, producto_id: int, producto_in: ProductoUpdate) -> Producto:
        db_producto = self.get_by_id(producto_id)

        # Verificar duplicado en otro registro
        duplicado = self.session.exec(
            select(Producto).where(
                Producto.nombre == producto_in.nombre,
                Producto.id != producto_id
            )
        ).first()
        if duplicado:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Ya existe otro producto con el nombre '{producto_in.nombre}'.",
            )

        db_producto.nombre = producto_in.nombre
        db_producto.descripcion = producto_in.descripcion
        db_producto.precio = producto_in.precio

        self.session.add(db_producto)
        self.session.commit()
        self.session.refresh(db_producto)
        return db_producto

    def delete(self, producto_id: int) -> None:
        db_producto = self.get_by_id(producto_id)
        self.session.delete(db_producto)
        self.session.commit()