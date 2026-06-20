import { useState, useEffect } from 'react';
import { surveyFlows } from './questions';

// Detect device preferred language (fr or en)
function detectLang() {
  const lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return lang.startsWith('fr') ? 'fr' : 'en';
}

// Detect device color scheme preference
function detectTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useAppState() {
  const [lang, setLang] = useState(() => detectLang());
  const [theme, setTheme] = useState(() => detectTheme());
  const [selectedFlow, setSelectedFlow] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  // Apply theme to <html> data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const steps = selectedFlow ? surveyFlows[lang][selectedFlow].steps : [];
  const currentQuestion = steps[currentStep] || null;

  const isStepValid = () => {
    if (!currentQuestion) return false;
    if (currentQuestion.fields) {
      return currentQuestion.fields.every(f => !!answers[f.id]?.trim());
    }
    if (currentQuestion.placeholder && !currentQuestion.options) {
      return !!answers[currentQuestion.id]?.trim();
    }
    if (currentQuestion.multiple) {
      const val = answers[currentQuestion.id];
      return Array.isArray(val) ? val.length > 0 : !!val;
    }
    return !!answers[currentQuestion.id];
  };

  const handleFlowSelect = (flowKey) => {
    setSelectedFlow(flowKey);
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const advance = () => {
    if (currentStep < steps.length - 1) setCurrentStep(p => p + 1);
    else setIsCompleted(true);
  };

  const handleChoiceSelect = (qId, value) => {
    if (currentQuestion?.multiple) {
      setAnswers(p => {
        const prev = Array.isArray(p[qId]) ? p[qId] : [];
        const next = prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value];
        return { ...p, [qId]: next };
      });
    } else {
      setAnswers(p => ({ ...p, [qId]: value }));
      setTimeout(advance, 260);
    }
  };

  const handleFieldChange = (id, value) => setAnswers(p => ({ ...p, [id]: value }));
  const handleTextChange = (id, value) => setAnswers(p => ({ ...p, [id]: value }));

  const handleNext = () => { if (isStepValid()) advance(); };
  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(p => p - 1);
    else setSelectedFlow(null);
  };
  const handleRestart = () => {
    setSelectedFlow(null); setCurrentStep(0);
    setAnswers({}); setIsCompleted(false);
  };

  const generateSummary = () => {
    const title = surveyFlows[lang][selectedFlow].title.toUpperCase();
    let txt = `====================================\nXYBERCLAN: ${title}\n====================================\n\n`;
    steps.forEach(step => {
      if (step.fields) {
        txt += `--- REPRESENTATIVE ---\n`;
        step.fields.forEach(f => { txt += `${f.label.toUpperCase()}: ${answers[f.id] || 'N/A'}\n`; });
      } else {
        let rawVal = answers[step.id];
        let val = rawVal || 'N/A';
        if (step.options && rawVal) {
          if (step.multiple && Array.isArray(rawVal)) {
            val = rawVal.map(v => {
              const matched = step.options.find(o => (typeof o === 'object' ? o.value : o) === v);
              return matched ? (typeof matched === 'object' ? matched.label : matched) : v;
            }).join(", ");
          } else {
            const matched = step.options.find(o => (typeof o === 'object' ? o.value : o) === rawVal);
            if (matched) val = typeof matched === 'object' ? matched.label : matched;
          }
        }
        txt += `${step.question.replace(/\?$/, '').toUpperCase()}:\n> ${val}\n\n`;
      }
    });
    txt += `\nSubmitted via XyberClan Portal\n====================================`;
    return txt;
  };

  return {
    lang, setLang, theme, setTheme,
    selectedFlow, currentStep, answers, isCompleted,
    steps, currentQuestion,
    isStepValid, handleFlowSelect,
    handleChoiceSelect, handleFieldChange, handleTextChange,
    handleNext, handlePrev, handleRestart, generateSummary, setIsCompleted,
  };
}
