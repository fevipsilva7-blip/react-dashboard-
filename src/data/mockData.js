// Dados de exemplo — troque por uma chamada de API real quando tiver o back-end pronto.

export const kpis = [
  { id: 'revenue', label: 'Receita (mês)', value: 'R$ 48.230', change: '+12,4%', positive: true },
  { id: 'orders', label: 'Pedidos', value: '1.284', change: '+5,1%', positive: true },
  { id: 'visitors', label: 'Visitantes', value: '9.402', change: '-2,3%', positive: false },
  { id: 'conversion', label: 'Conversão', value: '3,8%', change: '+0,4pp', positive: true },
];

export const revenueByMonth = [
  { month: 'Abr', revenue: 28400 },
  { month: 'Mai', revenue: 31200 },
  { month: 'Jun', revenue: 29800 },
  { month: 'Jul', revenue: 35600 },
  { month: 'Ago', revenue: 41200 },
  { month: 'Set', revenue: 48230 },
];

export const salesByCategory = [
  { category: 'Eletrônicos', sales: 420 },
  { category: 'Casa', sales: 310 },
  { category: 'Moda', sales: 275 },
  { category: 'Livros', sales: 150 },
  { category: 'Esporte', sales: 129 },
];

export const trafficSources = [
  { name: 'Orgânico', value: 42 },
  { name: 'Redes sociais', value: 28 },
  { name: 'Direto', value: 18 },
  { name: 'E-mail', value: 12 },
];

export const recentOrders = [
  { id: '#3021', customer: 'Ana Souza', total: 'R$ 349,90', status: 'Pago' },
  { id: '#3020', customer: 'Marcos Lima', total: 'R$ 129,00', status: 'Pendente' },
  { id: '#3019', customer: 'Júlia Pires', total: 'R$ 899,00', status: 'Pago' },
  { id: '#3018', customer: 'Rafael Dias', total: 'R$ 59,90', status: 'Cancelado' },
  { id: '#3017', customer: 'Bianca Melo', total: 'R$ 215,50', status: 'Pago' },
];
