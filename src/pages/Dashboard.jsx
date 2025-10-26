import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MetricCard from '../components/MetricCard'
import ProjectChart from '../components/ProjectChart'
import man from "../assests/images/man.png";
import teamwork from "../assests/images/teamwork.png";
import user from "../assests/images/user.png";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard title="Total Projects" value="24" subtitle="Increased from last month" />
              <MetricCard title="Ended Projects" value="10" subtitle="Increased from last month" />
              <MetricCard title="Running Projects" value="12" subtitle="Increased from last month" />
              <MetricCard title="Pending" value="2" subtitle="On Discuss" />
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Project Analytics</h3>
              <ProjectChart />
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Team Collaboration</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="profile flex-shrink-0">
                    <img src={user} alt="" srcset="" />
                  </div>
                  <div className='flex-1'>
                    <div className="font-medium">Alexandra Deff</div>
                    <div className="text-sm text-gray-500">Working on Github Project Repository</div>
                  </div>
                  <div className="text-sm text-green-600">Completed</div>
                </li>
                <li className="flex items-center gap-3">
                <div className="profile flex-shrink-0">
                    <img src={teamwork} alt="" srcset="" />
                  </div>
                  <div className='flex-1'>
                    <div className="font-medium">Edwin Adenike</div>
                    <div className="text-sm text-gray-500">Integrate User Authentication</div>
                  </div>
                  <div className="text-sm text-yellow-600">In Progress</div>
                </li>
                <li className="flex items-center gap-3">
                <div className="profile flex-shrink-0">
                    <img src={man} alt="" srcset="" />
                  </div>
                  <div className='flex-1'>
                    <div className="font-medium">Isaac Oluwatemilorun</div>
                    <div className="text-sm text-gray-500">Search and Filter Functionality</div>
                  </div>
                  <div className="text-sm text-red-600">Pending</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Project Progress</h3>
              <div className="flex items-center justify-center">
                <div className="text-3xl font-bold">41%</div>
                <div className="ml-4 text-sm text-gray-500">Project Ended</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Reminders</h3>
              <div className="text-sm text-gray-600">Meeting with Arc Company<br/>02:00 pm - 04:00 pm</div>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Start Meeting</button>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Project List</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Develop API Endpoints • Due: Nov 26, 2024</li>
                <li>Onboarding Flow • Due: Nov 28, 2024</li>
                <li>Build Dashboard • Due: Nov 30, 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
