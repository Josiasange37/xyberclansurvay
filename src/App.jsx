import './App.css';
import { useAppState } from './useAppState';
import { uiTranslations } from './questions';
import { ControlBar } from './ControlBar';
import { LandingPage } from './LandingPage';
import { WizardView } from './WizardView';
import { ReviewPage } from './ReviewPage';

function App() {
  const state = useAppState();
  const {
    lang, setLang, theme, setTheme,
    selectedFlow, steps, currentStep, currentQuestion,
    answers, isCompleted, isStepValid,
    handleFlowSelect, handleChoiceSelect, handleFieldChange,
    handleTextChange, handleNext, handlePrev, handleRestart,
    generateSummary, setIsCompleted,
  } = state;

  const t = uiTranslations[lang];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',
      background: 'var(--bg-root)', position: 'relative' }}>

      <ControlBar
        lang={lang} setLang={setLang}
        theme={theme} setTheme={setTheme}
        onRestart={handleRestart}
        showRestart={!!selectedFlow}
        t={t}
      />

      {/* Landing */}
      {!selectedFlow && (
        <LandingPage t={t} onSelect={handleFlowSelect} />
      )}

      {/* Wizard Steps */}
      {selectedFlow && !isCompleted && (
        <WizardView
          steps={steps}
          currentStep={currentStep}
          currentQuestion={currentQuestion}
          answers={answers}
          selectedFlow={selectedFlow}
          t={t}
          handleChoiceSelect={handleChoiceSelect}
          handleFieldChange={handleFieldChange}
          handleTextChange={handleTextChange}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isStepValid={isStepValid}
        />
      )}

      {/* Review + Submit */}
      {selectedFlow && isCompleted && (
        <ReviewPage
          steps={steps}
          answers={answers}
          selectedFlow={selectedFlow}
          t={t}
          lang={lang}
          onBack={() => setIsCompleted(false)}
          onRestart={handleRestart}
          generateSummary={generateSummary}
        />
      )}
    </div>
  );
}

export default App;
