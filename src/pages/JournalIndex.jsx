import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, Clock, LayoutGrid, Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { journal } from "../data";
import "./JournalIndex.css";

const SORTS = [
  { key: "All Posts", icon: LayoutGrid },
  { key: "Quick Reads", icon: Zap },
  { key: "Long Reads", icon: BookOpen },
];

const TAG_STYLES = {
  "Editor's Pick": "rose",
  "Field Notes": "sky",
  Almanac: "amber",
};

function readMinutes(readTime) {
  const n = parseInt(readTime, 10);
  return Number.isNaN(n) ? 0 : n;
}

export default function JournalIndex() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("All Posts");

  const posts = useMemo(() => {
    let list = journal.filter((j) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        j.title.toLowerCase().includes(q) ||
        j.excerpt.toLowerCase().includes(q) ||
        j.tag.toLowerCase().includes(q)
      );
    });
    if (sort === "Quick Reads") {
      list = [...list].sort((a, b) => readMinutes(a.readTime) - readMinutes(b.readTime));
    } else if (sort === "Long Reads") {
      list = [...list].sort((a, b) => readMinutes(b.readTime) - readMinutes(a.readTime));
    }
    return list;
  }, [query, sort]);

  return (
    <section className="section journal-index">
      <div className="wrap">
        <div className="journal-index__head">
          <h1>The Journal</h1>
          <p>Stories, field notes and planning guides from the road — written by the trip designers and guides who live where they work.</p>
        </div>

        <div className="journal-index__controls">
          <span className="journal-index__search-label">Search</span>
          <form className="journal-index__search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search posts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search articles"
            />
            <button type="submit">
              <Search size={15} strokeWidth={1.75} /> Search
            </button>
          </form>

          <div className="journal-index__tabs">
            {SORTS.map(({ key, icon: Icon }) => (
              <button
                key={key}
                className={`journal-index__tab ${sort === key ? "is-active" : ""}`}
                onClick={() => setSort(key)}
              >
                <Icon size={13} strokeWidth={1.75} /> {key}
              </button>
            ))}
          </div>
        </div>

        <div className="journal-index__divider">
          <span>Explore All Stories</span>
        </div>

        {posts.length === 0 ? (
          <p className="journal-index__empty">No articles match that search — try a different term.</p>
        ) : (
          <div className="journal-index__grid">
            {posts.map((j) => (
              <Link to={`/journal/${j.slug}`} className="journal-index__card" key={j.slug}>
                <div className="journal-index__cover">
                  <img src={j.cover} alt={j.title} loading="lazy" />
                  <span className="journal-index__badge">
                    <Clock size={11} strokeWidth={1.75} /> {j.readTime}
                  </span>
                </div>
                <div className="journal-index__body">
                  <span className={`journal-index__tagpill journal-index__tagpill--${TAG_STYLES[j.tag] || "sand"}`}>
                    {j.tag}
                  </span>
                  <span className="journal-index__date">{j.date}</span>
                  <h3>{j.title}</h3>
                  <blockquote>{j.pullQuote}</blockquote>
                  <p>{j.excerpt}</p>
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
