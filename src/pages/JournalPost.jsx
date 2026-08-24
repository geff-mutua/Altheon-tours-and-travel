import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { journal } from "../data";
import "./JournalPost.css";

export default function JournalPost() {
  const { slug } = useParams();
  const post = journal.find((j) => j.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/journal" replace />;

  const related = journal.filter((j) => post.related.includes(j.slug));

  return (
    <article className="journal-post">
      <div className="journal-post__hero">
        <img src={post.cover} alt={post.title} />
        <div className="journal-post__scrim" />
        <div className="wrap journal-post__hero-content">
          <Link to="/journal" className="journal-post__back">
            <ArrowLeft size={14} strokeWidth={1.5} /> Back to Journal
          </Link>
          <span className="journal-post__tag">{post.tag}</span>
          <h1>{post.title}</h1>
          <div className="journal-post__meta">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.authorRole}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="wrap journal-post__wrap">
        <div className="journal-post__body">
          <blockquote className="journal-post__pullquote">{post.pullQuote}</blockquote>

          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {post.inline && (
            <figure className="journal-post__inline">
              <img src={post.inline} alt={`${post.title} — field photograph`} loading="lazy" />
            </figure>
          )}

          <div className="journal-post__cta">
            <h3>Want a journey like this one?</h3>
            <p>Every article on our Journal started as a trip we designed. We can build you the next one.</p>
            <Link to="/plan-your-journey" className="btn btn-solid">
              Start Planning <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="section journal-post__related">
          <div className="wrap">
            <span className="eyebrow">Keep Reading</span>
            <h2>More from the Journal</h2>
            <div className="journal-post__related-grid">
              {related.map((r) => (
                <Link to={`/journal/${r.slug}`} className="journal-post__related-card" key={r.slug}>
                  <div className="journal-post__related-cover">
                    <img src={r.cover} alt={r.title} loading="lazy" />
                  </div>
                  <span className="journal-post__tag journal-post__tag--inline">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <p>{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
