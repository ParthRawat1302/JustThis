import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsSection from "./sections/ProjectsSection";
import ClientsSection from "./sections/ClientsSection";
import ContactForm from "../components/ContactForm";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Consultation,<br />Design & Marketing
            </h1>
            <p className="mt-4 text-gray-600">
              We help you build modern, scalable and impactful digital solutions.
            </p>
          </div>

          {/* RIGHT FORM */}
          <ContactForm />
        </div>
      </section>
    <div className="text-3xl font-bold text-center mx-10">
  Our Projects
</div>
      <ProjectsSection />
          <div className="text-3xl font-bold text-center mx-10">
  Our Clients
</div>
      <ClientsSection />
      <Footer />
    </>
  );
}
