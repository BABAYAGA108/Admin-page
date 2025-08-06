
const Sidebar = () => {
  return (
    <div className=" bg-blue-900 text-white w-64 h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/users">Users</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}


export default Sidebar;