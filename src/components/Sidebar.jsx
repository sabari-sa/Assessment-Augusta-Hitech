import { NavLink } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="w-72 bg-white border-r min-h-screen p-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-green-600 rounded-full text-white flex items-center justify-center font-bold">A</div>
        <div>
          <div className="font-semibold">Augusta</div>
          <div className="text-sm text-gray-500">UI Assessment</div>
        </div>
      </div>

      <nav className="space-y-2">
        <NavLink to="/" className="block px-3 py-2 rounded hover:bg-gray-100"><i className="fa fa-solid fa-grip px-3 py-2"></i>Landing</NavLink>
        <NavLink to="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100"><i className="fa fa-solid fa-tornado px-3 py-2"></i>Dashboard</NavLink>
      </nav>

      <div className="mt-10">
        <button className="w-full px-4 py-2 bg-green-600 text-white rounded">Download App</button>
      </div>
    </aside>
  )
}
