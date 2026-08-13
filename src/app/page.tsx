import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rachel Hutter, PE, CSP — Keynote Speaker & Leadership Author',
  description:
    'Former Disney EVP Rachel Hutter helps leaders navigate change without sacrificing trust, culture, or performance. Book Rachel to speak at your next event.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-inter, sans-serif)' }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'white', borderBottom: '1px solid #e5e7eb',
        padding: '0 2rem', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 20, fontWeight: 700, color: '#1a7268' }}>
          Rachel Hutter
        </span>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {[
            { label: 'Speaking', href: '/speaking' },
            { label: 'Trail Markers', href: '/trail-markers' },
            { label: 'Leadership Survey', href: '/survey' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 14, color: '#374151', textDecoration: 'none',
                padding: '6px 14px', borderRadius: 6,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/speaking"
            style={{
              fontSize: 14, fontWeight: 600, color: 'white',
              padding: '6px 18px', borderRadius: 6,
              backgroundColor: '#1a7268', textDecoration: 'none',
            }}
          >
            Book Rachel
          </Link>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section style={{ background: '#1a7268', color: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 16 }}>
              Keynote Speaker · Leadership Author
            </p>
            <h1 style={{
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700, lineHeight: 1.2, marginBottom: 20,
            }}>
              Navigate change without losing what matters most.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.8, opacity: 0.9, marginBottom: 32 }}>
              The Disney executive who teaches leaders how to navigate change without sacrificing trust, culture, or performance.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link
                href="/speaking"
                style={{
                  display: 'inline-block', backgroundColor: 'white', color: '#1a7268',
                  fontWeight: 700, fontSize: 15, padding: '12px 28px',
                  borderRadius: 8, textDecoration: 'none',
                }}
              >
                Book Rachel to Speak
              </Link>
              <Link
                href="/trail-markers"
                style={{
                  display: 'inline-block',
                  border: '2px solid rgba(255,255,255,0.6)', color: 'white',
                  fontWeight: 600, fontSize: 15, padding: '12px 28px',
                  borderRadius: 8, textDecoration: 'none',
                }}
              >
                Find your trail markers
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 300, height: 360, borderRadius: 16, overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.25)',
            }}>
              <Image
                src="/Rachel Hutter Headshot-2.jpeg"
                alt="Rachel Hutter keynote speaker"
                width={300}
                height={360}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ───────────────────────────────── */}
      <section style={{ background: '#f8faf9', borderBottom: '1px solid #e5e7eb', padding: '1.5rem 2rem' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'flex', gap: '2rem', flexWrap: 'wrap',
          justifyContent: 'center', alignItems: 'center',
        }}>
          {[
            { label: '29 years', sub: 'at The Walt Disney Company' },
            { label: '14 roles', sub: 'from engineer to EVP' },
            { label: 'PE & CSP', sub: 'Licensed & certified' },
            { label: '50 Women to Watch', sub: '50/50 Women on Boards 2026' },
            { label: '38 states', sub: 'and counting' },
          ].map((c) => (
            <div key={c.label} style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#1a7268' }}>{c.label}</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ borderRadius: 16, overflow: 'hidden' }}>
            <Image
              src="/Hutter SWE Keynote Landscape.jpg"
              alt="Rachel Hutter speaking on stage"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a7268', marginBottom: 12 }}>
              About Rachel
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, color: '#111', lineHeight: 1.3, marginBottom: 20,
            }}>
              Twenty-nine years. Fourteen roles. One trail.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 16 }}>
              Rachel Hutter spent nearly three decades at The Walt Disney Company, rising from engineer to Executive Vice President of Studio Operations — overseeing Marvel, Pixar, Lucasfilm, Disney Animation, Disney Live Action, and 20th Century Studios.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 28 }}>
              She led Disney&apos;s pandemic response, designed the protocols that kept the NBA bubble infection-free, and governed $2B in global sourcing. She discovered that her best leadership insights came not in conference rooms, but on the trail.
            </p>
            <Link
              href="/speaking"
              style={{
                display: 'inline-block', backgroundColor: '#1a7268', color: 'white',
                fontWeight: 600, fontSize: 14, padding: '11px 24px',
                borderRadius: 8, textDecoration: 'none',
              }}
            >
              Book Rachel to Speak →
            </Link>
          </div>
        </div>
      </section>

      {/* ── KEYNOTE ─────────────────────────────────────────── */}
      <section style={{ background: '#f8faf9', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a7268', marginBottom: 12 }}>
              Signature Keynote
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, color: '#111', lineHeight: 1.3, marginBottom: 16,
            }}>
              It&apos;s Not a Sprint, But It&apos;s Not a Marathon Either
            </h2>
            <p style={{ fontSize: 16, color: '#374151', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
              Change initiatives are more critical than ever, yet employees are less willing to drive them. Rachel teaches leaders how to make change initiatives successful — and sustainable.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: '2.5rem' }}>
            {[
              { icon: '🗺️', title: 'Plan the right course', body: 'Design change initiatives that teams can actually follow.' },
              { icon: '🏃', title: 'Train your teams', body: 'Build the muscle for change before the race begins.' },
              { icon: '⚡', title: 'Fuel for endurance', body: 'Keep people energized through the hardest miles.' },
              { icon: '🛡️', title: 'Prevent burnout', body: 'Recognize the warning signs before they become crises.' },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'white', borderRadius: 12, padding: '1.5rem',
                border: '1px solid #e5e7eb',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link
              href="/speaking"
              style={{
                display: 'inline-block', backgroundColor: '#1a7268', color: 'white',
                fontWeight: 600, fontSize: 14, padding: '11px 28px',
                borderRadius: 8, textDecoration: 'none',
              }}
            >
              See full keynote details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHOTOS ──────────────────────────────────────────── */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', height: 360 }}>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/Hutter SWE Keynote Pano.jpg"
              alt="Rachel Hutter keynote audience"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
            />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/Hutter SWE Keynote crowd.jpg"
              alt="Rachel Hutter speaking"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section style={{ background: '#1a7268', padding: '5rem 2rem', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 12 }}>
              What leaders say
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2rem)',
              fontWeight: 700, lineHeight: 1.3,
            }}>
              The trail markers that changed how I lead.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              {
                quote: 'Rachel taught me courage over comfort. There is no courage without vulnerability, and I appreciate how she authentically shares her hurdles in life and in her career with the intent for me to learn and grow.',
                name: 'Angel Price',
                title: 'Disney Executive',
              },
              {
                quote: 'The day I gave up small fights is the day I became successful.',
                name: 'Angel Price',
                title: 'Disney Executive',
              },
              {
                quote: '"I can run longer than you can stand." This line stopped me cold. Rachel does not just share leadership lessons. She lives them.',
                name: 'Early reader',
                title: 'Running Your Career',
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.1)', borderRadius: 12,
                padding: '1.75rem', border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <p style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.95, marginBottom: 20, fontStyle: 'italic' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16, fontWeight: 700,
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAIL MARKERS ───────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a7268', marginBottom: 12 }}>
              From the book
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair, serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, color: '#111', lineHeight: 1.3, marginBottom: 20,
            }}>
              Find the trail markers you need right now.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 16 }}>
              Each chapter of <em>Running Your Career: Trail Markers to Your Dream</em> is labeled for a specific career challenge. Select the ones you are facing and get a personalized 12-week reading and action plan.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#6b7280', marginBottom: 28, fontStyle: 'italic' }}>
              The trail does not reveal itself to people who are standing still.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link
                href="/trail-markers"
                style={{
                  display: 'inline-block', backgroundColor: '#1a7268', color: 'white',
                  fontWeight: 600, fontSize: 14, padding: '11px 24px',
                  borderRadius: 8, textDecoration: 'none',
                }}
              >
                Find your trail markers →
              </Link>
              <Link
                href="/survey"
                style={{
                  display: 'inline-block',
                  border: '1.5px solid #1a7268', color: '#1a7268',
                  fontWeight: 600, fontSize: 14, padding: '11px 24px',
                  borderRadius: 8, textDecoration: 'none',
                }}
              >
                Take the leadership survey →
              </Link>
            </div>
          </div>
          <div style={{ background: '#f8faf9', borderRadius: 16, padding: '2rem', border: '1px solid #e5e7eb' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#1a7268', marginBottom: 16 }}>
              Common trail markers
            </div>
            {[
              'Getting passed over for promotion',
              'Navigating a difficult boss',
              'Building better allies',
              'Recovering from a setback',
              'Leading a team I inherited',
              'Saying the hard thing',
            ].map((item) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 0', borderBottom: '1px solid #e5e7eb',
                fontSize: 14, color: '#374151',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a7268', flexShrink: 0 }} />
                {item}
              </div>
            ))}
            <Link
              href="/trail-markers"
              style={{
                display: 'block', textAlign: 'center', marginTop: 20,
                fontSize: 13, color: '#1a7268', fontWeight: 600, textDecoration: 'none',
              }}
            >
              See all trail markers →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOOK CTA ────────────────────────────────────────── */}
      <section style={{ background: '#f8faf9', padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a7268', marginBottom: 12 }}>
            Coming soon
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair, serif)',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700, color: '#111', lineHeight: 1.3, marginBottom: 16,
          }}>
            Running Your Career:<br />Trail Markers to Your Dream
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
            A leadership book where each chapter is a trail marker for a specific career challenge. Written for anyone who wants to run a career worth working hard for — runner or not.
          </p>
          <Link
            href="/trail-markers"
            style={{
              display: 'inline-block', backgroundColor: '#1a7268', color: 'white',
              fontWeight: 600, fontSize: 15, padding: '13px 32px',
              borderRadius: 8, textDecoration: 'none',
            }}
          >
            Get your personalized reading plan →
          </Link>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: '#145a51', color: 'white', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-playfair, serif)', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
              Rachel Hutter
            </div>
            <p style={{ fontSize: 13, opacity: 0.75, lineHeight: 1.7, marginBottom: 16 }}>
              Former Disney EVP. Keynote speaker. Leadership author. Running all 50 states.
            </p>
            <a
              href="https://www.linkedin.com/in/rachel-hutter60"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, textDecoration: 'none' }}
            >
              LinkedIn →
            </a>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: 16 }}>
              Quick links
            </div>
            {[
              { label: 'Book Rachel to Speak', href: '/speaking' },
              { label: 'Find your trail markers', href: '/trail-markers' },
              { label: 'Leadership survey', href: '/survey' },
            ].map((l) => (
              <div key={l.href} style={{ marginBottom: 10 }}>
                <Link href={l.href} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none' }}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: 16 }}>
              Contact
            </div>
            <a href="mailto:rachelhutter60@gmail.com" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none', display: 'block', marginBottom: 8 }}>
              rachelhutter60@gmail.com
            </a>
            <a href="tel:3213545866" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none', display: 'block', marginBottom: 16 }}>
              321-354-5866
            </a>
            <a
              href="https://www.youtube.com/watch?v=cQCd8eaeSeo&t=3420s"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, textDecoration: 'none' }}
            >
              Watch Rachel speak →
            </a>
          </div>
        </div>
        <div style={{ maxWidth: 900, margin: '2rem auto 0', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 20, fontSize: 12, opacity: 0.5, textAlign: 'center' }}>
          © {new Date().getFullYear()} Rachel S. Hutter, PE, CSP · rachelhutter.com
        </div>
      </footer>

    </div>
  );
}