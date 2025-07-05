
import React from 'react';
import type { LessonModule } from '../types';
import { CheckIcon } from './icons/CheckIcon';

interface SidebarProps {
  modules: LessonModule[];
  currentModuleIndex: number;
  onSelectModule: (index: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ modules, currentModuleIndex, onSelectModule }) => {
  return (
    <aside className="w-full md:w-72 lg:w-80 bg-slate-800/50 md:bg-slate-800 p-4 md:p-6 md:border-r border-slate-700 flex-shrink-0">
      <h1 className="text-xl font-bold text-white mb-6">學習單元</h1>
      <nav>
        <ul className="space-y-2">
          {modules.map((module, index) => {
            const isCompleted = index < currentModuleIndex;
            const isActive = index === currentModuleIndex;
            
            return (
              <li key={module.title}>
                <button
                  onClick={() => onSelectModule(index)}
                  className={`w-full text-left flex items-center p-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-purple-600/80 text-white font-semibold'
                      : 'hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <div className="w-6 h-6 mr-3 flex-shrink-0">
                    {isCompleted ? (
                      <CheckIcon className="w-6 h-6 text-green-400" />
                    ) : (
                      <module.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                    )}
                  </div>
                  <span className="flex-1">{module.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
