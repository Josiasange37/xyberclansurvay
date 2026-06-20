import { useEffect, useRef, useState } from 'react';
import { Send, ChevronLeft, RotateCcw } from 'lucide-react';
import gsap from 'gsap';

export function ReviewPage({ steps, answers, selectedFlow, t, onBack, onRestart,
  generateSummary, lang }) {

  const ref = useRef(null);
  const accentColor = selectedFlow === 'enterprise' ? 'var(--accent-cyan)' : 'var(--accent-purple)';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.rv-item',
        { opacity: 0, y: 18, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.07, ease: 'power2.out' });
    }, ref);
    return () => ctx.revert();
  }, []);

  const buildEmailBody = () => {
    const txt = generateSummary();
    const sub = `[XyberClan] ${selectedFlow === 'enterprise'
      ? (lang === 'fr' ? 'Enquête Opérationnelle' : 'Enterprise Survey')
      : (lang === 'fr' ? 'Proposition de Partenariat' : 'Partnership Proposal')}`;
    return { subject: sub, body: txt };
  };

  const handleSendAll = async () => {
    setIsSubmitting(true);
    const txt = generateSummary();

    // 1) Google Sheets
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxO-XT0bSZPbszsvb9SP5cHUewC7nRUrta2HT2aI4Uh37EtPQfZ69Tzc4_VibQlHNv4Q/exec';
    const payload = {
      companyName: answers.companyName || "",
      industry: answers.industry || "",
      companySize: answers.companySize || "",
      role: answers.role || "",
      challenges: Array.isArray(answers.challenges) ? answers.challenges.join(", ") : (answers.challenges || ""),
      priorities: answers.priorities || "",
      cyberIncidents: Array.isArray(answers.cyberIncidents) ? answers.cyberIncidents.join(", ") : (answers.cyberIncidents || ""),
      securityMaturity: answers.securityMaturity || "",
      aiUsage: answers.aiUsage || "",
      aiTools: answers.aiTools || "",
      processesToAutomate: answers.processesToAutomate || "",
      trainingNeeds: Array.isArray(answers.trainingNeeds) ? answers.trainingNeeds.join(", ") : (answers.trainingNeeds || ""),
      skillGaps: answers.skillGaps || "",
      suggestions: answers.suggestions || "",
      xyberclanServices: Array.isArray(answers.xyberclanServices) ? answers.xyberclanServices.join(", ") : (answers.xyberclanServices || ""),
      orgType: answers.orgType || "",
      partnershipType: answers.partnershipType || "",
      budget: answers.budget || "",
      proposal: answers.proposal || "",
      timeline: answers.timeline || "",
      audienceReach: answers.audienceReach || "",
      whyXyberClan: answers.whyXyberClan || "",
      name: answers.name || "",
      contactName: answers.contactName || "",
      contactEmail: answers.contactEmail || "",
      contactPhone: answers.contactPhone || "",
      consent: true,
      flowType: selectedFlow
    };

    const sheetsPromise = fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(e => console.error('Sheets error:', e));

    // 2) WhatsApp — open in new tab
    const waUrl = `https://wa.me/237696814391?text=${encodeURIComponent(txt)}`;
    window.open(waUrl, '_blank');

    // 3) Email — open mailto
    const { subject, body } = buildEmailBody();
    window.location.href = `mailto:xyberclandev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Wait for sheets to finish, then show success
    await sheetsPromise;
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div ref={ref} style={{ flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
        <h1 className="rv-item" style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: 16 }}>{t.succTitle}</h1>
        <p className="rv-item" style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 32 }}>{t.succDesc}</p>
        <button onClick={onRestart} className="glow-btn rv-item"
          style={{ background: accentColor, border: 'none', borderRadius: 8, padding: '12px 24px',
            color: '#fff', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer' }}>
          {t.succBtn}
        </button>
      </div>
    );
  }

  return (
    <div ref={ref} style={{ flex: 1, overflowY: 'auto', background: 'var(--bg-darker)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: 'clamp(28px,5vw,56px) 24px' }}>

      {/* Completed badge */}
      <div className="rv-item" style={{ alignSelf: 'flex-start', maxWidth: 680, width: '100%',
        margin: '0 auto 20px' }}>
        <span style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.18em',
          color: '#10b981', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.18)',
          padding: '4px 10px', borderRadius: 5 }}>
          {t.auditCompleted}
        </span>
      </div>

      <h1 className="rv-item" style={{ fontWeight: 300, fontSize: 'clamp(1.6rem,3vw,2.4rem)',
        lineHeight: 1.15, letterSpacing: '-0.03em', color: 'var(--text-primary)',
        maxWidth: 680, width: '100%', margin: '0 auto 12px' }}>
        {t.reviewTitle}
      </h1>
      <p className="rv-item" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)',
        lineHeight: 1.65, maxWidth: 680, width: '100%', margin: '0 auto 36px' }}>
        {t.reviewDesc}
      </p>

      {/* Summary card */}
      <div className="rv-item glass-panel review-summary-card" style={{ maxWidth: 680, width: '100%', borderRadius: 14,
        padding: '24px 28px', background: 'rgba(0,0,0,0.18)', margin: '0 auto 24px',
        display: 'flex', flexDirection: 'column', gap: 14 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between',
          borderBottom: '1px dashed var(--border-color)', paddingBottom: 12 }}>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            {t.transmissionReport}
          </span>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: accentColor }}>
            {t.version}
          </span>
        </div>

        {steps.map((step, i) => {
          if (step.fields) return null;
          let rawVal = answers[step.id];
          let displayVal = rawVal || t.notAvailable;
          if (step.options && rawVal) {
            if (step.multiple && Array.isArray(rawVal)) {
              displayVal = rawVal.map(v => {
                const matched = step.options.find(o => (typeof o === 'object' ? o.value : o) === v);
                return matched ? (typeof matched === 'object' ? matched.label : matched) : v;
              }).join(", ");
            } else {
              const matched = step.options.find(o => (typeof o === 'object' ? o.value : o) === rawVal);
              if (matched) displayVal = typeof matched === 'object' ? matched.label : matched;
            }
          }
          return (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', gap: 16 }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-secondary)', width: '42%' }}>
                {step.question.replace(/\?$/, '')}
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-primary)',
                textAlign: 'right', width: '58%' }}>
                {displayVal}
              </span>
            </div>
          );
        })}

        {/* Contact block */}
        <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: 14,
          display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em',
            color: 'var(--text-muted)' }}>{t.repCredentials}</span>
          <div className="review-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              [t.companyLabel, answers.companyName],
              [t.leadNameLabel, answers.contactName || answers.name],
              [t.emailLabel, answers.contactEmail],
              [t.phoneLabel, answers.contactPhone],
            ].map(([label, val]) => (
              <div key={label}>
                <span style={{ fontSize: '0.62rem', color: 'var(--text-secondary)', display: 'block' }}>{label}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {val || t.notAvailable}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Single unified Send button */}
      <div className="rv-item review-actions" style={{ maxWidth: 680, width: '100%', margin: '0 auto' }}>
        <button onClick={handleSendAll} disabled={isSubmitting}
          className="glow-btn"
          style={{ width: '100%', background: isSubmitting ? 'rgba(255,255,255,0.04)' : accentColor,
            border: 'none', borderRadius: 10, padding: '16px 24px',
            color: '#fff', fontSize: '0.95rem', fontWeight: 700,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            fontFamily: 'var(--font-sans)', opacity: isSubmitting ? 0.7 : 1,
            transition: 'all 0.25s ease' }}>
          <Send size={18}/> {isSubmitting
            ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...')
            : (lang === 'fr' ? 'Envoyer' : 'Send')}
        </button>
        <span className="rv-item" style={{ display: 'block', textAlign: 'center', marginTop: 10,
          fontSize: '0.68rem', color: 'var(--text-muted)' }}>
          {lang === 'fr'
            ? 'Envoie automatique vers Google Sheets, WhatsApp et E-mail'
            : 'Auto-sends to Google Sheets, WhatsApp and Email'}
        </span>
      </div>

      {/* Secondary actions */}
      <div className="rv-item review-secondary" style={{ display: 'flex', gap: 24, marginTop: 24,
        justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={onBack}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)',
            fontSize: '0.76rem', fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-sans)' }}>
          <ChevronLeft size={13}/> {t.backEdit}
        </button>
        <span style={{ color: 'var(--border-color)' }}>|</span>
        <button onClick={onRestart}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)',
            fontSize: '0.76rem', fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-sans)' }}>
          <RotateCcw size={12}/> {t.restartSurvey}
        </button>
      </div>
    </div>
  );
}
