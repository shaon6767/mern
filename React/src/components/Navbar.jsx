const navLinks = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          REACT
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
