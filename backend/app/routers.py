from fastapi import APIRouter, Depends, status
from sqlmodel import Session
from app.database import get_session
from app.schemas import ProductoCreate, ProductoResponse, ProductoUpdate
from app.services import ProductoService

router = APIRouter(prefix="/productos", tags=["Productos"])


def get_service(session: Session = Depends(get_session)) -> ProductoService:
    return ProductoService(session)


@router.get("", response_model=list[ProductoResponse])
def listar_productos(service: ProductoService = Depends(get_service)):
    return service.get_all()


@router.get("/{producto_id}", response_model=ProductoResponse)
def obtener_producto(producto_id: int, service: ProductoService = Depends(get_service)):
    return service.get_by_id(producto_id)


@router.post("", response_model=ProductoResponse, status_code=status.HTTP_201_CREATED)
def crear_producto(producto: ProductoCreate, service: ProductoService = Depends(get_service)):
    return service.create(producto)


@router.put("/{producto_id}", response_model=ProductoResponse)
def actualizar_producto(
    producto_id: int,
    producto: ProductoUpdate,
    service: ProductoService = Depends(get_service),
):
    return service.update(producto_id, producto)


@router.delete("/{producto_id}", status_code=status.HTTP_204_NO_CONTENT)
def eliminar_producto(producto_id: int, service: ProductoService = Depends(get_service)):
    service.delete(producto_id)
    return None