import { useState } from "react";
import { api } from "../../api/api";

export default function ProjectsAdmin() {
  const [data, setData] = useState({
    name: "",
    description: "",
    image_url: "",
  });

  const submit = async () => {
    await api.post("/projects", data);
    alert("Project Added");
  };

  return (
    <div className="p-10">
      <input placeholder="Name" onChange={e => setData({...data, name:e.target.value})} />
      <input placeholder="Description" onChange={e => setData({...data, description:e.target.value})} />
      <input placeholder="Image URL" onChange={e => setData({...data, image_url:e.target.value})} />
      <button onClick={submit}>Add</button>
    </div>
  );
}
