
import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { ModuleView } from './components/ModuleView';
import { LESSON_MODULES } from './constants';
import { WelcomeScreen } from './components/WelcomeScreen';

const App: React.FC = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState<number | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStart = useCallback(() => {
    setCurrentModuleIndex(0);
    setCurrentStepIndex(0);
  }, []);

  const handleSelectModule = useCallback((index: number) => {
    setCurrentModuleIndex(index);
    setCurrentStepIndex(0);
  }, []);

  const handleNext = useCallback(() => {
    if (currentModuleIndex === null) return;

    const currentModule = LESSON_MODULES[currentModuleIndex];
    if (currentModule.steps && currentStepIndex < currentModule.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else if (currentModuleIndex < LESSON_MODULES.length - 1) {
      // Auto-advance to the next module
      setCurrentModuleIndex(prev => (prev !== null ? prev + 1 : 0));
      setCurrentStepIndex(0);
    }
  }, [currentModuleIndex, currentStepIndex]);

  const handlePrev = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  }, [currentStepIndex]);

  if (currentModuleIndex === null) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  const currentModule = LESSON_MODULES[currentModuleIndex];
  const isLessonModule = !!currentModule.steps;
  
  const isFirstStep = isLessonModule ? currentStepIndex === 0 : true;
  const isLastStep = isLessonModule ? currentStepIndex === currentModule.steps.length - 1 : true;
  const isLastModule = currentModuleIndex === LESSON_MODULES.length - 1;

  const MainContent = currentModule.component || ModuleView;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-900 text-gray-200 font-sans">
      <Sidebar
        modules={LESSON_MODULES}
        currentModuleIndex={currentModuleIndex}
        onSelectModule={handleSelectModule}
      />
      <main className="flex-1 p-4 sm:p-6 md:p-10">
        {currentModule.component ? (
          <currentModule.component />
        ) : (
          <ModuleView
            module={currentModule}
            currentStepIndex={currentStepIndex}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            isLastModule={isLastModule}
          />
        )}
      </main>
    </div>
  );
};

export default App;