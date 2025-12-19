import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contact").then(res => setContacts(res.data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Contact Form Submissions</h2>

      <table className="w-full border">
        <thead>
          <tr className="border">
            <th>Name</th><th>Email</th><th>Mobile</th><th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c: any) => (
            <tr key={c._id} className="border">
              <td>{c.full_name}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
