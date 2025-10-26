import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {name: 'S', uv: 30},
  {name: 'M', uv: 50},
  {name: 'T', uv: 70},
  {name: 'W', uv: 40},
  {name: 'T2', uv: 60},
  {name: 'F', uv: 50},
  {name: 'S2', uv: 30},
]

export default function ProjectChart(){
  return (
    <div style={{ width: '100%', height: 220 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="uv" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
