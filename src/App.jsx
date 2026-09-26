import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import KpiCard from './components/KpiCard.jsx';
import RevenueChart from './components/RevenueChart.jsx';
import CategoryChart from './components/CategoryChart.jsx';
import TrafficChart from './components/TrafficChart.jsx';
import OrdersTable from './components/OrdersTable.jsx';
import { kpis, revenueByMonth, salesByCategory, trafficSources, recentOrders } from './data/mockData.js';

export default function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className="layout" data-theme={theme}>
      <Sidebar />

      <div className="content">
        <header className="topbar">
          <div>
            <h1>Visão geral</h1>
            <p className="topbar__subtitle">Resumo do desempenho da loja neste mês</p>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
          </button>
        </header>

        <section className="kpi-grid">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.id} {...kpi} />
          ))}
        </section>

        <section className="charts-grid">
          <RevenueChart data={revenueByMonth} />
          <CategoryChart data={salesByCategory} />
          <TrafficChart data={trafficSources} />
        </section>

        <section>
          <OrdersTable orders={recentOrders} />
        </section>
      </div>
    </div>
  );
}
