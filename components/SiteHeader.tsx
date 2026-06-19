import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-gradient-to-r from-sh-dark to-sh-green text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-sm font-bold tracking-tight">
            RC
          </div>
          <div>
            <div className="text-base font-bold leading-tight">
              Royal Cyber — Shopify Practice
            </div>
            <div className="text-xs text-white/80">
              Agent-powered GTM intelligence & weekly execution plan
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-semibold">
          <Link href="/" className="rounded-md px-3 py-1.5 text-white/90 transition hover:bg-white/15">
            Dashboard
          </Link>
          <Link href="/newsletter" className="rounded-md px-3 py-1.5 text-white/90 transition hover:bg-white/15">
            Intelligence
          </Link>
          <Link href="/weekly-plan" className="rounded-md px-3 py-1.5 text-white/90 transition hover:bg-white/15">
            Weekly Plan
          </Link>
        </nav>
      </div>
    </header>
  );
}
