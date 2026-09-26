#  Pulse — Dashboard em React

Painel administrativo responsivo construído com **React + Vite + Recharts**, com KPIs, gráficos (linha, barra e pizza), tabela de pedidos e alternância de tema claro/escuro.

##  Funcionalidades

- Cards de KPI (receita, pedidos, visitantes, conversão)
- Gráfico de receita mensal (linha)
- Gráfico de vendas por categoria (barra)
- Gráfico de origem de tráfego (pizza)
- Tabela de pedidos recentes com status
- Tema claro/escuro
- Layout responsivo (sidebar recolhe em telas pequenas)

##  Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

##  Tecnologias

- React 18
- Vite
- Recharts

##  Estrutura

```
react-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── KpiCard.jsx
│   │   ├── RevenueChart.jsx
│   │   ├── CategoryChart.jsx
│   │   ├── TrafficChart.jsx
│   │   └── OrdersTable.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 💡 Próximos passos

- Trocar `mockData.js` por chamadas a uma API real (ex: seu back-end em Node/Express)
- Adicionar filtro de período (últimos 7/30/90 dias)
- Adicionar autenticação
