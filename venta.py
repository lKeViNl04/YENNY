class Venta:
    def __init__(self, id_venta, id_cliente, id_empleado, total, fecha_de_venta, id_metodo_pago ):
        
        self.id_venta = id_venta
        self.id_cliente = id_cliente
        self.id_empleado = id_empleado
        self.fecha_de_venta = fecha_de_venta
        self.id_metodo_pago = id_metodo_pago
        self.total = total
        self.detalle = []

    def __str__(self):
        return f"{self.id_venta} - {self.id_cliente} - {self.id_empleado} - {self.fecha_de_venta} - {self.id_metodo_pago} - {self.total} - {self.detalle}"