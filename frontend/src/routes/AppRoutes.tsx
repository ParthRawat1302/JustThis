import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Admin/Dashboard";
import Projects from "../pages/Admin/Projects";
import Clients from "../pages/Admin/Clients";
import Contacts from "../pages/Admin/Contacts";
import Newsletter from "../pages/Admin/Newsletter";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/projects" element={<Projects />} />
        <Route path="/admin/clients" element={<Clients />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/newsletter" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
}
