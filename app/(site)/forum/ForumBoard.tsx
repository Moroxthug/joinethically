"use client";

import { useState } from "react";

const THREADS = [
  { title: "Is there an actually ethical fast-shipping option, or is that a contradiction?", by: "@noahb", tag: "Good Living", replies: 34 },
  { title: "Best vetted charities for disaster relief right now?", by: "@kimosei", tag: "Doing Good", replies: 21 },
  { title: "B Corp vs. Fair Trade Certified — which actually means more?", by: "@lena_h", tag: "Ethical Companies", replies: 57 },
  { title: "Anyone tried Kadu's base layers in real winter conditions?", by: "@travisr", tag: "Ethical Products", replies: 12 },
  { title: "Is 'carbon neutral shipping' ever a real claim?", by: "@priyash", tag: "News", replies: 19 },
  { title: "How do you budget for ethical groceries without doubling your bill?", by: "@dwoods", tag: "Good Living", replies: 41 },
];

const TAGS = ["Good Living", "Doing Good", "Ethical Companies", "Ethical Products", "News"];

export default function ForumBoard() {
  const [active, setActive] = useState("All");
  const [draft, setDraft] = useState("");
  const [posted, setPosted] = useState<string | null>(null);
  const threads = active === "All" ? THREADS : THREADS.filter((t) => t.tag === active);

  return (
    <div className="wrap">
      <div className="filter-chips">
        {["All", ...TAGS].map((name) => (
          <button
            key={name}
            type="button"
            className={`chip${active === name ? " active" : ""}`}
            onClick={() => setActive(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <form
        className="coming-soon"
        style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 32, maxWidth: "none" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (!draft.trim()) return;
          setPosted(draft.trim());
          setDraft("");
        }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask the community something…"
          aria-label="Start a new thread"
          style={{
            flex: 1,
            border: "1px solid var(--line-strong)",
            borderRadius: 20,
            padding: "9px 16px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.86rem",
            background: "var(--bg-raised)",
            color: "var(--ink)",
          }}
        />
        <button className="btn" type="submit">
          Post thread
        </button>
      </form>
      {posted && (
        <p
          className="num"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            color: "var(--accent-ink)",
            marginTop: -22,
            marginBottom: 32,
          }}
        >
          Queued: “{posted}” — new threads go live once a moderator reviews them (prototype only,
          not yet wired to a backend).
        </p>
      )}

      <div className="forum-wrap">
        <div className="thread-list">
          {threads.map((t) => (
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
          {threads.length === 0 && (
            <p style={{ fontFamily: "var(--font-sans)", color: "var(--ink-faint)", padding: "24px 0" }}>
              No threads tagged {active} yet — be the first to ask.
            </p>
          )}
        </div>

        <div className="panel">
          <div className="panel-head">
            <p className="label">Thread preview</p>
            <span
              className="label"
              style={{ color: "var(--gold-ink)", display: "inline-flex", alignItems: "center", gap: 7 }}
            >
              <span className="pulse-dot" style={{ background: "var(--gold)" }} aria-hidden="true" />
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
              micro-fulfillment model, and a 2026 investigation on carbon-offset shipping claims.
              Flagging that &quot;carbon neutral shipping&quot; is an unverified claim in 3 of the
              top 5 replies below — want the sourcing?
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
  );
}
