import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-700">
      <div className="text-xl  font-bold">
        <Link href="/">Next Js</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/about" className="text-gray-200 hover:underline">
          About
        </Link>
        <Link href="/contact" className="text-gray-200 hover:underline">
          Contact
        </Link>
        <Link href="/login" className="text-gray-200 hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
