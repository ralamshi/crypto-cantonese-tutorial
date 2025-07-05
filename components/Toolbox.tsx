import React from 'react';
import { ToolboxIcon } from './icons/ToolboxIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const tools = [
  {
    name: 'Jupiter Exchange',
    description: '我哋教學嘅主角，Solana 上最強大嘅交易聚合器。記得將官網加入書籤，避免釣魚網站。',
    url: 'https://jup.ag/',
    category: '核心工具',
  },
  {
    name: 'Solscan',
    description: 'Solana 區塊鏈瀏覽器。你可以用佢嚟查詢任何交易紀錄、錢包地址嘅詳細資料，就好似查銀行月結單咁。',
    url: 'https://solscan.io/',
    category: '核心工具',
  },
  {
    name: 'CoinGecko',
    description: '權威嘅加密貨幣數據平台，提供即時價格、市值、交易量等綜合資訊。',
    url: 'https://www.coingecko.com/zh-tw',
    category: '市場行情',
  },
  {
    name: 'CoinMarketCap',
    description: '另一個全球最大嘅加密貨幣數據網站，同 CoinGecko 一樣係必備嘅行情工具。',
    url: 'https://coinmarketcap.com/',
    category: '市場行情',
  },
    {
    name: 'DexScreener',
    description: '強大嘅 DeFi 圖表工具。用嚟睇各種代幣嘅實時價格K線、交易量同圖表走勢，係技術分析嘅好幫手。',
    url: 'https://dexscreener.com/solana',
    category: '市場行情',
  },
  {
    name: 'CoinDesk',
    description: '國際領先嘅加密貨幣新聞與分析平台，想了解產業動態、政策變化，睇佢就冇錯。',
    url: 'https://www.coindesk.com/',
    category: '新聞資訊',
  },
   {
    name: "Jupiter's X (Twitter)",
    description: '想知 Jupiter 官方有咩最新消息、新功能或者活動？追蹤佢哋嘅官方 X (前稱 Twitter) 就最快最準。',
    url: 'https://x.com/JupiterExchange',
    category: '新聞資訊',
  },
];

export const Toolbox: React.FC = () => {
  const categories = ['核心工具', '市場行情', '新聞資訊'];

  return (
    <div className="bg-slate-800/50 rounded-2xl shadow-2xl shadow-slate-900/50 w-full h-full flex flex-col p-6 sm:p-8">
       <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 bg-slate-700 rounded-lg">
          <ToolboxIcon className="w-8 h-8 text-cyan-400" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">常用工具箱</h2>
          <p className="text-slate-400">幫你喺加密世界航行嘅實用工具。</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {categories.map(category => (
            <div key={category}>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">{category}</h3>
                <div className="space-y-4">
                    {tools.filter(tool => tool.category === category).map((tool) => (
                      <div key={tool.name} className="bg-slate-900/70 p-5 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-cyan-300">{tool.name}</h4>
                          <p className="text-slate-400 mt-1">{tool.description}</p>
                        </div>
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                        >
                          前往
                          <ExternalLinkIcon className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};