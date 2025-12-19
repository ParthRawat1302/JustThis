export default function ProjectCard({ project }: any) {
  return (

    <section className="max-w-7xl mx-auto px-6 py-5">


    <div className="border rounded shadow p-4">
      <img src={project.image_url} className="h-40 w-full object-cover" />
      <h3 className="font-bold mt-2">{project.name}</h3>
      <p className="text-sm">{project.description}</p>
      <button className="mt-3 bg-orange-500 text-white px-4 py-1">
        Read More
      </button>
    </div>
    </section>
  );
}
