import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const features = [
  {
    title: "Fast setup",
    text: "Launch new projects quickly with a clean and focused design system.",
  },
  {
    title: "Built for teams",
    text: "Keep your product, marketing, and onboarding aligned with one simple layout.",
  },
  {
    title: "Easy to scale",
    text: "Add pages and sections without disrupting the overall visual rhythm.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Welcome
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Modern products for growing businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            A simple, polished structure built with React and Tailwind to help
            your team launch smarter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
              Explore More
            </button>
            <button className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
              View Pricing
            </button>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 h-10 w-10 rounded-lg bg-slate-900" />
              <h2 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.text}
              </p>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
