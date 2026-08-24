import { useMemo, useState } from "react";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { journal } from "../data";
import "./JournalIndex.css";

const SORTS = ["Newest", "Quick Reads", "Long Reads"];

function readMinutes(readTime) {
  const n = parseInt(readTime, 10);
  return Number.isNaN(n) ? 0 : n;
}

export default function JournalIndex() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState("Newest");

  const tags = useMemo(() => ["All", ...new Set(journal.map((j) => j.tag))], []);

  const posts = useMemo(() => {
    let list = journal.filter((j) => {
      const matchesTag = tag === "All" || j.tag === tag;
      const matchesQuery =
        !query ||
        j.title.toLowerCase().includes(query.toLowerCase()) ||
        j.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    });
    if (sort === "Quick Reads") {
      list = [...list].sort((a, b) => readMinutes(a.readTime) - readMinutes(b.readTime));
    } else if (sort === "Long Reads") {
      list = [...list].sort((a, b) => readMinutes(b.readTime) - readMinutes(a.readTime));
    }
    return list;
  }, [query, tag, sort]);

  return (
    <section className="section journal-index">
      <div className="wrap">
        <div className="journal-index__head">
          <span className="eyebrow">The Journal</span>
          <h1>Stories, field notes, and planning guides from the road</h1>
          <p>Written by the trip designers and guides who live where they work.</p>
        </div>

        <div className="journal-index__controls">
          <div className="journal-index__search">
            <Search size={16} strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search articles…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="journal-index__tabs">
            {tags.map((t) => (
              <button
                key={t}
                className={`journal-index__tab ${tag === t ? "is-active" : ""}`}
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="journal-index__sorts">
            {SORTS.map((s) => (
              <button
                key={s}
                className={`journal-index__sort ${sort === s ? "is-active" : ""}`}
                onClick={() => setSort(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {posts.length === 0 ? (
          <p className="journal-index__empty">No articles match that search — try a different term or tag.</p>
        ) : (
          <div className="journal-index__grid">
            {posts.map((j) => (
              <Link to={`/journal/${j.slug}`} className="journal-index__card" key={j.slug}>
                <div className="journal-index__cover">
                  <img src={j.cover} alt={j.title} loading="lazy" />
                  <div className="journal-index__badges">
                    <span>
                      <Clock size={11} strokeWidth={1.75} /> {j.readTime}
                    </span>
                    <span>{j.date}</span>
                  </div>
                </div>
                <div className="journal-index__body">
                  <span className="journal-index__tagpill">{j.tag}</span>
                  <h3>{j.title}</h3>
                  <blockquote>{j.pullQuote}</blockquote>
                  <p>{j.excerpt}</p>
                  <div className="journal-index__meta">
                    <span>{j.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{j.authorRole}</span>
                  </div>
                  <span className="journal-index__readmore">
                    Read more <ArrowUpRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
