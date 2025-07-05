
import React from 'react';
import type { LessonModule } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface ModuleViewProps {
  module: LessonModule;
  currentStepIndex: number;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isLastModule: boolean;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  module,
  currentStepIndex,
  onNext,
  onPrev,
  isFirstStep,
  isLastStep,
  isLastModule
}) => {
  if (!module.steps || module.steps.length === 0) {
    return (
        <div className="bg-slate-800/50 rounded-2xl shadow-2xl shadow-slate-900/50 w-full h-full flex flex-col p-6 sm:p-8 justify-center items-center">
            <h2 className="text-2xl font-bold text-white">內容準備中</h2>
            <p className="text-slate-400 mt-2">呢個單元暫時未有教學步驟。</p>
        </div>
    );
  }
  
  const currentStep = module.steps[currentStepIndex];
  const progressPercentage = ((currentStepIndex + 1) / module.steps.length) * 100;

  return (
    <div className="bg-slate-800/50 rounded-2xl shadow-2xl shadow-slate-900/50 w-full h-full flex flex-col p-6 sm:p-8">
      {/* Header and Progress */}
      <div className="mb-6">
        <div className="flex items-center space-x-4 mb-4">
           <div className="p-2 bg-slate-700 rounded-lg">
             <module.icon className="w-8 h-8 text-cyan-400" />
           </div>
           <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{module.title}</h2>
            <p className="text-slate-400">步驟 {currentStepIndex + 1} / {module.steps.length}</p>
           </div>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5">
          <div
            className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pr-2">
        <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-4">{currentStep.title}</h3>
        <div className="prose prose-invert prose-lg text-slate-300 max-w-none space-y-4">
          {currentStep.content}
        </div>
      </div>
      
      {/* Key Point and Navigation */}
      <div className="mt-8 pt-6 border-t border-slate-700">
         <div className="bg-slate-900/70 p-4 rounded-lg mb-6 border-l-4 border-amber-400">
            <p className="font-semibold text-amber-300">重點：</p>
            <p className="text-slate-200">{currentStep.keyPoint}</p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={onPrev}
            disabled={isFirstStep}
            className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-1" />
            上一頁
          </button>
          <button
            onClick={onNext}
            className={`flex items-center px-6 py-2 rounded-lg text-white font-semibold transition-colors ${
              isLastStep
                ? 'bg-green-600 hover:bg-green-500'
                : 'bg-purple-600 hover:bg-purple-500'
            }`}
          >
            {isLastStep ? (isLastModule ? '完成教學' : '下一單元') : '下一頁'}
            {!isLastStep && <ChevronRightIcon className="w-5 h-5 ml-1" />}
          </button>
        </div>
      </div>
    </div>
  );
};