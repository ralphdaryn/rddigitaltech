export default function TechStackBar() {
  return (
    <div className="border-y border-[var(--rd-border)] bg-white/70 backdrop-blur">
      <div className="_container py-3 text-sm flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
        <span className="opacity-70">React</span>
        <span className="opacity-70">Next.js</span>
        <span className="opacity-70">Node.js</span>
        <span className="opacity-70">MySQL</span>
        <span className="opacity-70">Stripe</span>
        <span className="opacity-70">Netlify</span>
        <span className="opacity-70">GA4</span>
      </div>
    </div>
  );
}