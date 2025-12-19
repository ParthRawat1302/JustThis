import { useEffect, useState } from "react";
import { api } from "../../api/api";
import ClientCard from "../../components/ClientCard";

export default function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/clients").then(res => setClients(res.data));
  }, []);

  return (
    <section className="p-10 flex gap-6 overflow-x-auto">
      {clients.map((c: any) => (
        <ClientCard key={c._id} client={c} />
      ))}
    </section>
  );
}
