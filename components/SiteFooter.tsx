export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-sh-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-sh-muted">
        <p>
          © {new Date().getFullYear()} Royal Cyber · Shopify Practice.
          GTM intelligence, quarterly execution plan, accelerators &amp; project tracking.
        </p>
        <p className="mt-1 text-xs text-[#9CA3AF]">
          Update the data files in the repository to refresh content across all pages.
        </p>
      </div>
    </footer>
  );
}
