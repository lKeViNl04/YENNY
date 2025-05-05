class Detalle:
    def __init__(self, id_detalle, id_venta, id_producto, cantidad, precio_unitario,subtotal):
        self.id_detalle = id_detalle
        self.id_factura = id_venta
        self.id_producto = id_producto
        self.cantidad = cantidad
        self.precio_unitario = precio_unitario
        self.subtotal = subtotal

    def __str__(self):
        return f"Detalle(id_detalle={self.id_detalle}, id_venta={self.id_venta}, id_producto={self.id_producto}, cantidad={self.cantidad}, precio_unitario={self.precio_unitario} , subtotal={self.subtotal})"