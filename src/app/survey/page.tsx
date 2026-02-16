'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

const scaleOptions = [
  { value: 1, label: 'Strongly Prefer Extreme A' },
  { value: 2, label: 'Slightly Prefer Extreme A' },
  { value: 3, label: 'Slightly Prefer Extreme B' },
  { value: 4, label: 'Strongly Prefer Extreme B' },
]

const surveyQuestions = [
  {
    id: 'q1',
    text: 'Involvement → Hands-On or Hands-Off?',
    extremeA: 'Swoop In, Save the Day – Leader jumps in to fix issues, even when the team just wants guidance; team feels undermined or ignored',
    extremeB: 'Absent, Assume, Repeat – Leader leaves the team to figure it out entirely; priorities unclear; mistakes multiply',
  },
  {
    id: 'q2',
    text: 'Decisiveness → Fire or Freeze?',
    extremeA: 'Fire, Ready, Aim – Moves fast but risks mistakes',
    extremeB: 'Ready, Ready, Ready… – Delayed action; opportunities missed; team hesitates',
  },
  {
    id: 'q3',
    text: 'Decision Style → Gut or Guidebook?',
    extremeA: 'Trust Instincts, Pick Favorites – Quick decisions but biased; team unsure why some are favored',
    extremeB: 'Learned from Books, Paralysis by Analysis – Knowledgeable, but overthinks; slow action frustrates team',
  },
  {
    id: 'q4',
    text: 'Political Savvy → Move Pieces or Miss Moves?',
    extremeA: 'Network, Negotiate, Maneuver – Perceived favoritism; hidden agendas; collaboration erodes',
    extremeB: 'Ignore, Hope, Wait – Team blindsided by politics; alignment and opportunities missed',
  },
  {
    id: 'q5',
    text: 'Information Sharing → TMI or Keep It Close?',
    extremeA: 'Tell All, Filter None – Info overload; team distracted; hard to focus',
    extremeB: 'Know Everything, Share Nothing – Team stalls, duplicates work, decisions delayed',
  },
  {
    id: 'q6',
    text: 'Speaking Volume → Voice or Void?',
    extremeA: 'Speak Up, Speak Over – Ideas dominate; others hesitate; subtle issues ignored',
    extremeB: 'Whisper, Wonder, Wait – Team unsure of priorities; delayed action; missed alignment',
  },
  {
    id: 'q7',
    text: 'Process Orientation → Blueprint or Wing It?',
    extremeA: 'Follow Steps, Forget Goals – Rules over results; slow innovation',
    extremeB: 'Wing It, Cross Fingers – Chaotic execution; risks missed; inconsistent outcomes',
  },
  {
    id: 'q8',
    text: 'Confidence → All In or All Caution?',
    extremeA: 'Lead Boldly, Correct Later – Fast but risky decisions; mistakes affect team',
    extremeB: 'Doubt Everything, Decide Nothing – Paralysis spreads; team hesitant; opportunities lost',
  },
  {
    id: 'q9',
    text: 'Domain Knowledge / Experience → Guru or Green?',
    extremeA: 'Know-It-All Hazing Leader – Highly experienced, but tests and hazes team',
    extremeB: 'Clueless Leader – Lacks experience or domain knowledge; can’t answer questions or provide guidance; team feels unsupported',
  },
  {
    id: 'q10',
    text: 'What Just Happened?',
    extremeA: 'Accountability Hunter – Leader focuses on finding who is responsible for what went wrong; team feels cautious about taking risks',
    extremeB: 'Forget-It Leader – Avoids acknowledging mistakes and moves on as if nothing went wrong; team misses signals for improvement and risks repeating errors',
  },
]

export default function SurveyPage() {
  const [responses, setResponses] = useState({})

  const handleChange = (questionId: string, value: any) => {
    setResponses({ ...responses, [questionId]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.from('survey_responses').insert([responses])
    if (error) {
      alert('Error submitting survey: ' + error.message)
    } else {
      alert('Survey submitted! Thank you.')
      setResponses({})
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Leadership Preference Survey</h1>
      <form onSubmit={handleSubmit}>
        {surveyQuestions.map((q, idx) => (
          <div key={q.id} style={{ marginBottom: 30 }}>
            <h3>Question {idx + 1}</h3>
            <p><strong>Extreme A:</strong> {q.extremeA}</p>
            <p><strong>Extreme B:</strong> {q.extremeB}</p>
            {scaleOptions.map((opt) => (
              <label key={opt.value} style={{ display: 'block', marginBottom: 4 }}>
                <input
                  type="radio"
                  name={q.id}
                  value={opt.value}
                  required
                  checked={responses[q.id] == opt.value}
                  onChange={() => handleChange(q.id, opt.value)}
                />
                {' '}{opt.label}
              </label>
            ))}
          </div>
        ))}

        {/* Question 11: Experience */}
        <div style={{ marginBottom: 40 }}>
          <h3>11. Experience - Please select how many years of full-time work experience you have:</h3>
          {[
            { value: 'less5', label: 'Less than 5 years' },
            { value: '5to10', label: '5-10 years' },
            { value: '11to25', label: '11-25 years' },
            { value: '25plus', label: 'More than 25 years' },
          ].map((option) => (
            <label key={option.value} style={{ display: 'block', marginBottom: 6 }}>
              <input
                type="radio"
                name="experience"
                value={option.value}
                required
                checked={responses['experience'] === option.value}
                onChange={() => handleChange('experience', option.value)}
              />
              {' '}{option.label}
            </label>
          ))}
        </div>

        {/* Question 12: Leadership Level */}
        <div style={{ marginBottom: 40 }}>
          <h3>12. Leadership Level - What is your leadership level?</h3>
          {[
            { value: 'none', label: 'Do not lead people' },
            { value: 'projects', label: 'Lead Projects but not people' },
            { value: 'people', label: 'Lead people' },
            { value: 'leaders', label: 'Leader of Leaders' },
            { value: 'senior', label: 'Senior Manager or Executive' },
          ].map((option) => (
            <label key={option.value} style={{ display: 'block', marginBottom: 6 }}>
              <input
                type="radio"
                name="leadershipLevel"
                value={option.value}
                required
                checked={responses['leadershipLevel'] === option.value}
                onChange={() => handleChange('leadershipLevel', option.value)}
              />
              {' '}{option.label}
            </label>
          ))}
        </div>

        {/* Question 13: Self Preference */}
        <div style={{ marginBottom: 40 }}>
          <h3>13. As you answered the questions about leadership extremes, did you find that you preferred?</h3>
          {[
            { value: 'exactly', label: 'A leader exactly like you' },
            { value: 'somewhat', label: 'A leader somewhat like you but with key differences' },
            { value: 'mostly', label: 'A leader mostly different from you but with some specific traits in common' },
            { value: 'completely', label: 'A leader completely different from you' },
          ].map((option) => (
            <label key={option.value} style={{ display: 'block', marginBottom: 6 }}>
              <input
                type="radio"
                name="selfPreference"
                value={option.value}
                required
                checked={responses['selfPreference'] === option.value}
                onChange={() => handleChange('selfPreference', option.value)}
              />
              {' '}{option.label}
            </label>
          ))}
        </div>

        <button type="submit" style={{ padding: '10px 20px', fontSize: 16 }}>
          Submit
        </button>
      </form>
    </div>
  )
}
