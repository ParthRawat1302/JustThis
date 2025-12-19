import { useState } from "react";
import { api } from "../api/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    await api.post("/newsletter", { email });
    alert("Subscribed successfully!");
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get updates, offers and latest news.
        </p>

        <div className="flex gap-2">
          <input
            className="flex-1 p-2 border rounded"
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          />
          <button
            onClick={subscribe}
            className="bg-blue-600 text-white px-6 rounded"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
