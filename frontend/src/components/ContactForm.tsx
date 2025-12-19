import { useState } from "react";
import { api } from "../api/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const submit = async () => {
    await api.post("/contact", form);
    alert("We will contact you shortly!");
  };

  return (
    <div className="bg-blue-600 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-white text-xl font-semibold mb-4 text-center">
        Get a Free Consultation
      </h2>

      <input className="form-input" placeholder="Full Name"
        onChange={e => setForm({ ...form, full_name: e.target.value })} />
      <input className="form-input" placeholder="Email Address"
        onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="form-input" placeholder="Mobile Number"
        onChange={e => setForm({ ...form, mobile: e.target.value })} />
      <input className="form-input" placeholder="City"
        onChange={e => setForm({ ...form, city: e.target.value })} />

      <button
        onClick={submit}
        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded font-semibold"
      >
        Get Quick Quote
      </button>
    </div>
  );
}
