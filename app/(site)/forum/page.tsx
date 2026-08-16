import type { Metadata } from "next";

export const metadata: Metadata = { title: "Forum" };

const THREADS = [
  { title: "Is there an actually ethical fast-shipping option, or is that a contradiction?", by: "@noahb", tag: "Good Living", replies: 34 },
  { title: "Best vetted charities for disaster relief right now?", by: "@kimosei", tag: "Doing Good", replies: 21 },
  { title: "B Corp vs. Fair Trade Certified — which actually means more?", by: "@lena_h", tag: "Ethical Companies", replies: 57 },
  { title: "Anyone tried Kadu's base layers in real winter conditions?", by: "@travisr", tag: "Ethical Products", replies: 12 },
  { title: "Is 'carbon neutral shipping' ever a real claim?", by: "@priyash", tag: "News", replies: 19 },
  { title: "How do you budget for ethical groceries without doubling your bill?", by: "@dwoods", tag: "Good Living", replies: 41 },
];

export default function ForumPage() {
  return (
    <>
      <div className="wrap">
        <div className="page-head">
          <p className="label">The Forum · 8,900 members</p>
          <h1>Ask the community — sourced, not vibes</h1>
          <p>
            Every thread has an AI companion that footnotes claims, flags unverified statements
            with a link to sourcing, and surfaces JoinEthically&apos;s own reporting when it&apos;s
            relevant. It never asserts a bare opinion of its own.
          </p>
        </div>
      </div>

      <section style={{ borderTop: "none", paddingTop: 0 }}>
        <div className="wrap">
          <div className="forum-wrap">
            <div className="thread-list">
              {THREADS.map((t) => (
                <div className="thread" key={t.title}>
                  <div>
                    <div className="thread-t">{t.title}</div>
                    <div className="thread-meta">
                      Started by {t.by} · {t.tag}
                    </div>
                  </div>
                  <span className="thread-replies num">{t.replies} replies</span>
                </div>
              ))}
            </div>

            <div className="panel">
              <div className="panel-head">
                <p className="label">Thread preview</p>
                <span className="label" style={{ color: "var(--gold-ink)" }}>
                  AI companion active
                </span>
              </div>
              <div className="msg">
                <span className="avatar">NB</span>
                <div className="msg-body">
                  <div className="who">@noahb</div>
                  Is there an actually ethical fast-shipping option, or is that a contradiction in
                  terms?
                </div>
              </div>
              <div className="msg ai">
                <span className="avatar">✦</span>
                <div className="msg-body">
                  <div className="who">AI companion</div>
                  Related reading: our review of <strong>Ledger Coffee&apos;s</strong> regional
                  micro-fulfillment model, and a 2026 investigation on carbon-offset shipping
                  claims. Flagging that &quot;carbon neutral shipping&quot; is an unverified claim
                  in 3 of the top 5 replies below — want the sourcing?
                </div>
              </div>
              <div className="msg">
                <span className="avatar">KO</span>
                <div className="msg-body">
                  <div className="who">@kimosei</div>
                  Yes please — I keep seeing that claim and don&apos;t trust it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
