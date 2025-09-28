import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-700">
      <div className="text-xl font-bold">
        <Link href="/" className="text-white hover:text-gray-200">
          Next Js
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 rounded-lg bg-gray-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/about" className="text-gray-200 hover:underline">
          About
        </Link>
        <Link href="/contact" className="text-gray-200 hover:underline">
          Contact
        </Link>
        <Link href="/gallery" className="text-gray-200 hover:underline">
          Gallery
        </Link>
        <Link href="/dashboard" className="text-gray-200 hover:underline">
          Dashboard
        </Link>
        <Link href="/login" className="text-gray-200 hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
