import { useEffect, useRef, useState } from 'react';
import { Send, ChevronLeft, RotateCcw } from 'lucide-react';
import gsap from 'gsap';
import { submitToFirebase } from './firebase';

const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY || '';
const RESEND_FROM = import.meta.env.VITE_RESEND_FROM || 'XyberClan Survey <onboarding@resend.dev>';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'xyberclandev@gmail.com';

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

  const buildEmailContent = () => {
    const txt = generateSummary();
    const isFr = lang === 'fr';
    const flowLabel = selectedFlow === 'enterprise'
      ? (isFr ? 'Enquête Opérationnelle' : 'Enterprise Survey')
      : (isFr ? 'Proposition de Partenariat' : 'Partnership Proposal');

    const subject = `[XyberClan] ${flowLabel} — ${answers.companyName || answers.contactName || ''}`;
    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1e293b;">
        <div style="background: linear-gradient(135deg, #050507 0%, #0b0c10 100%); padding: 40px 32px; border-radius: 16px 16px 0 0;">
          <h1 style="color: #06b6d4; font-size: 22px; margin: 0 0 8px; font-weight: 800;">XYBERCLAN</h1>
          <p style="color: #94a3b8; font-size: 13px; margin: 0; letter-spacing: 0.05em; text-transform: uppercase;">${flowLabel}</p>
        </div>
        <div style="background: #ffffff; padding: 32px; border-radius: 0 0 16px 16px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 18px; margin: 0 0 20px; color: #0f172a;">
            ${isFr ? 'Merci pour votre soumission' : 'Thank you for your submission'}
          </h2>
          <p style="font-size: 14px; color: #475569; line-height: 1.7; margin: 0 0 24px;">
            ${isFr
              ? `Nous avons bien reçu votre <strong>${flowLabel.toLowerCase()}</strong>. Voici un récapitulatif de vos réponses :`
              : `We have received your <strong>${flowLabel.toLowerCase()}</strong>. Here is a summary of your responses:`}
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
            <pre style="font-size: 12px; color: #334155; white-space: pre-wrap; word-break: break-word; font-family: 'Courier New', monospace; margin: 0; line-height: 1.8;">${txt}</pre>
          </div>
          <p style="font-size: 13px; color: #64748b; line-height: 1.6; margin: 0;">
            ${isFr
              ? 'Notre équipe examinera votre soumission et vous répondra sous <strong>24 heures</strong>.'
              : 'Our team will review your submission and respond within <strong>24 hours</strong>.'}
          </p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="font-size: 11px; color: #94a3b8; margin: 0; text-align: center;">
            © ${new Date().getFullYear()} XyberClan — ${isFr ? 'Tous droits réservés' : 'All rights reserved'}
          </p>
        </div>
      </div>`;

    return { subject, html, text: txt };
  };

  const sendConfirmationEmail = async () => {
    if (!RESEND_API_KEY || RESEND_API_KEY === 're_your_api_key_here') {
      console.warn('Resend API key not configured, skipping email');
      return;
    }
    const { subject, html } = buildEmailContent();
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [CONTACT_EMAIL],
        subject,
        html
      })
    });
  };

  const handleSend = async () => {
    setIsSubmitting(true);
    try {
      await Promise.all([
        submitToFirebase(selectedFlow, answers),
        sendConfirmationEmail()
      ]);
      setIsSuccess(true);
    } catch (e) {
      console.error(e);
      alert(lang === 'fr'
        ? 'Une erreur est survenue. Veuillez réessayer.'
        : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Single Send button */}
      <div className="rv-item review-actions" style={{ maxWidth: 680, width: '100%', margin: '0 auto' }}>
        <button onClick={handleSend} disabled={isSubmitting}
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
            ? 'Enregistre dans Firebase et envoie un e-mail de confirmation'
            : 'Saves to Firebase and sends a confirmation email'}
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
