'use client';

import { useState } from 'react';

const PROBLEMS = [
  {
    id: 'promotion',
    label: 'Getting passed over for promotion',
    desc: 'Ready for the next level but nobody is moving me forward',
    icon: '📈',
    chapter: 'Chapter 3: Building Credibility',
    theme: 'Earning trust before you earn the title',
    action: 'Identify one executive you have never worked with and find a reason to solve a problem for them this week.',
  },
  {
    id: 'feedback',
    label: 'Not getting honest feedback',
    desc: 'People tell me what I want to hear instead of what I need to hear',
    icon: '💬',
    chapter: 'Chapter 10: Being Coachable',
    theme: 'Creating the conditions for honesty',
    action: 'Go back to the last person who gave you feedback and ask one specific follow-up question about what they observed.',
  },
  {
    id: 'difficult_boss',
    label: 'Navigating a difficult boss',
    desc: 'My leader is hard to read, hard to please, or both',
    icon: '🧭',
    chapter: 'Chapter 22: Understanding Your Boss',
    theme: 'Running a course you did not design',
    action: 'Write down three things your boss is being measured on that you have never asked about directly.',
  },
  {
    id: 'allies',
    label: 'Building better allies',
    desc: 'Working harder than the people getting recognized',
    icon: '🤝',
    chapter: 'Chapter 8: Finding Allies',
    theme: 'Building the crew that history remembers',
    action: 'Identify one person who could advocate for you in a room you are not in. Schedule coffee.',
  },
  {
    id: 'wrong_path',
    label: 'Questioning my career path',
    desc: 'Wondering if the race I am running is the right one',
    icon: '🗺️',
    chapter: 'Chapter 1: Finding Your Dream',
    theme: 'The trail reveals itself to those who keep moving',
    action: 'Write down what success looks like in five years. Is it a title or a feeling? The answer matters.',
  },
  {
    id: 'conflict',
    label: 'Repairing a damaged relationship',
    desc: 'A work relationship that has been strained for too long',
    icon: '🌱',
    chapter: 'Chapter 25: Resetting Relationships',
    theme: 'The text it takes to change everything',
    action: 'Send the message you have been putting off. You do not need a plan. You need a starting line.',
  },
  {
    id: 'team',
    label: 'Leading a team I inherited',
    desc: 'Walking into a room where the culture was set before I arrived',
    icon: '🏗️',
    chapter: 'Chapter 37: Leading a New Team',
    theme: 'The secret paintings behind the official tour',
    action: 'Ask your longest-tenured team member what the team stopped doing that it used to do well.',
  },
  {
    id: 'balance',
    label: 'Balancing work and everything else',
    desc: 'The seesaw feels impossible and the metaphor is not helping',
    icon: '⚖️',
    chapter: 'Chapter 28: Balancing Obligations',
    theme: 'Balance was never a seesaw',
    action: 'List the three obligations you feel most stressed about. Circle the ones you invented for yourself.',
  },
  {
    id: 'mentor',
    label: 'Finding the right mentor',
    desc: 'Looking for someone who tells me what I need to hear',
    icon: '🎯',
    chapter: 'Chapter 9: Finding the Right Coach',
    theme: 'Looking for terrain, not answers',
    action: 'Identify the person whose career you most want to understand. Ask them for thirty minutes and one honest question.',
  },
  {
    id: 'recovery',
    label: 'Recovering from a setback',
    desc: 'A mistake or miss that is hard to move past',
    icon: '🔄',
    chapter: 'Chapter 23: Managing Injuries',
    theme: 'Injuries that look like the end of the race',
    action: 'Write down what the setback actually cost you versus what you feared it would cost you. The gap is usually the real story.',
  },
  {
    id: 'recognition',
    label: 'Doing great work that goes unseen',
    desc: 'High performer in a room that is not watching',
    icon: '👁️',
    chapter: 'Chapter 3: Building Credibility',
    theme: 'A level playing field only helps if you are ready',
    action: 'Find the next opportunity to do something in public that you normally do in private.',
  },
  {
    id: 'courage',
    label: 'Saying the hard thing',
    desc: 'Knowing the right answer but struggling to say it',
    icon: '⚡',
    chapter: 'Chapter 8: Finding Allies',
    theme: 'The bullet that is yours to take',
    action: 'Identify the one thing you have been not saying in your current role. Decide by Friday whether you will say it.',
  },
];

export default function TrailMarkers() {
  const [selected, setSelected] = useState(new Set());
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const chosen = PROBLEMS.filter((p) => selected.has(p.id));

  const weekBlocks = () => {
    const blocks = [];
    const weeksEach = chosen.length <= 4 ? Math.floor(10 / chosen.length) : 2;
    let weekNum = 1;
    chosen.forEach((p, i) => {
      const end = weekNum + weeksEach - 1;
      blocks.push({ ...p, weekStart: weekNum, weekEnd: end, priority: i === 0 });
      weekNum = end + 1;
    });
    if (weekNum <= 12) {
      blocks.push({
        id: 'closing',
        weekStart: weekNum,
        weekEnd: 12,
        chapter: 'Your Trail Now — closing chapter',
        theme: 'The trail does not reveal itself to people who are standing still',
        action: 'Identify one person earlier in their career who needs a trail marker you already have. Leave it for them.',
        priority: false,
      });
    }
    return blocks;
  };

  const handleSubmit = async () => {
    if (!email) { setError('Please enter your email address.'); return; }
    setSubmitting(true);
    setError('');
    const chapterList = chosen.map((p) => p.chapter).join(', ');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          trailMarkers: chapterList,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'Georgia, serif', color: '#222' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: 8 }}>
          Running Your Career: Trail Markers to Your Dream
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.3, marginBottom: 12 }}>
          Find your trail markers
        </h1>
        <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>
          Select every career challenge you are facing right now. I will build you a personal 12-week reading and action plan from the book.
        </p>
      </div>

      {/* Step 1: Problem selector */}
      {step === 1 && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: '2rem' }}>
            {PROBLEMS.map((p) => (
              <button
                key={p.id}
                onClick={() => toggle(p.id)}
                style={{
                  background: selected.has(p.id) ? '#f0f7ff' : '#fff',
                  border: selected.has(p.id) ? '2px solid #2563eb' : '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: selected.has(p.id) ? '#1d4ed8' : '#111', marginBottom: 4, lineHeight: 1.4 }}>
                  {p.label}
                </div>
                <div style={{ fontSize: 12, color: '#888', lineHeight: 1.4 }}>{p.desc}</div>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              onClick={() => setStep(2)}
              disabled={selected.size === 0}
              style={{
                background: selected.size > 0 ? '#1d4ed8' : '#e5e7eb',
                color: selected.size > 0 ? '#fff' : '#999',
                border: 'none',
                borderRadius: 8,
                padding: '12px 28px',
                fontSize: 15,
                fontWeight: 600,
                cursor: selected.size > 0 ? 'pointer' : 'not-allowed',
                transition: 'all 0.15s',
              }}
            >
              Build my training plan →
            </button>
            <span style={{ fontSize: 13, color: '#888' }}>
              {selected.size === 0 ? 'Select at least one challenge' : `${selected.size} selected`}
            </span>
          </div>
        </>
      )}

      {/* Step 2: Training plan */}
      {step === 2 && !submitted && (
        <>
          <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', marginBottom: 4 }}>Your personal trail</p>
            <p style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 2 }}>12-week career training plan</p>
            <p style={{ fontSize: 13, color: '#666' }}>
              {chosen.length} trail marker{chosen.length !== 1 ? 's' : ''} · Starting this week · Based on your selections
            </p>
          </div>

          {weekBlocks().map((block, i) => (
            <div
              key={block.id}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '1rem 1.25rem',
                marginBottom: 10,
                background: '#fff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Week {block.weekStart}{block.weekEnd > block.weekStart ? `–${block.weekEnd}` : ''}
                </span>
                {block.priority && (
                  <span style={{ background: '#fef3c7', color: '#92400e', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20 }}>
                    Start here
                  </span>
                )}
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 3 }}>{block.chapter}</p>
              <p style={{ fontSize: 13, color: '#666', marginBottom: 10, fontStyle: 'italic' }}>{block.theme}</p>
              <div style={{ background: '#f0f7ff', borderLeft: '3px solid #2563eb', borderRadius: '0 6px 6px 0', padding: '8px 12px', fontSize: 12, color: '#374151', lineHeight: 1.6 }}>
                <strong>This week:</strong> {block.action}
              </div>
            </div>
          ))}

          {/* Email capture */}
          <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', marginTop: '1.5rem' }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>Send this plan to your inbox</p>
            <p style={{ fontSize: 13, color: '#666', marginBottom: 16, lineHeight: 1.6 }}>
              I will email you your personalized plan plus a note on where to start. No spam. Just trail markers.
            </p>
            <input
              type="text"
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 14, marginBottom: 10, fontFamily: 'Georgia, serif' }}
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 14, marginBottom: 12, fontFamily: 'Georgia, serif' }}
            />
            {error && <p style={{ color: '#dc2626', fontSize: 13, marginBottom: 10 }}>{error}</p>}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{ background: '#1d4ed8', color: '#fff', border: 'none', borderRadius: 8, padding: '11px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
              >
                {submitting ? 'Sending...' : 'Send my plan →'}
              </button>
              <button
                onClick={() => setStep(1)}
                style={{ background: 'transparent', border: '1px solid #d1d5db', borderRadius: 8, padding: '11px 18px', fontSize: 14, color: '#666', cursor: 'pointer' }}
              >
                Start over
              </button>
            </div>
          </div>
        </>
      )}

      {/* Success state */}
      {submitted && (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏁</div>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Your plan is on its way</h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 1.5rem' }}>
            Check your inbox for your 12-week career training plan. The trail does not reveal itself to people who are standing still.
          </p>
          <button
            onClick={() => { setStep(1); setSelected(new Set()); setSubmitted(false); setEmail(''); setName(''); }}
            style={{ background: 'transparent', border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 20px', fontSize: 14, color: '#666', cursor: 'pointer' }}
          >
            Start over
          </button>
        </div>
      )}

    </main>
  );
}
