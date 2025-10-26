export default function Header(){
  return (
    <header className="flex items-center justify-between">
      <div className="relative w-96">
        <input className="w-full border rounded-lg px-4 py-2" placeholder="Search task" />
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">Totok Michael</div>
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">TM</div>
      </div>
    </header>
  )
}
