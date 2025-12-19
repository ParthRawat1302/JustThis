import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    designation: "",
    image_url: "",
  });

  const load = () => {
    api.get("/clients").then(res => setClients(res.data));
  };

  useEffect(load, []);

  const submit = async () => {
    await api.post("/clients", form);
    load();
  };

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Add Client</h2>

      <input className="input" placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="input" placeholder="Description"
        onChange={e => setForm({ ...form, description: e.target.value })} />
      <input className="input" placeholder="Designation"
        onChange={e => setForm({ ...form, designation: e.target.value })} />
      <input className="input" placeholder="Image URL"
        onChange={e => setForm({ ...form, image_url: e.target.value })} />

      <button onClick={submit} className="btn">Add Client</button>

      <h2 className="text-xl font-bold mt-8 mb-2">Clients List</h2>
      <ul>
        {clients.map((c: any) => (
          <li key={c._id}>{c.name} — {c.designation}</li>
        ))}
      </ul>
    </div>
  );
}
