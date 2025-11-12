"use client";

import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    tag: "Manufacturing Unit",
    title: "Powerlooms in motion, weaving signature Nemawari sarees.",
    description:
      "From spool to stunning drape, every weave is inspected for the impeccable fall and finish retailers expect from Surat.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80"
  },
  {
    tag: "Showroom Experience",
    title: "Showcases lined with trending kurtis, blouses, and petticoats.",
    description:
      "Curated shelves highlight coordinated sets so your customers find their perfect pairing in minutes.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80"
  },
  {
    tag: "Festive Collection",
    title: "Georgette glimmer, silk sheen, and luxe net detailing.",
    description:
      "Ready-to-ship edits for wedding, festive, and party wear racks with rich zari, sequin, and gota patti work.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1600&q=80"
  },
  {
    tag: "Wholesale Advantage",
    title: "Fresh drops weekly, bulk pricing starting ₹100.",
    description:
      "Unlock ready inventory, stitched coordination, and dispatch support trusted by boutiques across India.",
    image:
      "https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?auto=format&fit=crop&w=1600&q=80"
  }
];

const productSpotlights = [
  {
    name: "Sarees",
    focus: "Daily wear to designer couture",
    fabrics: "Cotton | Georgette | Silk | Net",
    notes:
      "Handpicked palettes with blouse pairing suggestions and intricate work options for premium upsell.",
    image:
      "https://images.unsplash.com/photo-1611854779394-de4ce0b4e685?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Kurtis",
    focus: "Smart casual, office, and festive kurtis",
    fabrics: "Rayon | Cotton | Muslin | Luxe blends",
    notes:
      "Ready-to-wear silhouettes across A-line, Anarkali, and straight cuts with coordinated bottoms on request.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Matching Blouses",
    focus: "Stitched and semi-stitched options",
    fabrics: "Silk | Brocade | Velvet | Net",
    notes:
      "Neckline variations, padded comfort, and bespoke embellishments to complete every saree story.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Petticoats (Patikot)",
    focus: "Perfect flare, color-matched finish",
    fabrics: "Mercerised Cotton | Lycra | Satin",
    notes:
      "Extensive shade card, adjustable fits, and breathable fabrics crafted for all-day grace.",
    image:
      "https://images.unsplash.com/photo-1521572163475-b0c5f35199c5?auto=format&fit=crop&w=1200&q=80"
  }
];

const fabricHighlights = [
  {
    title: "Cotton Collection",
    body: "Pin-tuck khadi, embroidered mulmul, and printed Mal cotton drapes that breathe easy in every climate."
  },
  {
    title: "Georgette Stories",
    body: "Flowy half-and-half sarees with shimmer borders, pleated kurtis, and dupattas designed for light, effortless glamour."
  },
  {
    title: "Silk Heritage",
    body: "Banarasi-inspired motifs, Kanjivaram textures, and lustrous tissue silks enriched with artisanal zari craftsmanship."
  },
  {
    title: "Net Couture",
    body: "Crystal work party wear sarees, cape blouses, and layered gowns built for contemporary bridal trousseau edits."
  }
];

const teamClips = [
  {
    label: "Styling Desk",
    copy: "Our in-house stylists align blouses, dupattas, and accessories so your merchandising tells a cohesive story.",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=900&q=80"
  },
  {
    label: "Quality Check",
    copy: "Dedicated teams steam, check fall, and verify finishing before dispatch to retailers across India.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80"
  },
  {
    label: "Model Preview",
    copy: "Live fittings help boutiques visualize drape, flow, and mix-match potential for every collection drop.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
  }
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 3800);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (showIntro) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6200);

    return () => clearInterval(interval);
  }, [showIntro]);

  const narration = useMemo(
    () => [
      "Nemawari Silk Mills is Surat’s trusted manufacturer and wholesaler.",
      "Premium sarees, kurtis, blouses, and petticoats crafted for every region in India.",
      "Wholesale pricing starts from just ₹100 with fresh collections and bulk discounts.",
      "Call +91 98111 44556 or write to orders@nemawarisilkmills.com for business inquiries."
    ],
    []
  );

  return (
    <main className="page">
      <section className={`logo-sequence ${showIntro ? "visible" : "hidden"}`}>
        <div className="logo-mark">
          <div className="logo-orb" />
          <img src="/logo.svg" alt="Nemawari Silk Mills" />
        </div>
        <p className="logo-tagline">
          Crafted in Surat. Celebrated across India.
        </p>
      </section>

      <section className={`hero ${showIntro ? "delayed" : "ready"}`}>
        {slides.map((slide, index) => (
          <article
            key={slide.title}
            className={`hero-slide ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-copy">
              <span className="hero-tag">{slide.tag}</span>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </article>
        ))}
        <div className="hero-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`indicator ${index === activeIndex ? "on" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <aside className="floating-narration">
          {narration.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </aside>
      </section>

      <section className="showcase">
        <header>
          <h2>All Categories. One Trusted Manufacturer.</h2>
          <p>
            Walk through the Nemawari showroom and discover coordinated displays
            that make your wholesale buying effortless.
          </p>
        </header>
        <div className="showcase-grid">
          {productSpotlights.map((product) => (
            <article
              key={product.name}
              className="showcase-card"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="showcase-overlay" />
              <div className="showcase-content">
                <h3>{product.name}</h3>
                <p className="focus">{product.focus}</p>
                <p className="fabrics">{product.fabrics}</p>
                <p>{product.notes}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fabric-story">
        <header>
          <h2>Signature Fabric Stories</h2>
          <p>
            Curated edits spanning everyday essentials to couture statements,
            layered with embellishment choices for your clientele.
          </p>
        </header>
        <div className="fabric-grid">
          {fabricHighlights.map((highlight) => (
            <article key={highlight.title} className="fabric-card">
              <h3>{highlight.title}</h3>
              <p>{highlight.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-reel">
        <header>
          <h2>People Behind The Craft</h2>
          <p>
            A glimpse of the hands and faces ensuring every dispatch carries the
            Nemawari promise of quality, trend, and satisfaction.
          </p>
        </header>
        <div className="team-grid">
          {teamClips.map((clip) => (
            <article
              key={clip.label}
              className="team-card"
              style={{ backgroundImage: `url(${clip.image})` }}
            >
              <div className="team-overlay" />
              <div className="team-content">
                <h3>{clip.label}</h3>
                <p>{clip.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wholesale">
        <div className="wholesale-copy">
          <h2>Wholesale Solutions Tuned To Your Business</h2>
          <ul>
            <li>Ready stock across 4,000+ SKUs with replenishment support.</li>
            <li>
              Mix-and-match cartons so you can curate colorways and sizes for
              every market segment.
            </li>
            <li>
              Dedicated account managers, video walk-throughs, and dispatch
              tracking for pan-India deliveries.
            </li>
          </ul>
        </div>
        <div className="wholesale-cta">
          <h3>Place Your Next Bulk Order</h3>
          <p>
            Call <a href="tel:+919811144556">+91 98111 44556</a>
            <br />
            Email{" "}
            <a href="mailto:orders@nemawarisilkmills.com">
              orders@nemawarisilkmills.com
            </a>
          </p>
          <p className="note">
            Visit our Surat showroom by appointment for live curation sessions
            with the Nemawari team.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div>
          <img
            src="/logo.svg"
            alt="Nemawari Silk Mills Logo"
            className="footer-logo"
          />
          <p>Nemawari stands for quality, trend, and customer satisfaction.</p>
        </div>
        <div>
          <p className="footer-title">Warehousing & Dispatch</p>
          <p>GIDC Sachin, Surat, Gujarat</p>
        </div>
        <div>
          <p className="footer-title">Connect</p>
          <p>
            <a href="tel:+919811144556">+91 98111 44556</a>
            <br />
            <a href="mailto:orders@nemawarisilkmills.com">
              orders@nemawarisilkmills.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
