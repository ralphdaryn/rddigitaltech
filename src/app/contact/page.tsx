export const metadata = { title: "Contact — RD Digital Tech" };

export default function ContactPage() {
  return (
    <main className="section">
      <div className="_container">
        <h1>Contact</h1>
        <p className="mt-3 text-[color:var(--rd-muted)]">
          Tell us about your project. We usually respond within 1 business day.
        </p>

        <div className="panel p-6 md:p-8 mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <form className="space-y-4">
              <div>
                <label className="block text-sm fw-bold">Name</label>
                <input
                  className="w-full border rounded-lg p-3"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm fw-bold">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-3"
                  placeholder="you@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm fw-bold">Message</label>
                <textarea
                  className="w-full border rounded-lg p-3 h-32"
                  placeholder="What do you need?"
                ></textarea>
              </div>
              <button className="btn btn-primary" type="button">
                Send
              </button>
            </form>

            <aside className="card">
              <h3 className="fw-bold">Get in touch</h3>
              <ul className="mt-2 space-y-1 text-[color:var(--rd-muted)]">
                <li>info@rddigitaltech.ca</li>
                <li>Toronto, ON</li>
                <li>M–F / 9–6</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}