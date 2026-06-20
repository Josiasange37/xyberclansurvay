import { useEffect, useRef } from 'react';
import { Check, ChevronLeft, ChevronRight, Building2, User, Mail, Phone,
  Users, Briefcase, Layers, Cpu, MessageSquare, DollarSign, Calendar, Clock, Sparkles } from 'lucide-react';
import gsap from 'gsap';

function getIcon(text) {
  const t = text.toLowerCase();
  if (t.includes('client') || t.includes('meetup') || t.includes('marketing') || t.includes('communaut')) return <Users size={18}/>;
  if (t.includes('task') || t.includes('venture') || t.includes('tâche')) return <Briefcase size={18}/>;
  if (t.includes('scope') || t.includes('licens') || t.includes('matériel') || t.includes('layer')) return <Layers size={18}/>;
  if (t.includes('api') || t.includes('custom') || t.includes('logiciel') || t.includes('hackathon')) return <Cpu size={18}/>;
  if (t.includes('manual') || t.includes('chat') || t.includes('whatsapp') || t.includes('tableur')) return <MessageSquare size={18}/>;
  if (t.includes('critical') || t.includes('immediat') || t.includes('immédiat') || t.includes('budget') || t.includes('financ')) return <DollarSign size={18}/>;
  if (t.includes('moderat') || t.includes('mid') || t.includes('moyen') || t.includes('demo') || t.includes('média')) return <Calendar size={18}/>;
  if (t.includes('negligible') || t.includes('long') || t.includes('flexible') || t.includes('continu')) return <Clock size={18}/>;
  return <Sparkles size={18}/>;
}

export function WizardView({ steps, currentStep, currentQuestion, answers, selectedFlow, t,
  handleChoiceSelect, handleFieldChange, handleTextChange, handleNext, handlePrev, isStepValid }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const accentColor = selectedFlow === 'enterprise' ? 'var(--accent-cyan)' : 'var(--accent-purple)';
  const accentRgb = selectedFlow === 'enterprise' ? '6,182,212' : '139,92,246';

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(leftRef.current.querySelectorAll('.aL'),
          { opacity: 0, y: 14, filter: 'blur(3px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, stagger: 0.07, ease: 'power2.out' });
      }
      if (rightRef.current) {
        gsap.fromTo(rightRef.current.querySelectorAll('.aR'),
          { opacity: 0, y: 22, filter: 'blur(5px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.055, ease: 'power3.out' });
      }
    });
    return () => ctx.revert();
  }, [currentStep]);

  if (!currentQuestion) return null;

  return (
    <div className="wizard-root" style={{ flex: 1, display: 'flex', flexDirection: 'row', minHeight: 0, flexWrap: 'wrap' }}>
      {/* ── LEFT: Question context ── */}
      <div ref={leftRef} className="wizard-left" style={{ width: 'min(40%, 400px)', minWidth: 260, borderRight: '1px solid var(--border-color)',
        background: 'rgba(0,0,0,0.12)', padding: 'clamp(28px,5vw,64px)', display: 'flex',
        flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="aL" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: accentColor,
              background: `rgba(${accentRgb},0.08)`, border: `1px solid rgba(${accentRgb},0.15)`,
              padding: '3px 8px', borderRadius: 4 }}>
              {surveyFlows_badge(steps, selectedFlow, t)}
            </span>
            <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              {t.stepBadge} {currentStep + 1} {t.of} {steps.length}
            </span>
          </div>

          <h1 className="aL" style={{ fontWeight: 300, fontSize: 'clamp(1.5rem,2.8vw,2.4rem)',
            lineHeight: 1.18, letterSpacing: '-0.03em', color: 'var(--text-primary)', margin: 0 }}>
            {currentQuestion.question}
          </h1>

          <p className="aL" style={{ fontSize: '0.84rem', lineHeight: 1.65,
            color: 'var(--text-secondary)', maxWidth: 360 }}>
            {currentQuestion.description}
          </p>
        </div>

        {/* Step timeline */}
        <div className="step-timeline" style={{ borderTop: '1px solid var(--border-color)', paddingTop: 24, marginTop: 40,
          display: 'flex', flexDirection: 'column', gap: 12 }}>
          {steps.map((s, i) => {
            const active = i === currentStep, done = i < currentStep;
            return (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 10,
                opacity: active ? 1 : done ? 0.55 : 0.22, transition: 'opacity 0.4s' }}>
                <div className="step-dot" style={{
                  background: active ? accentColor : done ? accentColor : 'var(--text-muted)',
                  boxShadow: active ? `0 0 6px ${accentColor}` : 'none' }} />
                <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: active ? accentColor : 'var(--text-secondary)' }}>
                  {String(i + 1).padStart(2, '0')} — {s.id.replace(/^(pm_|partner_)/, '').toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── RIGHT: Inputs ── */}
      <div ref={rightRef} className="wizard-right" style={{ flex: 1, padding: 'clamp(28px,5vw,64px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        background: 'var(--bg-darker)', overflowY: 'auto' }}>
        <div style={{ maxWidth: 580, width: '100%', margin: '0 auto' }}>

          {/* Choice buttons */}
          {currentQuestion.options && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {currentQuestion.options.map((opt, idx) => {
                const optVal = typeof opt === 'object' ? opt.value : opt;
                const optLabel = typeof opt === 'object' ? opt.label : opt;
                const isMulti = !!currentQuestion.multiple;
                const sel = isMulti
                  ? (Array.isArray(answers[currentQuestion.id]) && answers[currentQuestion.id].includes(optVal))
                  : answers[currentQuestion.id] === optVal;
                return (
                  <button key={idx} onClick={() => handleChoiceSelect(currentQuestion.id, optVal)}
                    className="choice-card aR"
                    style={{ background: sel ? `rgba(${accentRgb},0.06)` : 'var(--bg-input)',
                      border: `1px solid ${sel ? accentColor : 'var(--border-color)'}`,
                      borderRadius: 12, padding: '18px 22px', textAlign: 'left', cursor: 'pointer',
                      color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 14,
                      transition: 'all 0.2s ease' }}
                    onMouseEnter={e => { if (!sel) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
                    onMouseLeave={e => { if (!sel) e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                    <div style={{ width: 34, height: 34, borderRadius: isMulti ? 8 : 8, flexShrink: 0,
                      background: sel ? `rgba(${accentRgb},0.12)` : 'rgba(255,255,255,0.04)',
                      color: sel ? accentColor : 'var(--text-muted)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getIcon(optLabel)}
                    </div>
                    <span style={{ fontSize: '0.88rem', fontWeight: 500, flex: 1 }}>{optLabel}</span>
                    <div style={{ width: 17, height: 17, borderRadius: isMulti ? 4 : '50%', flexShrink: 0,
                      background: sel ? accentColor : 'transparent',
                      border: sel ? 'none' : '2px solid var(--border-color)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {sel && <Check size={10} strokeWidth={4} color="#fff"/>}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Textarea */}
          {currentQuestion.placeholder && !currentQuestion.fields && (
            <div className="aR" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <textarea autoFocus rows={7}
                value={answers[currentQuestion.id] || ''}
                onChange={e => handleTextChange(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                onKeyDown={e => { if (e.ctrlKey && e.key === 'Enter') handleNext(); }}
                style={{ width: '100%', borderRadius: 12, padding: 18, fontSize: '0.92rem',
                  lineHeight: 1.6, outline: 'none', resize: 'none', fontFamily: 'var(--font-sans)' }}
                onFocus={e => { e.currentTarget.style.borderColor = accentColor;
                  e.currentTarget.style.boxShadow = `0 0 0 1px rgba(${accentRgb},0.25)`; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'none'; }} />
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.textareaHint}</span>
            </div>
          )}

          {/* Contact fields */}
          {currentQuestion.fields && (
            <div className="aR glass-panel" style={{ borderRadius: 14, padding: '26px 28px',
              display: 'flex', flexDirection: 'column', gap: 20 }}>
              {currentQuestion.fields.map(field => (
                <div key={field.id}>
                  <label style={{ fontSize: '0.67rem', fontWeight: 800, textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: 'var(--text-secondary)', display: 'block', marginBottom: 7 }}>
                    {field.label}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)',
                      color: 'var(--text-muted)', display: 'flex', pointerEvents: 'none' }}>
                      {field.id === 'company' ? <Building2 size={15}/> : field.id === 'name' ? <User size={15}/>
                        : field.id === 'phone' ? <Phone size={15}/> : <Mail size={15}/>}
                    </span>
                    <input type={field.type} value={answers[field.id] || ''}
                      onChange={e => handleFieldChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      style={{ width: '100%', padding: '11px 14px 11px 38px', borderRadius: 8,
                        fontSize: '0.88rem', outline: 'none' }}
                      onFocus={e => { e.currentTarget.style.borderColor = accentColor;
                        e.currentTarget.style.boxShadow = `0 0 0 1px rgba(${accentRgb},0.2)`; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.boxShadow = 'none'; }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nav buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          maxWidth: 580, width: '100%', margin: '28px auto 0',
          borderTop: '1px solid var(--border-color)', paddingTop: 20 }}>
          <button onClick={handlePrev}
            style={{ background: 'var(--bg-input)', border: '1px solid var(--border-color)',
              borderRadius: 8, padding: '9px 18px', fontSize: '0.78rem', fontWeight: 600,
              color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center',
              gap: 5, fontFamily: 'var(--font-sans)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <ChevronLeft size={15}/> {t.back}
          </button>
          <button onClick={handleNext} disabled={!isStepValid()}
            style={{ background: isStepValid() ? accentColor : 'rgba(255,255,255,0.04)',
              border: 'none', borderRadius: 8, padding: '9px 22px', fontSize: '0.78rem', fontWeight: 700,
              color: isStepValid() ? '#fff' : 'var(--text-muted)', cursor: isStepValid() ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-sans)',
              transition: 'all 0.25s' }}>
            {currentStep === steps.length - 1 ? t.review : t.nextStep} <ChevronRight size={15}/>
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper: get badge label from active flow data
function surveyFlows_badge(steps, selectedFlow, t) {
  return selectedFlow === 'enterprise' ? t.auditBadge : t.collabBadge;
}
