'use client';

import { useState } from 'react';

const QUESTIONS = [
  {
    id: 1,
    title: 'How much do you want your leader to intervene when your team faces a challenge?',
    a: { label: 'Extreme A', name: 'Swoop In, Save the Day', desc: 'Leader jumps in to fix issues, even when the team just wants guidance; team feels undermined or ignored' },
    b: { label: 'Extreme B', name: 'Absent, Assume, Repeat', desc: 'Leader leaves the team to figure it out entirely; priorities unclear; mistakes multiply' },
  },
  {
    id: 2,
    title: 'How do you prefer your leader to make decisions under pressure?',
    a: { label: 'Extreme A', name: 'Fire, Ready, Aim', desc: 'Moves fast but risks mistakes' },
    b: { label: 'Extreme B', name: 'Ready, Ready, Ready…', desc: 'Delayed action; opportunities missed; team hesitates' },
  },
  {
    id: 3,
    title: 'How should your leader balance intuition with analysis?',
    a: { label: 'Extreme A', name: 'Trust Instincts, Pick Favorites', desc: 'Quick decisions but biased; team unsure why some are favored' },
    b: { label: 'Extreme B', name: 'Learned from Books, Paralysis by Analysis', desc: 'Knowledgeable but overthinks; slow action frustrates team' },
  },
  {
    id: 4,
    title: 'How should your leader navigate organizational politics?',
    a: { label: 'Extreme A', name: 'Network, Negotiate, Maneuver', desc: 'Perceived favoritism; hidden agendas; collaboration erodes' },
    b: { label: 'Extreme B', name: 'Ignore, Hope, Wait', desc: 'Team blindsided by politics; alignment and opportunities missed' },
  },
  {
    id: 5,
    title: 'How should your leader manage information sharing?',
    a: { label: 'Extreme A', name: 'Tell All, Filter None', desc: 'Info overload; team distracted; hard to focus' },
    b: { label: 'Extreme B', name: 'Know Everything, Share Nothing', desc: 'Team stalls, duplicates work, decisions delayed' },
  },
  {
    id: 6,
    title: 'How vocal should your leader be in meetings and discussions?',
    a: { label: 'Extreme A', name: 'Speak Up, Speak Over', desc: 'Ideas dominate; others hesitate; subtle issues ignored' },
    b: { label: 'Extreme B', name: 'Whisper, Wonder, Wait', desc: 'Team unsure of priorities; delayed action; missed alignment' },
  },
  {
    id: 7,
    title: 'How should your leader balance process and outcomes?',
    a: { label: 'Extreme A', name: 'Follow Steps, Forget Goals', desc: 'Rules over results; slow innovation' },
    b: { label: 'Extreme B', name: 'Wing It, Cross Fingers', desc: 'Chaotic execution; risks missed; inconsistent outcomes' },
  },
  {
    id: 8,
    title: 'How should your leader handle risk and decision confidence?',
    a: { label: 'Extreme A', name: 'Lead Boldly, Correct Later', desc: 'Fast but risky decisions; mistakes affect team' },
    b: { label: 'Extreme B', name: 'Doubt Everything, Decide Nothing', desc: 'Paralysis spreads; team hesitant; opportunities lost' },
  },
  {
    id: 9,
    title: 'How much domain expertise should your leader bring?',
    a: { label: 'Extreme A', name: 'Know-It-All Hazing Leader', desc: 'Highly experienced but tests and hazes team' },
    b: { label: 'Extreme B', name: 'Clueless Leader', desc: "Lacks experience or domain knowledge; can't answer questions; team feels unsupported" },
  },
  {
    id: 10,
    title: 'How should your leader handle mistakes and accountability?',
    a: { label: 'Extreme A', name: 'Accountability Hunter', desc: 'Leader focuses on finding who is responsible; team feels cautious about taking risks' },
    b: { label: 'Extreme B', name: 'Forget-It Leader', desc: 'Avoids acknowledging mistakes and moves on; team misses signals and risks repeating errors' },
  },
];

const SPECTRUM = [
  { key: 'strongly_a', label: 'Strongly prefer A' },
  { key: 'slightly_a', label: 'Slightly prefer A' },
  { key: 'slightly_b', label: 'Slightly prefer B' },
  { key: 'strongly_b', label: 'Strongly prefer B' },
];

const SIMILARITY = [
  'A leader exactly like you',
  'A leader somewhat like you, with key differences',
  'A leader mostly different from you, with some traits in common',
  'A leader completely different from you',
];

const EXPERIENCE = [
  'Less than 5 years',
  '5–10 years',
  '11–25 years',
  'More than 25 years',
];

const LEADERSHIP_LEVEL = [
  'I do not lead people',
  'I lead projects but not people',
  'I lead people',
  'Leader of leaders',
  'Senior manager or executive',
];

export default function Survey() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [similarity, setSimilarity] = useState('');
  const [experience, setExperience] = useState('');
  const [leadershipLevel, setLeadershipLevel] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / QUESTIONS.length) * 100);

  const setAnswer = (qId: number, val: string) => setAnswers(prev => ({ ...prev, [qId]: val }));

  const handleSubmit = async () => {
    if (!email) { setError('Please enter your email address.'); return; }
    setSubmitting(true);
    setError('');
    const summary = QUESTIONS.map(q => `Q${q.id}: ${answers[q.id] || 'unanswered'}`).join(', ');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          trailMarkers: `Survey results — ${summary} | Similarity: ${similarity} | Experience: ${experience} | Level: ${leadershipLevel}`,
        }),
      });
      if (res.ok) { setSubmitted(true); }
      else { setError('Something went wrong. Please try again.'); }
    } catch (err) { setError('Something went wrong. Please try again.'); }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '4rem 1.5rem', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 20 }}>🏁</div>
        <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12, color: '#111' }}>Thank you, {name || 'friend'}.</h1>
        <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 24px' }}>
          Your results are on their way. Keep an eye on your inbox for a personalized summary of your leadership preferences.
        </p>
        <p style={{ fontSize: 14, color: '#888', fontStyle: 'italic' }}>The trail does not reveal itself to people who are standing still.</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'Georgia, serif', color: '#222' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>
          Running Your Career
        </p>
        <h1 style={{ fontSize: 26, fontWeight: 600, color: '#111', marginBottom: 10, lineHeight: 1.3 }}>
          Leadership preference survey
        </h1>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
          Ten quick questions reveal what kind of leader brings out your best. Share your email and we'll send you a personalized summary.
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#999', marginBottom: 6 }}>
          <span>{answered} of {QUESTIONS.length} answered</span>
          <span>{progress}%</span>
        </div>
        <div style={{ background: '#e5e7eb', borderRadius: 4, height: 4 }}>
          <div style={{ background: '#1d4ed8', height: 4, borderRadius: 4, width: `${progress}%`, transition: 'width 0.3s' }} />
        </div>
      </div>

      {/* Questions */}
      {QUESTIONS.map((q) => (
        <div key={q.id} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9ca3af', marginBottom: 8 }}>
            Question {q.id} of {QUESTIONS.length}
          </div>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 14, lineHeight: 1.5 }}>{q.title}</p>

          {/* Extremes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
            {[q.a, q.b].map((side, i) => (
              <div key={i} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: i === 0 ? '#1d4ed8' : '#6b7280', marginBottom: 4 }}>
                  {side.label}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#374151', marginBottom: 3 }}>{side.name}</div>
                <div style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.4 }}>{side.desc}</div>
              </div>
            ))}
          </div>

          {/* Spectrum buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
            {SPECTRUM.map((opt) => {
              const selected = answers[q.id] === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => setAnswer(q.id, opt.key)}
                  style={{
                    background: selected ? '#eff6ff' : '#f9fafb',
                    border: selected ? '1.5px solid #1d4ed8' : '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '8px 6px',
                    fontSize: 11,
                    color: selected ? '#1d4ed8' : '#6b7280',
                    cursor: 'pointer',
                    lineHeight: 1.3,
                    fontWeight: selected ? 600 : 400,
                    transition: 'all 0.15s',
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '1.5rem 0' }} />

      {/* Similarity question */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9ca3af', marginBottom: 8 }}>
          Reflection
        </div>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 14, lineHeight: 1.5 }}>
          As you answered the questions, did you find that you preferred...
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SIMILARITY.map((opt) => {
            const sel = similarity === opt;
            return (
              <button key={opt} onClick={() => setSimilarity(opt)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: sel ? '#eff6ff' : '#f9fafb',
                border: sel ? '1.5px solid #1d4ed8' : '1px solid #e5e7eb',
                borderRadius: 8, padding: '10px 12px',
                cursor: 'pointer', fontSize: 13, color: sel ? '#1d4ed8' : '#374151',
                fontWeight: sel ? 600 : 400, textAlign: 'left', transition: 'all 0.15s',
              }}>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                  background: sel ? '#1d4ed8' : 'transparent',
                  border: sel ? '1.5px solid #1d4ed8' : '1.5px solid #d1d5db',
                }} />
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Experience */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9ca3af', marginBottom: 8 }}>
          About you
        </div>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 14, lineHeight: 1.5 }}>
          How many years of full-time work experience do you have?
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {EXPERIENCE.map((opt) => {
            const sel = experience === opt;
            return (
              <button key={opt} onClick={() => setExperience(opt)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: sel ? '#eff6ff' : '#f9fafb',
                border: sel ? '1.5px solid #1d4ed8' : '1px solid #e5e7eb',
                borderRadius: 8, padding: '10px 12px',
                cursor: 'pointer', fontSize: 13, color: sel ? '#1d4ed8' : '#374151',
                fontWeight: sel ? 600 : 400, textAlign: 'left', transition: 'all 0.15s',
              }}>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                  background: sel ? '#1d4ed8' : 'transparent',
                  border: sel ? '1.5px solid #1d4ed8' : '1.5px solid #d1d5db',
                }} />
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Leadership Level */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', marginBottom: 12 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 14, lineHeight: 1.5 }}>
          What is your current leadership level?
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {LEADERSHIP_LEVEL.map((opt) => {
            const sel = leadershipLevel === opt;
            return (
              <button key={opt} onClick={() => setLeadershipLevel(opt)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: sel ? '#eff6ff' : '#f9fafb',
                border: sel ? '1.5px solid #1d4ed8' : '1px solid #e5e7eb',
                borderRadius: 8, padding: '10px 12px',
                cursor: 'pointer', fontSize: 13, color: sel ? '#1d4ed8' : '#374151',
                fontWeight: sel ? 600 : 400, textAlign: 'left', transition: 'all 0.15s',
              }}>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                  background: sel ? '#1d4ed8' : 'transparent',
                  border: sel ? '1.5px solid #1d4ed8' : '1.5px solid #d1d5db',
                }} />
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Email capture */}
      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: '1.5rem', marginTop: '1.5rem' }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 4 }}>Get your personalized results</h3>
        <p style={{ fontSize: 13, color: '#555', marginBottom: 16, lineHeight: 1.6 }}>
          Enter your name and email and we'll send you a summary of your leadership preferences and what they reveal about the kind of leader who brings out your best.
        </p>
        <input
          type="text"
          placeholder="Your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 14, marginBottom: 10, fontFamily: 'Georgia, serif' }}
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ flex: 1, padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 14, fontFamily: 'Georgia, serif' }}
          />
        </div>
      </div>

      {error && <p style={{ color: '#dc2626', fontSize: 13, marginTop: 10 }}>{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={submitting}
        style={{
          width: '100%', background: '#1d4ed8', color: '#fff',
          border: 'none', borderRadius: 8, padding: '13px',
          fontSize: 15, fontWeight: 600, cursor: 'pointer', marginTop: '1rem',
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? 'Submitting...' : 'Submit survey and get my results →'}
      </button>

      <p style={{ fontSize: 12, color: '#9ca3af', textAlign: 'center', marginTop: 12 }}>
        No spam. Just trail markers.
      </p>
    </main>
  );
}