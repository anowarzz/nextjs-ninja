import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-50 dark:bg-gray-900 p-6 border-r border-gray-200 dark:border-gray-700">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Dashboard
        </h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-200"
            >
              <span className="mr-3">🏠</span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-200"
            >
              <span className="mr-3">👤</span>
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/setting"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-200"
            >
              <span className="mr-3">⚙️</span>
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-200"
            >
              <span className="mr-3">🏠</span>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
