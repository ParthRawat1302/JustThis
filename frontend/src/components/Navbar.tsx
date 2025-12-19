import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">JustThis</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-600">Home</Link>
          <Link to="/admin" className="text-xl font-bold text-blue-600 hover:text-blue-600">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
