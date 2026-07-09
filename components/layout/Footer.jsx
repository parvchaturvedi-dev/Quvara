import Logo from "@/components/brand/Logo";
import { nav, site, founders } from "@/lib/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-5 flex flex-col gap-1.5">
              {founders.map((f) => (
                <a
                  key={f.email}
                  href={`mailto:${f.email}`}
                  className="text-sm font-medium text-ink underline underline-offset-4 hover:text-muted"
                >
                  {f.email}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-faint">
                Navigate
              </h3>
              <ul className="mt-4 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-faint">
                Founders
              </h3>
              <ul className="mt-4 space-y-3">
                {founders.map((f) => (
                  <li key={f.name} className="text-sm text-muted">
                    {f.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {site.name}. All rights reserved.</span>
          <span>AI-native ERP · Oracle APEX</span>
        </div>
      </div>
    </footer>
  );
}
