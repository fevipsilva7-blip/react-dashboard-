export default function KpiCard({ label, value, change, positive }) {
  return (
    <div className="kpi-card">
      <span className="kpi-card__label">{label}</span>
      <strong className="kpi-card__value">{value}</strong>
      <span className={`kpi-card__change ${positive ? 'kpi-card__change--up' : 'kpi-card__change--down'}`}>
        {positive ? '▲' : '▼'} {change}
      </span>
    </div>
  );
}
