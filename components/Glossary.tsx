import React, { useState, useMemo } from 'react';
import { SearchIcon } from './icons/SearchIcon';

const glossaryData = [
  { term: '區塊鏈 (Blockchain)', explanation: '分散式帳本技術，記錄所有交易的不可變數據庫。好似一本全公開、冇人可以刪改嘅數簿。' },
  { term: '挖礦 (Mining)', explanation: '驗證交易並新增區塊的過程，礦工會獲得新幣作為獎勵。' },
  { term: '私鑰 (Private Key)', explanation: '控制你加密貨幣嘅終極密碼，絕對要保密，唔可以俾任何人知。' },
  { term: '公鑰 (Public Key)', explanation: '對外公開嘅地址，好似銀行戶口號碼，用嚟接收加密貨幣。' },
  { term: '錢包 (Wallet)', explanation: '用嚟儲存私鑰同管理加密貨幣嘅軟體或硬體工具。' },
  { term: '交易所 (Exchange)', explanation: '買賣加密貨幣嘅平台，分為中心化(CEX)同去中心化(DEX)。' },
  { term: 'DeFi (去中心化金融)', explanation: '基於區塊鏈嘅金融服務，唔需要傳統銀行呢類中介機構。' },
  { term: 'NFT (非同質化代幣)', explanation: '代表獨一無二資產嘅數碼代幣，常用於數碼藝術品、收藏品、遊戲道具等。' },
  { term: '空投 (Airdrop)', explanation: '項目方為咗推廣，免費發放代幣俾早期用戶或特定錢包地址嘅行為。' },
  { term: '牛市 (Bull Market)', explanation: '市場價格普遍持續上升嘅趨勢，市場氣氛樂觀。' },
  { term: '熊市 (Bear Market)', explanation: '市場價格普遍持續下降嘅趨勢，市場氣氛悲觀。' },
  { term: 'Gas Fee', explanation: '喺區塊鏈上進行交易或執行智能合約所需嘅手續費，Solana 嘅 Gas Fee 相對低廉。' },
  { term: 'Rugpull', explanation: '一種騙局，項目開發者突然放棄項目並捲走投資者資金。' },
];

export const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return glossaryData;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return glossaryData.filter(
      item =>
        item.term.toLowerCase().includes(lowercasedTerm) ||
        item.explanation.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

  return (
    <div className="bg-slate-800/50 rounded-2xl shadow-2xl shadow-slate-900/50 w-full h-full flex flex-col p-6 sm:p-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 bg-slate-700 rounded-lg">
          <SearchIcon className="w-8 h-8 text-cyan-400" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">加密貨幣詞彙表</h2>
          <p className="text-slate-400">快速搜尋常用術語。</p>
        </div>
      </div>

      <div className="mb-6 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜尋術語 (例如: NFT, 牛市...)"
          className="w-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon className="w-5 h-5 text-slate-400" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 space-y-3">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.term} className="bg-slate-900/70 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-cyan-300">{item.term}</h3>
              <p className="text-slate-300 mt-1">{item.explanation}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-slate-400">搵唔到相關嘅術語喎。</p>
          </div>
        )}
      </div>
    </div>
  );
};