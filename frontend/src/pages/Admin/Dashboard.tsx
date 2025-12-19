import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/admin/projects" className="card">Manage Projects</Link>
        <Link to="/admin/clients" className="card">Manage Clients</Link>
        <Link to="/admin/contacts" className="card">View Contacts</Link>
        <Link to="/admin/newsletter" className="card">Newsletter Emails</Link>
      </div>
    </div>
  );
}
