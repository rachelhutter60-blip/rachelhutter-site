'use client';

import { useState } from 'react';

const TEAL = '#1a7268';
const TEAL_DARK = '#145a51';
const TEAL_LIGHT = '#e8f4f2';
const WHITE = '#ffffff';
const DARK = '#1a2e2b';

const panels = [
  {
    id: 'cover',
    label: 'About Rachel',
  },
  {
    id: 'keynote',
    label: 'Signature Keynote',
  },
  {
    id: 'takeaways',
    label: 'Keynote Takeaways',
  },
];

export default function Speaking() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animating, setAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (idx === active || animating) return;
    setDirection(idx > active ? 'right' : 'left');
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 300);
  };

  const next = () => goTo(Math.min(active + 1, panels.length - 1));
  const prev = () => goTo(Math.max(active - 1, 0));

  return (
    <main style={{ fontFamily: 'Georgia, serif', background: TEAL_LIGHT, minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: TEAL, padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ color: WHITE, textDecoration: 'none', fontSize: 14, opacity: 0.8 }}>← Back to Home</a>
        <div style={{ color: WHITE, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Speaking</div>
        <div style={{ width: 100 }} />
      </div>

      {/* Tab navigation */}
      <div style={{ background: TEAL_DARK, display: 'flex', justifyContent: 'center', gap: 0 }}>
        {panels.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            style={{
              background: i === active ? WHITE : 'transparent',
              color: i === active ? TEAL : 'rgba(255,255,255,0.7)',
              border: 'none',
              padding: '12px 28px',
              fontSize: 13,
              fontFamily: 'Georgia, serif',
              fontWeight: i === active ? 600 : 400,
              cursor: 'pointer',
              letterSpacing: '0.05em',
              transition: 'all 0.2s',
              borderTop: i === active ? `3px solid ${TEAL}` : '3px solid transparent',
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Panel container */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1.5rem' }}>

        <div style={{
          opacity: animating ? 0 : 1,
          transform: animating ? `translateX(${direction === 'right' ? '20px' : '-20px'})` : 'translateX(0)',
          transition: 'opacity 0.3s, transform 0.3s',
        }}>

          {/* ── PANEL 1: COVER / BIO ─────────────────────────── */}
          {active === 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>

              {/* Left: Photo + Bio */}
              <div style={{ background: TEAL, borderRadius: 16, padding: '2rem', color: WHITE }}>
                <div style={{
                  width: 180, height: 180, borderRadius: '50%', overflow: 'hidden',
                  margin: '0 auto 1.5rem', border: '4px solid rgba(255,255,255,0.3)'
                }}>
                  <img
                    src="/Rachel_Hutter_Headshot-2.jpeg"
                    alt="Rachel Hutter keynote speaker"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 6 }}>BIO</div>
                  <div style={{ width: 40, height: 2, background: 'rgba(255,255,255,0.5)', margin: '0 auto 16px' }} />
                </div>

                <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.95, marginBottom: 16 }}>
                  Rachel Hutter is a former Executive Vice President of Studio Operations for Walt Disney Studios and a respected leader known for transforming complex organizations through strategic change, operational excellence, and people-first leadership.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.95 }}>
                  Over nearly three decades with The Walt Disney Company, Rachel led large-scale operational initiatives across Disney Parks, Disney Experiences, and Walt Disney Studios. Her career spans engineering, technology implementation, safety innovation, executive leadership, and organizational transformation.
                </p>
              </div>

              {/* Right: Tagline + Contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Tagline card */}
                <div style={{ background: WHITE, borderRadius: 16, padding: '2rem', textAlign: 'center', border: `1px solid ${TEAL}20` }}>
                  <p style={{ fontSize: 20, lineHeight: 1.5, color: TEAL, fontStyle: 'italic', fontWeight: 600 }}>
                    &ldquo;The Disney executive who teaches leaders how to navigate change without sacrificing trust, culture, or performance.&rdquo;
                  </p>
                </div>

                {/* Name plate */}
                <div style={{ background: WHITE, borderRadius: 16, padding: '2rem', textAlign: 'center', border: `1px solid ${TEAL}20` }}>
                  <h1 style={{ fontSize: 36, fontWeight: 700, color: TEAL, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.1 }}>
                    RACHEL<br />HUTTER
                  </h1>
                  <div style={{ width: 40, height: 2, background: TEAL, margin: '12px auto' }} />
                  <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555' }}>
                    A Disney Leader&rsquo;s Blueprint for Navigating Change
                  </p>
                </div>

                {/* Contact card */}
                <div style={{ background: TEAL, borderRadius: 16, padding: '1.75rem', color: WHITE, textAlign: 'center' }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 6 }}>CONTACT</div>
                  <div style={{ width: 40, height: 2, background: 'rgba(255,255,255,0.4)', margin: '0 auto 20px' }} />

                  <p style={{ fontSize: 13, opacity: 0.85, marginBottom: 20 }}>
                    For booking inquiries, please contact Rachel directly.
                  </p>

                  <a href="tel:3213545866" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: WHITE, textDecoration: 'none', marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: TEAL_DARK, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📞</div>
                    <span style={{ fontSize: 15, fontWeight: 600 }}>321-354-5866</span>
                  </a>

                  <a href="mailto:rachelhutter60@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: WHITE, textDecoration: 'none', marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: TEAL_DARK, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✉️</div>
                    <span style={{ fontSize: 14 }}>rachelhutter60@gmail.com</span>
                  </a>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 16 }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 8 }}>🎤 SEE RACHEL SPEAK</div>
                    <a
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: WHITE, fontSize: 13, opacity: 0.9 }}
                    >
                      View SWE National Conference Keynote →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ── PANEL 2: KEYNOTE ─────────────────────────────── */}
          {active === 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>

              {/* Left: Keynote details */}
              <div>
                <div style={{ background: WHITE, borderRadius: 16, padding: '2rem', marginBottom: 20, border: `1px solid ${TEAL}20` }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEAL, marginBottom: 6 }}>SIGNATURE KEYNOTE</div>
                  <div style={{ width: 40, height: 2, background: TEAL, marginBottom: 20 }} />

                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                      👟
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: TEAL, letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                        IT&rsquo;S NOT A SPRINT,<br />BUT IT&rsquo;S NOT A MARATHON EITHER
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 14, lineHeight: 1.7, color: DARK, marginBottom: 16 }}>
                    Change initiatives are more critical than ever, yet employees are less willing to drive change.
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: DARK, marginBottom: 20 }}>
                    Rachel will help you learn how to make them successful by sharing:
                  </p>

                  {[
                    'How to plan the right course',
                    'How to train your teams',
                    'The best fuel for endurance',
                    'How to prevent burnout',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: TEAL, marginTop: 6, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: DARK }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Why audiences love Rachel */}
                <div style={{ background: TEAL, borderRadius: 16, padding: '2rem', color: WHITE }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 6, textAlign: 'center' }}>WHY AUDIENCES LOVE RACHEL</div>
                  <div style={{ width: 40, height: 2, background: 'rgba(255,255,255,0.4)', margin: '0 auto 20px' }} />

                  {[
                    'Authentic leadership',
                    'Real-world lessons',
                    'Actionable tools',
                    'Disney standard of excellence',
                  ].map((item) => (
                    <div key={item} style={{ textAlign: 'center', fontSize: 15, opacity: 0.9, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Photos + storytelling text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ borderRadius: 16, overflow: 'hidden', height: 280 }}>
                  <img
                    src="/Hutter SWE Keynote Landscape.jpg"
                    alt="Rachel Hutter speaking"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.parentElement!.style.background = TEAL;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                <div style={{ background: TEAL, borderRadius: 16, padding: '1.75rem', color: WHITE }}>
                  <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 12, fontStyle: 'italic', fontWeight: 600 }}>
                    Known for her authentic storytelling&hellip;
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.92 }}>
                    &hellip;and practical leadership approach, Rachel combines lessons learned from Disney with real-world experience leading teams through uncertainty, disruption, and rapid change.
                  </p>
                </div>

                <div style={{ borderRadius: 16, overflow: 'hidden', height: 160 }}>
                  <img
                    src="/Hutter SWE Keynote Pano.jpg"
                    alt="Rachel Hutter keynote audience"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.parentElement!.style.background = TEAL_DARK;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── PANEL 3: TAKEAWAYS ───────────────────────────── */}
          {active === 2 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

              {/* Left: Takeaways */}
              <div style={{ background: WHITE, borderRadius: 16, padding: '2rem', border: `1px solid ${TEAL}20` }}>
                <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEAL, marginBottom: 6 }}>KEYNOTE TAKEAWAYS</div>
                <div style={{ width: 40, height: 2, background: TEAL, marginBottom: 24 }} />

                {[
                  {
                    title: 'Create realistic, sustainable change initiatives',
                    body: 'Develop practical plans that drive results without overwhelming teams.',
                  },
                  {
                    title: 'Increase employee engagement and buy-in',
                    body: 'Understand why people resist change and how to turn skeptics into advocates.',
                  },
                  {
                    title: 'Prevent burnout before it begins',
                    body: 'Recognize the warning signs of fatigue and create systems that support long-term performance.',
                  },
                  {
                    title: 'Coach teams through difficult transitions',
                    body: 'Move beyond motivation and equip employees with the tools they need to succeed.',
                  },
                  {
                    title: 'Provide the right support at the right time',
                    body: 'Learn how great leaders fuel their teams during the most demanding stages of change.',
                  },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: 14, marginBottom: 22 }}>
                    <div style={{ color: TEAL, fontSize: 20, flexShrink: 0, marginTop: 2 }}>✓</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{item.body}</div>
                    </div>
                  </div>
                ))}

                <p style={{ fontSize: 13, color: TEAL, fontStyle: 'italic', textAlign: 'center', marginTop: 8 }}>
                  &hellip;and so much more!
                </p>
              </div>

              {/* Right: CTA + photo */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                <div style={{ background: TEAL, borderRadius: 16, padding: '2rem', color: WHITE, textAlign: 'center' }}>
                  <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, letterSpacing: '0.05em' }}>
                    BOOK RACHEL
                  </h2>
                  <div style={{ width: 40, height: 2, background: 'rgba(255,255,255,0.4)', margin: '0 auto 16px' }} />
                  <p style={{ fontSize: 14, opacity: 0.9, lineHeight: 1.7, marginBottom: 24 }}>
                    Ready to bring Disney-caliber leadership insights to your next event? Rachel is available for keynotes, workshops, and executive sessions.
                  </p>
                  <a
                    href="mailto:rachelhutter60@gmail.com?subject=Speaking Inquiry"
                    style={{
                      display: 'inline-block',
                      background: WHITE,
                      color: TEAL,
                      textDecoration: 'none',
                      padding: '12px 28px',
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      marginBottom: 16,
                    }}
                  >
                    Email Rachel →
                  </a>
                  <div style={{ fontSize: 13, opacity: 0.8 }}>or call 321-354-5866</div>
                </div>

                <div style={{ background: WHITE, borderRadius: 16, padding: '1.75rem', border: `1px solid ${TEAL}20` }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: TEAL, marginBottom: 12 }}>ALSO BY RACHEL</div>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{ width: 48, height: 64, background: TEAL, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
                      📖
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: DARK, marginBottom: 4 }}>
                        Running Your Career: Trail Markers to Your Dream
                      </div>
                      <div style={{ fontSize: 12, color: '#666', lineHeight: 1.5 }}>
                        A leadership book where each chapter is a trail marker for a specific career challenge.
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minHeight: 200 }}>
                  <img
                    src="/Hutter SWE keynote crowd.jpg"
                    alt="Rachel Hutter audience"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.parentElement!.style.background = TEAL_DARK;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Navigation arrows */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
          <button
            onClick={prev}
            disabled={active === 0}
            style={{
              background: active === 0 ? '#ccc' : TEAL,
              color: WHITE,
              border: 'none',
              borderRadius: 8,
              padding: '10px 24px',
              fontSize: 14,
              cursor: active === 0 ? 'not-allowed' : 'pointer',
              fontFamily: 'Georgia, serif',
            }}
          >
            ← Previous
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 8 }}>
            {panels.map((_, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === active ? TEAL : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={active === panels.length - 1}
            style={{
              background: active === panels.length - 1 ? '#ccc' : TEAL,
              color: WHITE,
              border: 'none',
              borderRadius: 8,
              padding: '10px 24px',
              fontSize: 14,
              cursor: active === panels.length - 1 ? 'not-allowed' : 'pointer',
              fontFamily: 'Georgia, serif',
            }}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Footer strip */}
      <div style={{ background: TEAL_DARK, padding: '1rem 2rem', marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>rachelhutter.com</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="/trail-markers" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, textDecoration: 'none' }}>Find Your Trail Markers</a>
          <a href="/survey" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, textDecoration: 'none' }}>Leadership Survey</a>
        </div>
      </div>
    </main>
  );
}
