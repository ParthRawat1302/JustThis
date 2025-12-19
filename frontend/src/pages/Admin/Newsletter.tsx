import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function Newsletter() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    api.get("/newsletter").then(res => setEmails(res.data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Subscribed Emails</h2>

      <ul>
        {emails.map((e: any) => (
          <li key={e._id}>{e.email}</li>
        ))}
      </ul>
    </div>
  );
}
