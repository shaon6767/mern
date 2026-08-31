const footerLinks = ['Privacy', 'Terms', 'Support', 'Blog']

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">REACT</p>
          <p className="mt-1 text-sm text-slate-500">Simple solutions for modern teams.</p>
        </div>

        <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-slate-900">
              {link}
            </a>
          ))}
        </nav>

        <p className="text-sm text-slate-500">© 2026 React Studio</p>
      </div>
    </footer>
  )
}
