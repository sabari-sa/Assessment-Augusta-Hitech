export default function MetricCard({ title, value, subtitle }){
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="text-3xl font-bold my-2">{value}</div>
      <div className="text-sm text-green-600">{subtitle}</div>
    </div>
  )
}
