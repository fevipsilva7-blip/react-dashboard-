const links = [
  { label: 'Visão geral', icon: '📊', active: true },
  { label: 'Pedidos', icon: '🧾' },
  { label: 'Clientes', icon: '👤' },
  { label: 'Produtos', icon: '📦' },
  { label: 'Configurações', icon: '⚙️' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">Pulse</div>
      <nav>
        <ul className="sidebar__nav">
          {links.map((link) => (
            <li key={link.label} className={link.active ? 'active' : ''}>
              <span>{link.icon}</span> {link.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
