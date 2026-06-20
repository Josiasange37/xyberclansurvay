import { Sun, Moon, Globe } from 'lucide-react';
import logo from './assets/logo.png';

export function ControlBar({ lang, setLang, theme, setTheme, onRestart, showRestart, t }) {
  return (
    <div style={{
      padding: '12px 20px',
      borderBottom: '1px solid var(--border-color)',
      background: 'var(--bg-card)',
      backdropFilter: 'blur(20px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Brand */}
      <button onClick={onRestart} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '10px',
        fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.02em',
        color: 'var(--accent-cyan)', fontFamily: 'var(--font-sans)',
      }}>
        <img src={logo} alt="XyberClan Logo" style={{ height: '32px' }} />
        XYBERCLAN
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Language Switcher */}
        <div className="control-pill">
          <button
            className={`control-pill-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => setLang('en')}
            title="English"
          >
            <Globe size={11} style={{ marginRight: 4, verticalAlign: 'middle' }} />EN
          </button>
          <button
            className={`control-pill-btn${lang === 'fr' ? ' active' : ''}`}
            onClick={() => setLang('fr')}
            title="Français"
          >
            FR
          </button>
        </div>

        {/* Theme Switcher */}
        <div className="control-pill">
          <button
            className={`control-pill-btn${theme === 'dark' ? ' active' : ''}`}
            onClick={() => setTheme('dark')}
            title="Dark mode"
            style={{ padding: '5px 10px' }}
          >
            <Moon size={13} />
          </button>
          <button
            className={`control-pill-btn${theme === 'light' ? ' active' : ''}`}
            onClick={() => setTheme('light')}
            title="Light mode"
            style={{ padding: '5px 10px' }}
          >
            <Sun size={13} />
          </button>
        </div>

        {showRestart && (
          <button onClick={onRestart} style={{
            background: 'var(--bg-input)', border: '1px solid var(--border-color)',
            borderRadius: '8px', padding: '7px 14px', fontSize: '0.72rem',
            fontWeight: 700, color: 'var(--text-secondary)', cursor: 'pointer',
            fontFamily: 'var(--font-sans)', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            ↺ {t.restart}
          </button>
        )}
      </div>
    </div>
  );
}
