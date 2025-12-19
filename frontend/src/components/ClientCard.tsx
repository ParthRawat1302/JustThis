export default function ClientCard({ client }: any) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-5">
    <div className="w-64 border rounded p-4 text-center">
      <img src={client.image_url} className="h-20 w-20 mx-auto rounded-full" />
      <p className="text-sm mt-2">{client.description}</p>
      <h4 className="font-bold">{client.name}</h4>
      <span className="text-xs">{client.designation}</span>
    </div>
    </section>
  );
}
