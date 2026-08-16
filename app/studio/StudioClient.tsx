"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import "./studio.css";

type ViewName = "editor" | "organiser";

function verdictFor(score: number): string {
  if (score >= 85) return "Exceptional";
  if (score >= 70) return "Recommended";
  if (score >= 50) return "Improving";
  return "We Avoid";
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "—";
  return (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
}

const DRAFT_KEY = "je-studio-draft";
const LAYOUT_KEY = "je-studio-layout";

type ModuleId = "hero" | "picks" | "pillars" | "scorecard" | "guests" | "forum" | "newsletter";

const MODULES: Record<ModuleId, { name: string; desc: string; tag: string; kind: string }> = {
  hero: { name: "Lead investigation", desc: "Featured story + Editor's Picks rail", tag: "Investigation", kind: "hero" },
  picks: { name: "Editor's Picks", desc: "This month's curated shortlist", tag: "Editor's Picks", kind: "block" },
  pillars: { name: "Pillars grid", desc: "Products / Companies / Good Living / Doing Good / News / Forum", tag: "Explore", kind: "block" },
  scorecard: { name: "Scorecard spotlight", desc: "How-we-rate explainer with a live example", tag: "How we rate", kind: "block" },
  guests: { name: "Guest posts", desc: "Latest contributor essays", tag: "From our community", kind: "block" },
  forum: { name: "Forum preview", desc: "Active threads + AI companion panel", tag: "The forum", kind: "block" },
  newsletter: { name: "Newsletter band", desc: "Signup strip, sits above the footer", tag: "Subscribe", kind: "newsletter" },
};

const TEMPLATES: Record<string, { label: string; desc: string; order: ModuleId[] }> = {
  editorial: { label: "News-led", desc: "Lead investigation first — default", order: ["hero", "picks", "pillars", "scorecard", "guests", "forum", "newsletter"] },
  shopping: { label: "Shopping-led", desc: "Ratings and picks up top", order: ["picks", "scorecard", "pillars", "hero", "guests", "forum", "newsletter"] },
  community: { label: "Community-led", desc: "Forum surfaced near the top", order: ["hero", "forum", "pillars", "picks", "guests", "scorecard", "newsletter"] },
  campaign: { label: "Campaign spotlight", desc: "Leads with guest voices + picks", order: ["guests", "picks", "hero", "pillars", "scorecard", "forum", "newsletter"] },
};

const DEFAULT_LAYOUT = TEMPLATES.editorial.order.map((id) => ({ id, visible: true }));

export default function StudioClient() {
  const [view, setView] = useState<ViewName>("editor");

  return (
    <div className="studio-app">
      <nav className="railnav">
        <div className="studio-brand">
          <Logo />
          <small className="studio-badge">Studio</small>
        </div>
        <button
          className={`rail-btn${view === "editor" ? " active" : ""}`}
          onClick={() => setView("editor")}
          type="button"
        >
          <span className="ico">✎</span> Article editor
        </button>
        <button
          className={`rail-btn${view === "organiser" ? " active" : ""}`}
          onClick={() => setView("organiser")}
          type="button"
        >
          <span className="ico">▦</span> Homepage organiser
        </button>
        <div className="rail-foot">
          Prototype tools for the editorial team — state saves to this browser only, not a live
          backend yet.
        </div>
      </nav>

      <div className="main">
        {view === "editor" ? <ArticleEditor /> : <HomepageOrganiser />}
      </div>
    </div>
  );
}

function ArticleEditor() {
  const [title, setTitle] = useState("");
  const [dek, setDek] = useState("");
  const [section, setSection] = useState("Ethical Products");
  const [status, setStatus] = useState("draft");
  const [byline, setByline] = useState("");
  const [tags, setTags] = useState("");
  const [guest, setGuest] = useState(false);
  const [rated, setRated] = useState(false);
  const [people, setPeople] = useState(80);
  const [planet, setPlanet] = useState(80);
  const [transparency, setTransparency] = useState(80);
  const [saveLabel, setSaveLabel] = useState("Saved");

  const bodyRef = useRef<HTMLDivElement>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restored = useRef(false);

  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const d = JSON.parse(raw);
      setTitle(d.title ?? "");
      setDek(d.dek ?? "");
      setSection(d.section ?? "Ethical Products");
      setStatus(d.status ?? "draft");
      setByline(d.byline ?? "");
      setTags(d.tags ?? "");
      setGuest(!!d.guest);
      setRated(!!d.rated);
      setPeople(d.people ?? 80);
      setPlanet(d.planet ?? 80);
      setTransparency(d.transparency ?? 80);
      if (bodyRef.current) bodyRef.current.innerHTML = d.body ?? "";
    } catch {
      /* corrupt draft, start fresh */
    }
  }, []);

  function persist() {
    try {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({
          title,
          dek,
          section,
          status,
          byline,
          tags,
          guest,
          rated,
          people,
          planet,
          transparency,
          body: bodyRef.current?.innerHTML ?? "",
        })
      );
    } catch {
      /* storage unavailable, drop silently — this is a local-only prototype */
    }
  }

  function scheduleAutosave() {
    setSaveLabel("Saving…");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      persist();
      setSaveLabel("Saved just now");
    }, 500);
  }

  // re-run autosave whenever a controlled field changes
  useEffect(() => {
    if (!restored.current) return;
    scheduleAutosave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, dek, section, byline, tags, guest, rated, people, planet, transparency]);

  function exec(cmd: string, val?: string) {
    bodyRef.current?.focus();
    if (cmd === "createLink") {
      const url = window.prompt("Link URL");
      if (!url) return;
      document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd, false, val);
    }
    scheduleAutosave();
  }

  const overall = Math.round((people + planet + transparency) / 3);
  const verdict = verdictFor(overall);
  const bylineDisplay = guest ? `${byline.trim() || "Guest contributor"} · Guest post` : byline.trim();

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Article editor</h1>
          <div className="sub">{title.trim() || "Untitled draft"}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="save-state">
            <span className="save-dot" />
            <span>{saveLabel}</span>
          </span>
          <button
            className="btn outline"
            type="button"
            onClick={() => {
              setStatus("draft");
              persist();
              setSaveLabel("Saved as draft");
            }}
          >
            Save draft
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => {
              if (!title.trim()) {
                setSaveLabel("Add a headline first");
                return;
              }
              setStatus("published");
              persist();
              setSaveLabel("Published just now");
            }}
          >
            Publish
          </button>
        </div>
      </div>

      <div className="editor-body">
        <div className="editor-form">
          <div className="field">
            <label htmlFor="f-title">Headline</label>
            <input
              id="f-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Inside the fast-fashion supply chain…"
            />
          </div>
          <div className="field">
            <label htmlFor="f-dek">Dek / subtitle</label>
            <textarea
              id="f-dek"
              rows={2}
              value={dek}
              onChange={(e) => setDek(e.target.value)}
              placeholder="One or two sentences that tell readers why this matters."
            />
          </div>
          <div className="row-2">
            <div className="field">
              <label htmlFor="f-section">Section</label>
              <select id="f-section" value={section} onChange={(e) => setSection(e.target.value)}>
                <option>Ethical Products</option>
                <option>Ethical Companies</option>
                <option>Good Living</option>
                <option>Doing Good</option>
                <option>News &amp; Investigations</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-status">Status</label>
              <select id="f-status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-byline">Byline</label>
            <input
              id="f-byline"
              type="text"
              value={byline}
              onChange={(e) => setByline(e.target.value)}
              placeholder="Mira Kessler, Investigations Editor"
            />
          </div>
          <div className="field">
            <label htmlFor="f-tags">Tags</label>
            <input
              id="f-tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="fashion, supply chain, certifications"
            />
          </div>

          <div className="switch-row">
            <div className="txt">
              Guest post
              <small>Bylined as a contributor, flagged separately from staff reporting</small>
            </div>
            <label className="switch">
              <input type="checkbox" checked={guest} onChange={(e) => setGuest(e.target.checked)} />
              <span className="track" />
              <span className="knob" />
            </label>
          </div>
          <div className="switch-row">
            <div className="txt">
              This is a rated review
              <small>Adds a People / Planet / Transparency scorecard</small>
            </div>
            <label className="switch">
              <input type="checkbox" checked={rated} onChange={(e) => setRated(e.target.checked)} />
              <span className="track" />
              <span className="knob" />
            </label>
          </div>

          {rated && (
            <div className="scorecard-panel">
              <div className="sc-slider-row">
                <div className="top">
                  <span>People</span>
                  <span className="num">{people}</span>
                </div>
                <input type="range" min={0} max={100} value={people} onChange={(e) => setPeople(+e.target.value)} />
              </div>
              <div className="sc-slider-row">
                <div className="top">
                  <span>Planet</span>
                  <span className="num">{planet}</span>
                </div>
                <input type="range" min={0} max={100} value={planet} onChange={(e) => setPlanet(+e.target.value)} />
              </div>
              <div className="sc-slider-row">
                <div className="top">
                  <span>Transparency</span>
                  <span className="num">{transparency}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={transparency}
                  onChange={(e) => setTransparency(+e.target.value)}
                />
              </div>
              <div className="sc-overall">
                <div>
                  <span className="num n">{overall}</span>{" "}
                  <span style={{ color: "var(--ink-faint)", fontSize: "0.82rem" }}>/ 100</span>
                </div>
                <span className="verdict-pill">{verdict}</span>
              </div>
            </div>
          )}
        </div>

        <div className="preview-pane">
          <div className="toolbar">
            <button type="button" onClick={() => exec("bold")} title="Bold">
              <b>B</b>
            </button>
            <button type="button" onClick={() => exec("italic")} title="Italic">
              <i>I</i>
            </button>
            <div className="sep" />
            <button type="button" onClick={() => exec("formatBlock", "H2")} title="Heading">
              H2
            </button>
            <button type="button" onClick={() => exec("formatBlock", "BLOCKQUOTE")} title="Quote">
              ❝
            </button>
            <div className="sep" />
            <button type="button" onClick={() => exec("insertUnorderedList")} title="Bulleted list">
              •—
            </button>
            <button type="button" onClick={() => exec("createLink")} title="Link">
              🔗
            </button>
          </div>
          <div className="preview-scroll">
            <div className="preview-doc">
              <div className="eyebrow">{section}</div>
              <h2 className="serif">{title.trim() || "Untitled draft"}</h2>
              <div className="dek">{dek.trim() || "Your dek will appear here as you write it."}</div>
              <div className="byline">
                <span className="avatar">{initials(byline || "—")}</span>
                <span>{bylineDisplay || "Add a byline"}</span>
              </div>
              <div
                className="body-copy"
                contentEditable
                suppressContentEditableWarning
                ref={bodyRef}
                data-placeholder="Start writing the article…"
                onInput={scheduleAutosave}
              />

              {rated && (
                <div className="preview-scorecard">
                  <div className="row">
                    <strong>{title.trim() || "Subject name"}</strong>
                    <span className="verdict-pill">{verdict}</span>
                  </div>
                  <div className="row">
                    <span className="n num">{overall}</span>
                    <span style={{ color: "var(--ink-faint)" }}>
                      People <span className="num">{people}</span> · Planet{" "}
                      <span className="num">{planet}</span> · Transparency{" "}
                      <span className="num">{transparency}</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HomepageOrganiser() {
  const [layout, setLayout] = useState<{ id: ModuleId; visible: boolean }[]>(DEFAULT_LAYOUT);
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [saveLabel, setSaveLabel] = useState("Saved");
  const [dragId, setDragId] = useState<ModuleId | null>(null);
  const [dragOverId, setDragOverId] = useState<ModuleId | null>(null);
  const restored = useRef(false);

  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    try {
      const raw = localStorage.getItem(LAYOUT_KEY);
      if (raw) setLayout(JSON.parse(raw));
    } catch {
      /* corrupt layout, keep default */
    }
  }, []);

  function saveLayout(next = layout) {
    try {
      localStorage.setItem(LAYOUT_KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable, drop silently */
    }
    setSaveLabel("Saved just now");
  }

  function applyTemplate(key: string) {
    const t = TEMPLATES[key];
    setActiveTemplate(key);
    setLayout(
      t.order.map((id) => {
        const existing = layout.find((m) => m.id === id);
        return { id, visible: existing ? existing.visible : true };
      })
    );
    setSaveLabel("Unsaved changes");
  }

  function toggleVisible(id: ModuleId) {
    setLayout((prev) => prev.map((m) => (m.id === id ? { ...m, visible: !m.visible } : m)));
    setActiveTemplate(null);
    setSaveLabel("Unsaved changes");
  }

  function handleDrop(targetId: ModuleId) {
    if (!dragId || dragId === targetId) {
      setDragId(null);
      setDragOverId(null);
      return;
    }
    setLayout((prev) => {
      const next = [...prev];
      const fromIdx = next.findIndex((m) => m.id === dragId);
      const toIdx = next.findIndex((m) => m.id === targetId);
      const [moved] = next.splice(fromIdx, 1);
      next.splice(toIdx, 0, moved);
      return next;
    });
    setActiveTemplate(null);
    setSaveLabel("Unsaved changes");
    setDragId(null);
    setDragOverId(null);
  }

  const visibleModules = layout.filter((m) => m.visible);

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Homepage organiser</h1>
          <div className="sub">Drag to reorder · toggle to hide · pick a template to start from</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="save-state">
            <span className="save-dot" />
            <span>{saveLabel}</span>
          </span>
          <button
            className="btn outline"
            type="button"
            onClick={() => {
              setActiveTemplate("editorial");
              setLayout(DEFAULT_LAYOUT);
              saveLayout(DEFAULT_LAYOUT);
            }}
          >
            Reset to default
          </button>
          <button className="btn" type="button" onClick={() => saveLayout()}>
            Save layout
          </button>
        </div>
      </div>

      <div className="organiser-body">
        <div className="org-panel">
          <span className="panel-label">Start from a template</span>
          <div className="templates">
            {Object.entries(TEMPLATES).map(([key, t]) => (
              <button
                key={key}
                type="button"
                className={`template-btn${activeTemplate === key ? " active" : ""}`}
                onClick={() => applyTemplate(key)}
              >
                <span className="t">{t.label}</span>
                <span className="d">{t.desc}</span>
              </button>
            ))}
          </div>

          <span className="panel-label">Modules, in order</span>
          <div className="module-list">
            {layout.map((item) => {
              const mod = MODULES[item.id];
              return (
                <div
                  key={item.id}
                  className={[
                    "module-row",
                    !item.visible && "hidden-mod",
                    dragId === item.id && "dragging",
                    dragOverId === item.id && "drag-over",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  draggable
                  onDragStart={() => setDragId(item.id)}
                  onDragEnd={() => {
                    setDragId(null);
                    setDragOverId(null);
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOverId(item.id);
                  }}
                  onDragLeave={() => setDragOverId((cur) => (cur === item.id ? null : cur))}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleDrop(item.id);
                  }}
                >
                  <span className="grip">⠷</span>
                  <div className="info">
                    <div className="name">{mod.name}</div>
                    <div className="desc">{mod.desc}</div>
                  </div>
                  <button
                    className={`vis-toggle${item.visible ? "" : " off"}`}
                    type="button"
                    title={item.visible ? "Hide on homepage" : "Show on homepage"}
                    onClick={() => toggleVisible(item.id)}
                  >
                    {item.visible ? "\u{1F441}" : "\u{1F576}"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="preview-frame">
          <div className="mini-home">
            {visibleModules.length === 0 ? (
              <div className="preview-empty">
                Every module is hidden — the homepage would render empty.
              </div>
            ) : (
              visibleModules.map((item) => {
                const mod = MODULES[item.id];
                return (
                  <div className={`mini-block ${mod.kind}`} key={item.id}>
                    <span className="tag">{mod.tag}</span>
                    <div className="stub-title" />
                    <div className="stub-line" style={{ width: "92%" }} />
                    <div className="stub-line" style={{ width: "74%" }} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
