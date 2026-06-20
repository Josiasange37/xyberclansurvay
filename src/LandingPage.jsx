import { useEffect, useRef } from 'react';
import { ArrowRight, Building2, Handshake } from 'lucide-react';
import gsap from 'gsap';

export function LandingPage({ t, onSelect }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.land-header', { opacity: 0, y: -18, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.65, ease: 'power2.out', stagger: 0.12 });
      gsap.fromTo('.land-card', { opacity: 0, y: 32, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', stagger: 0.16, delay: 0.25 });
    }, ref);
    return () => ctx.revert();
  }, [t]);

  const cardHover = (e, color, shadow) => {
    e.currentTarget.style.borderColor = color;
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = shadow;
  };
  const cardLeave = e => {
    e.currentTarget.style.borderColor = 'var(--border-color)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div ref={ref} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '40px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48, zIndex: 10, maxWidth: 640 }}>
        <div className="land-header" style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--bg-card)', border: '1px solid var(--border-color)',
          borderRadius: 50, padding: '6px 14px', marginBottom: 18 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent-cyan)',
            boxShadow: '0 0 8px var(--accent-cyan)' }} />
          <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>{t.portalSubtitle}</span>
        </div>

        <h1 className="land-header" style={{ fontWeight: 800, fontSize: 'clamp(1.9rem,5vw,3.6rem)',
          lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--text-primary)', margin: '0 0 16px' }}>
          {t.portalTitle.split('\n').map((line, i) => (
            <span key={i}>{i === 1
              ? <span style={{ background: 'linear-gradient(90deg,var(--accent-cyan) 20%,var(--accent-purple))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{line}</span>
              : line}
            </span>
          ))}
        </h1>

        <p className="land-header" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)',
          lineHeight: 1.65, fontWeight: 400 }}>{t.portalDesc}</p>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 24, width: '100%', maxWidth: 900, zIndex: 10 }}>

        {/* Enterprise */}
        <button className="land-card glass-panel" onClick={() => onSelect('enterprise')}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            alignItems: 'flex-start', padding: 36, borderRadius: 16, textAlign: 'left',
            cursor: 'pointer', color: 'var(--text-primary)', transition: 'all 0.28s cubic-bezier(0.25,1,0.5,1)' }}
          onMouseEnter={e => cardHover(e, 'var(--accent-cyan)', '0 12px 36px var(--accent-cyan-glow)')}
          onMouseLeave={cardLeave}>
          <div style={{ width: 50, height: 50, borderRadius: 12, background: 'var(--accent-cyan-glow)',
            border: '1px solid rgba(6,182,212,0.2)', color: 'var(--accent-cyan)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
            <Building2 size={22} />
          </div>
          <div>
            <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'var(--accent-cyan)',
              letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
              {t.auditBadge}</span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700, letterSpacing: '-0.02em',
              marginBottom: 12, color: 'var(--text-primary)' }}>{t.enterpriseTitle}</h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {t.enterpriseDesc}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 36,
            fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
            {t.beginAudit} <ArrowRight size={15} />
          </div>
        </button>

        {/* Partnership */}
        <button className="land-card glass-panel" onClick={() => onSelect('partnership')}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            alignItems: 'flex-start', padding: 36, borderRadius: 16, textAlign: 'left',
            cursor: 'pointer', color: 'var(--text-primary)', transition: 'all 0.28s cubic-bezier(0.25,1,0.5,1)' }}
          onMouseEnter={e => cardHover(e, 'var(--accent-purple)', '0 12px 36px var(--accent-purple-glow)')}
          onMouseLeave={cardLeave}>
          <div style={{ width: 50, height: 50, borderRadius: 12, background: 'var(--accent-purple-glow)',
            border: '1px solid rgba(139,92,246,0.2)', color: 'var(--accent-purple)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
            <Handshake size={22} />
          </div>
          <div>
            <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'var(--accent-purple)',
              letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
              {t.collabBadge}</span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700, letterSpacing: '-0.02em',
              marginBottom: 12, color: 'var(--text-primary)' }}>{t.partnershipTitle}</h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {t.partnershipDesc}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 36,
            fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-purple)' }}>
            {t.proposePartnership} <ArrowRight size={15} />
          </div>
        </button>
      </div>

      <p style={{ marginTop: 48, fontSize: '0.72rem', color: 'var(--text-muted)', zIndex: 10 }}>
        &copy; {new Date().getFullYear()} XyberClan. All rights reserved.
      </p>
    </div>
  );
}
