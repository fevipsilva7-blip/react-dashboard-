const statusClass = {
  Pago: 'badge badge--success',
  Pendente: 'badge badge--warning',
  Cancelado: 'badge badge--danger',
};

export default function OrdersTable({ orders }) {
  return (
    <div className="panel panel--table">
      <h2 className="panel__title">Pedidos recentes</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td><span className={statusClass[order.status]}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
