import React from 'react';
import { BlockchainIcon } from './icons/BlockchainIcon';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-block p-4 bg-slate-800 rounded-full mb-6">
          <BlockchainIcon className="w-16 h-16 text-cyan-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          歡迎嚟到加密貨幣新手教學
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          (廣東話版)
        </p>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          呢個教學會用最簡單直接嘅廣東話，帶你由零開始，了解加密貨幣嘅基本概念、必備工具、交易方法同埋安全知識，特別適合 Solana 生態嘅新手。
        </p>
        <button
          onClick={onStart}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/30"
        >
          即刻開始學習
        </button>
      </div>
    </div>
  );
};