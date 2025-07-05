import React from 'react';
import type { LessonModule } from './types';
import { BlockchainIcon } from './components/icons/BlockchainIcon';
import { WalletIcon } from './components/icons/WalletIcon';
import { ZapIcon } from './components/icons/ZapIcon';
import { InfoIcon } from './components/icons/InfoIcon';
import { RiskIcon } from './components/icons/RiskIcon';
import { LineChartIcon } from './components/icons/LineChartIcon';
import { SearchIcon } from './components/icons/SearchIcon';
import { ToolboxIcon } from './components/icons/ToolboxIcon';
import { Glossary } from './components/Glossary';
import { Toolbox } from './components/Toolbox';
import { LayersIcon } from './components/icons/LayersIcon';
import { RepeatIcon } from './components/icons/RepeatIcon';


export const LESSON_MODULES: LessonModule[] = [
  {
    title: '基礎概念：區塊鏈與 Solana',
    icon: BlockchainIcon,
    steps: [
      {
        title: '咩係區塊鏈 (Blockchain)？',
        content: (
          <p>
            你可以將區塊鏈想像成一本公開、透明、而且無人可以竄改嘅數碼數簿。
            <br /><br />
            傳統銀行係中央化嘅，所有交易紀錄都由銀行保管。但係喺區塊鏈世界，呢本數簿係由成千上萬部電腦（稱為「節點」）一齊維護。每一次交易都會被記錄成一個「區塊」，然後好似鎖鏈咁扣埋上一個區塊，形成一條長長嘅「區塊鏈」。
            <br /><br />
            因為紀錄係分散儲存嘅，所以非常安全，好難被黑客攻擊或單方面修改。
          </p>
        ),
        keyPoint: '區塊鏈係一本分散、公開、唔可以亂改嘅數碼數簿。'
      },
      {
        title: '點解係 Solana？',
        content: (
          <p>
            世界上有好多唔同嘅區塊鏈，例如比特幣、以太坊。你用緊嘅銀包就係建基於 <strong>Solana</strong> 呢條區塊鏈。
            <br /><br />
            Solana 嘅最大優點係：<strong className="text-cyan-400">快</strong> 同 <strong className="text-cyan-400">平</strong>。
            <br /><br />
            相比起其他主流區塊鏈，喺 Solana 上面做交易（例如轉賬、買賣代幣）速度極快，通常幾秒鐘就搞掂，而且手續費（Gas Fee）非常低，好多時都只係港幣幾毫子嘅事。呢個特性令佢好適合新手同高頻交易。
          </p>
        ),
        keyPoint: 'Solana 係一條主打「快」同「平」嘅區塊鏈，所以交易體驗好好。'
      },
      {
        title: '咩係 SOL？',
        content: (
          <p>
            每條區塊鏈都有自己嘅原生代幣，用嚟支付網絡手續費。喺 Solana 上面，呢個代幣就係 <code className="bg-slate-700 text-amber-400 rounded px-1 py-0.5">SOL</code>。
            <br /><br />
            就好似你搭巴士要用八達通嘟一嘟，喺 Solana 網絡做任何操作，例如轉賬、用 Jupiter 買賣其他幣，你都需要有少量 SOL 喺銀包度用嚟俾「Gas Fee」（油費）。
            <br /><br />
            所以，請確保你嘅銀包時刻都有少少 SOL，例如 0.05 SOL，咁就萬無一失啦！
          </p>
        ),
        keyPoint: 'SOL 係 Solana 嘅「油費」，做任何操作都要用佢，所以銀包一定要有少量 SOL。'
      },
    ],
  },
  {
    title: '解構你嘅加密貨幣銀包',
    icon: WalletIcon,
    steps: [
      {
        title: '「自己保管」嘅銀包',
        content: (
          <p>
            你正使用嘅屬於「非託管」或「自己保管」(Self-custody) 銀包。呢個概念好重要！
            <br /><br />
            意思係，你對銀包入面嘅資產有 100% 嘅控制權。冇任何銀行、公司、甚至係 App 開發團隊可以郁到你啲錢。你係你自己嘅銀行。
            <br /><br />
            但權力愈大，責任愈大。呢個同時意味住，保管好銀包嘅責任完全落喺你自己身上。
          </p>
        ),
        keyPoint: '你係銀包嘅唯一主人，你全權控制資產，亦要自己承擔保管責任。'
      },
      {
        title: '助記詞 (Seed Phrase) = 終極鎖匙',
        content: (
          <p className="text-red-400 font-bold">
            呢個係成個課程最重要嘅一課！
            <br /><br />
            <span className="text-gray-200 font-normal">
              你開銀包嗰陣抄低嘅 12 或 24 個英文單字，就係你嘅「助記詞」(Seed Phrase / Mnemonic Phrase)。佢等於你銀行保險庫嘅終極鎖匙。
            </span>
            <br /><br />
            <strong className="text-amber-400">
              任何人知道你啲助記詞，就可以喺任何裝置恢復你個銀包，攞走你全部資產！
            </strong>
            <br /><br />
            <ul className="list-disc list-inside space-y-2 text-gray-200 font-normal">
              <li><strong className="text-red-500">絕對唔可以</strong> cap圖、儲存喺電腦、Email、或者任何連網嘅地方。</li>
              <li><strong className="text-red-500">絕對唔可以</strong> 話俾任何人知，包括你嘅屋企人同朋友，更加唔會有「客服」問你攞。</li>
              <li>最好嘅方法係用手抄喺幾張紙上面，分開存放喺安全嘅地方（例如夾萬）。</li>
            </ul>
          </p>
        ),
        keyPoint: '助記詞就係你嘅身家。物理抄低，安全收藏，打死都唔好俾人知！'
      },
      {
        title: '公開地址 (Public Address)',
        content: (
          <p>
            同助記詞相反，你嘅「公開地址」係可以俾任何人知嘅。佢就好似你嘅銀行戶口號碼。
            <br /><br />
            當你想接收加密貨幣（例如叫朋友轉 SOL 俾你），你就需要提供呢個地址。佢通常係一串好長嘅英文字母加數字，例如：<br />
            <code className="bg-slate-700 text-gray-300 rounded px-2 py-1 text-xs break-all mt-2 block">So11111111111111111111111111111111111111112</code> (呢個係 Solana 基金會地址，只作示範)
            <br /><br />
            喺你嘅銀包 App 入面，通常會見到「Receive」或者「Deposit」掣，撳入去就可以複製你嘅地址。同人分享呢個地址係完全安全嘅。
          </p>
        ),
        keyPoint: '公開地址用嚟收款，好似銀行戶口號碼，可以放心俾人知。'
      },
    ],
  },
  {
    title: '錢包大比拼',
    icon: LayersIcon,
    steps: [
        {
            title: '點解唔係得一個銀包？',
            content: (
                <p>
                    Solana 生態系好似一個繁榮嘅城市，入面有好多唔同嘅銀行俾你揀，每間銀行（銀包）都有自己嘅特色同服務。
                    <br/><br/>
                    Jupiter 嚴格嚟講係一個「交易聚合器」，雖然佢有內置錢包功能，但市場上亦都有好多專注於銀包功能嘅 App。佢哋全部都係建基於同一個 Solana 網絡，所以你嘅「助記詞」可以喺唔同嘅銀包 App 之間通用。
                    <br/><br/>
                    你可以將唔同嘅銀包 App 想像成唔同嘅銀行分行 App，雖然界面唔同，但你登入嘅都係同一個戶口（你嘅鏈上地址）。
                </p>
            ),
            keyPoint: '唔同嘅銀包 App 好似唔同銀行 App，界面服務各異，但背後都係控制緊你同一個鏈上戶口。'
        },
        {
            title: '主流選擇：Phantom',
            content: (
                <p>
                    Phantom 係 Solana 生態中最受歡迎、用戶最多嘅銀包之一，好多人都叫佢做「幻影錢包」。
                    <br/><br/>
                    <strong className="text-cyan-400">優點：</strong>
                    <ul className="list-disc list-inside space-y-2 my-2">
                        <li>用戶界面非常靚同易用，對新手極之友好。</li>
                        <li>內置強大嘅 NFT 展示牆，管理你嘅 NFT 收藏非常方便。</li>
                        <li>內置 Swap (交易)、Staking (質押) 等常用功能。</li>
                        <li>安全功能做得好，例如會對可疑交易作出警告。</li>
                    </ul>
                    <br/>
                    Phantom 提供瀏覽器擴充插件同手機 App，係大部分 Solana 用戶嘅首選。
                </p>
            ),
            keyPoint: 'Phantom (幻影錢包) 係 Solana 上最主流、功能最齊、對新手最友好嘅選擇。'
        },
        {
            title: '另一選擇：Solflare',
            content: (
                <p>
                    Solflare 係另一個非常強大同受歡迎嘅 Solana 銀包，同 Phantom 係主要競爭對手。
                     <br/><br/>
                    <strong className="text-cyan-400">優點：</strong>
                     <ul className="list-disc list-inside space-y-2 my-2">
                        <li>功能上同 Phantom 好接近，同樣提供 Swap, Staking, NFT 管理。</li>
                        <li>提供更進階嘅功能，有時會比 Phantom 更快支援 Solana 網絡上嘅新特性。</li>
                        <li>同樣有瀏覽器插件同手機 App。</li>
                    </ul>
                    <br/>
                    Phantom 同 Solflare 之間嘅選擇好多時係個人喜好。建議新手可以兩個都試吓，睇吓鍾意邊個嘅操作界面。
                </p>
            ),
            keyPoint: 'Solflare 係另一個強大嘅專業選擇，功能同 Phantom 旗鼓相當。'
        },
        {
            title: '跨鏈銀包：MetaMask',
            content: (
                <p>
                    你可能都聽過 MetaMask (小狐狸錢包) 嘅大名，佢係以太坊 (Ethereum) 同其他 EVM 兼容鏈嘅標準銀包。
                    <br/><br/>
                    以前 MetaMask 係唔支援 Solana 嘅。但而家透過一個叫「Snap」嘅插件技術，你都可以喺 MetaMask 入面管理你嘅 Solana 資產。
                    <br/><br/>
                    <strong className="text-amber-400">咩人會用？</strong>
                    <br/>
                    如果你唔單止玩 Solana，仲會玩以太坊、Polygon 等其他區塊鏈，用 MetaMask + Snap 就可以一個 App 管理晒所有資產，唔使裝幾個唔同嘅銀包 App。對於新手嚟講，建議先專注用好 Phantom 或 Solflare。
                </p>
            ),
            keyPoint: 'MetaMask 主要係俾玩開多條鏈嘅進階用戶，可以一個 App 管理唔同鏈嘅資產。'
        }
    ]
  },
  {
      title: '入金與出金',
      icon: RepeatIcon,
      steps: [
          {
              title: '咩係「入金」同「出金」？',
              content: (
                  <p>
                      「入金」同「出金」係加密貨幣世界常用嘅術語，其實就係指法幣同加密貨幣之間嘅兌換過程。
                      <br/><br/>
                      <strong className="text-cyan-400">入金 (On-ramp):</strong>
                      <br/>
                      將你手上嘅「法定貨幣」(Fiat)，例如港幣 (HKD) 或美金 (USD)，轉換成加密貨幣嘅過程。簡單嚟講就係「用錢買幣」。
                      <br/><br/>
                       <strong className="text-cyan-400">出金 (Off-ramp):</strong>
                      <br/>
                      同入金相反，將你持有嘅加密貨幣，轉換返做法定貨幣，然後存入你嘅銀行戶口。簡單嚟講就係「賣幣攞錢」。
                  </p>
              ),
              keyPoint: '入金 = 用錢買幣；出金 = 賣幣攞錢。呢個係連接現實世界同加密世界嘅橋樑。'
          },
          {
              title: '點樣入金 (用錢買幣)？',
              content: (
                  <div className="space-y-4">
                      <p>要將港幣變成 SOL，最常見嘅方法係透過「中心化交易所」(Centralized Exchange, CEX)。</p>
                      <div className="p-4 bg-slate-900/50 rounded-lg">
                          <h4 className="font-bold text-lg text-amber-400">流程概覽：</h4>
                          <ol className="list-decimal list-inside space-y-2 mt-2">
                              <li>揀一間信譽良好嘅 CEX (例如 Binance, Coinbase)，完成註冊同身份認證 (KYC)。</li>
                              <li>喺 CEX 上用信用卡或銀行轉帳買入加密貨幣 (通常係 USDT 或 SOL)。</li>
                              <li>將你喺 CEX 買到嘅幣，「提現」(Withdraw) 到你自己嘅 Solana 銀包地址 (例如 Phantom / Solflare)。</li>
                          </ol>
                      </div>
                      <p>另一個方法係 CEX 平台提供嘅 P2P (Peer-to-Peer) 交易，你可以直接用轉數快 (FPS) 同其他用戶買賣，平台作為中間人擔保交易安全。</p>
                  </div>
              ),
              keyPoint: '主流入金方法：喺大型交易所 (CEX) 用信用卡買幣，然後轉賬到自己嘅 Solana 銀包。'
          },
          {
              title: '點樣出金 (賣幣攞錢)？',
              content: (
                  <p>
                      出金嘅流程同入金啱啱好相反。
                      <br/><br/>
                      <strong className="text-cyan-400">流程概覽：</strong>
                      <ol className="list-decimal list-inside space-y-3 mt-2">
                          <li>
                              將你想出金嘅加密貨幣 (例如 SOL 或 USDC) 由你自己嘅 Solana 銀包，轉賬返去你喺 CEX 嘅「存款」(Deposit) 地址。
                          </li>
                          <li>
                              喺 CEX 將收到嘅加密貨幣賣出，換成法定貨幣 (例如 HKD 或 USD)。
                          </li>
                          <li>
                              最後，由 CEX 將法定貨幣提現到你自己嘅銀行戶口。
                          </li>
                      </ol>
                      <br/>
                      <strong className="text-red-400">重要提醒：</strong>無論入金定出金，喺 CEX 同你嘅個人銀包之間轉賬時，一定要再三確認地址正確無誤，並且揀啱區塊鏈網絡 (例如 Solana Network)，如果唔係啲錢可能會永遠消失！
                  </p>
              ),
              keyPoint: '出金流程：將幣由自己銀包轉去 CEX，賣咗佢，再由 CEX 提款返銀行。'
          }
      ]
  },
  {
    title: 'Jupiter 交易全攻略',
    icon: ZapIcon,
    steps: [
       {
        title: '咩係 DEX？Jupiter 又係咩？',
        content: (
          <p>
            DEX 全寫係 Decentralized Exchange，即係「去中心化交易所」。佢係一套運行喺區塊鏈上嘅智能合約，冇中央機構控制，任何人都可以直接用佢買賣。
            <br/><br/>
            而 Jupiter 嘅核心功能係一個「DEX 聚合器」(DEX Aggregator)。
            <br/><br/>
            喺 Solana 上面有好多唔同嘅 DEX。Jupiter 就好似一個超級格價網，佢會自動幫你掃晒成個 Solana 生態嘅所有 DEX，務求幫你搵到 <strong className="text-cyan-400">最抵嘅兌換率</strong>。用 Jupiter 交易，基本上可以確保你攞到嘅係當時最好嘅價錢。
          </p>
        ),
        keyPoint: 'Jupiter 係一個格價神器，自動幫你喺全網搵到最佳嘅買賣價錢。'
      },
      {
        title: '點樣 Swap (兌換)？',
        content: (
          <p>
            喺 Jupiter App 入面進行 Swap 非常簡單：
            <br/><br/>
            <ol className="list-decimal list-inside space-y-3">
                <li><strong>選擇你要付出嘅幣：</strong> 喺「You Pay」欄位，選擇你想賣出嘅幣 (例如 SOL)。</li>
                <li><strong>選擇你要得到嘅幣：</strong> 喺「You Receive」欄位，選擇你想買入嘅幣 (例如 USDC)。</li>
                <li><strong>輸入數量：</strong> 輸入你想賣出嘅數量，系統會自動計你可以得到幾多新幣。</li>
                <li><strong>檢查兌換率同手續費：</strong> Jupiter 會清楚顯示所有資料。</li>
                <li><strong>確認交易：</strong> 撳「Swap」掣，喺銀包批准交易，等幾秒就搞掂！</li>
            </ol>
          </p>
        ),
        keyPoint: '揀好要買同賣嘅幣，輸入數量，檢查清楚，確認交易，就係咁簡單！'
      },
      {
        title: '點樣搵潛力新幣？',
        content: (
          <p>
            喺 Jupiter 揀代幣嗰陣，你會見到幾個分類頁，例如 `Top`, `New`, `5M` (5分鐘) 等等。呢啲係幫你發現新代幣嘅工具：
            <br/><br/>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>Top (熱門):</strong> 交易量最高、市值最大嘅代幣，相對穩健。</li>
              <li><strong>New (新幣):</strong> 最近先出現嘅全新代幣。充滿機會，但亦都係<strong className="text-red-500">風險最高</strong>！</li>
              <li><strong>5M (5分鐘):</strong> 過去5分鐘內價格有劇烈變動嘅代幣，主要俾短線交易者用。</li>
              <li><strong>Cooking:</strong> Jupiter 團隊覺得值得留意、有潛力嘅項目清單，似「編輯精選」。</li>
            </ul>
          </p>
        ),
        keyPoint: 'Jupiter 提供工具幫你發現新幣，但風險由高到低約為：New > 5M > Top。投資前務必 DYOR。'
      },
      {
        title: '咩係限價單 (Limit Order)？',
        content: (
          <p>
            平時你撳「Swap」係用「市價單」即時交易。而「限價單」(Limit Order) 就係俾你預先設定一個心水價位去買或者賣。
            <br/><br/>
            你唔需要 24 小時睇住個市。當市場價格達到你設定嘅目標價，交易先會自動<strong className="text-cyan-400">觸發 (Trigger)</strong> 執行。
            <br/><br/>
            <strong>舉個例：</strong>而家 1 SOL 賣緊 150 USDC。你想等佢跌到 145 USDC 先買。你就可以落一張限價單：「當 1 SOL = 145 USDC 時，幫我買入 1 SOL」。
          </p>
        ),
        keyPoint: '限價單可以幫你喺心水價位自動買賣，唔使時刻睇住個市，慳返唔少心力。'
      },
      {
        title: '咩係定期定額 (Recurring / DCA)？',
        content: (
          <p>
            「Recurring」(循環交易) 係一個幫你執行「平均成本法」(Dollar-Cost Averaging, DCA) 嘅強大工具。
            <br/><br/>
            DCA 係一種長線投資策略，核心思想係<strong className="text-cyan-400">唔好一次過將所有資金投入市場 (All-in)</strong>，而係將佢分拆成多份，定期、定額咁買入，從而拉勻你嘅買入成本，減低喺市場高位一次過重倉嘅風險。
            <br/><br/>
             你可以喺 Jupiter 設定每日、每星期、甚至每個鐘用指定數量嘅 USDC 買入 SOL。
          </p>
        ),
        keyPoint: 'Recurring (DCA) 係一種分散投資時間嘅長線策略，可以拉勻成本，降低短期市場波動風險。'
      },
    ],
  },
  {
    title: '市場訊號與分析',
    icon: LineChartIcon,
    steps: [
      {
        title: '重要警告：這不是投資建議！',
        content: (
          <div className="space-y-4">
            <p className="text-xl text-red-400 font-bold">
              喺開始之前，請務必記住：呢個教學單元嘅目的係教你分析工具，絕對唔係提供任何買賣建議或財務意見。
            </p>
            <p>
              加密貨幣市場極度波動，任何投資決策都應該基於你自己嘅研究 (DYOR) 同風險承受能力。呢度介紹嘅工具同指標<strong className="text-amber-400">並唔能夠保證利潤</strong>，亦都有可能發出錯誤訊號。
            </p>
          </div>
        ),
        keyPoint: '本單元只作教育用途，並非投資建議。所有投資決策，責任自負。'
      },
      {
        title: '技術分析 (TA): 點樣分析「過往資料」？',
        content: (
           <div className="space-y-4">
            <p>
              技術分析 (TA) 就係透過研究過往嘅市場數據，主要係價錢同成交量，去預測未來價格走勢。簡單嚟講就係「睇圖表」。以下介紹兩個新手最常用嘅指標：
            </p>
            <div className="p-4 bg-slate-900/50 rounded-lg">
                <h4 className="font-bold text-lg text-cyan-400">1. 移動平均線 (Moving Average, MA)</h4>
                <p className="mt-2">
                  MA 係將過去一段時間嘅價格平均化，畫成一條線，用嚟睇出長期趨勢。
                </p>
            </div>
             <div className="p-4 bg-slate-900/50 rounded-lg">
                <h4 className="font-bold text-lg text-cyan-400">2. 相對強弱指數 (Relative Strength Index, RSI)</h4>
                <p className="mt-2">
                  RSI 係一個 0 至 100 之間嘅指標，用嚟判斷資產係咪「超買」(高於70) 或「超賣」(低於30)。
                </p>
            </div>
          </div>
        ),
        keyPoint: 'MA 用嚟睇趨勢，RSI 用嚟睇市場情緒係咪過熱或過冷。佢哋係輔助工具，唔係必勝秘笈。'
      },
      {
        title: '鏈上及社群分析: 點樣睇「其他人嘅動向」？',
        content: (
          <div className="space-y-4">
            <p>
              除咗睇圖表，我哋仲可以分析區塊鏈上嘅公開數據（鏈上數據）同社交媒體嘅風向，去了解其他人嘅行為。
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>交易量 (Volume):</strong> 代表市場關注度。</li>
              <li><strong>持幣地址數量 (Holders):</strong> 持續增加可能係好訊號。</li>
              <li><strong>社群熱度 (Social Sentiment):</strong> 上 Twitter (X) 睇吓討論氣氛，但要小心假消息。</li>
            </ul>
          </div>
        ),
        keyPoint: '結合交易量、持幣人數同社群討論，可以幫你判斷一個幣嘅真實熱度，但要小心假消息。'
      },
      {
        title: '總結：點樣組合運用？',
        content: (
          <div className="space-y-4">
            <p>
              一個比較穩健嘅分析方法，係將唔同嘅訊號結合埋一齊，互相印證，而唔係單靠一個指標做決定。你可以嘗試建立一個自己嘅檢查清單，結合基本面、技術面、數據面、社群面多角度分析。
            </p>
          </div>
        ),
        keyPoint: '唔好單靠一個指標，結合多角度分析，先至係精明投資者嘅做法。'
      }
    ],
  },
  {
    title: 'DeFi 基礎入門',
    icon: InfoIcon,
    steps: [
      {
        title: '提供流動性 (LP)',
        content: (
          <p>
            你可以將你手上嘅兩種資產（例如 SOL 同 USDC）一齊放入 DEX 嘅「資金池」(Liquidity Pool) 度，成為「流動性提供者」(LP)。你嘅角色就好似找換店，為其他人嘅買賣提供資金，從而賺取手續費。但要留意「無常損失」(Impermanent Loss) 嘅風險。
          </p>
        ),
        keyPoint: '做 LP 即係借錢俾個池賺手續費，但要小心幣價變動帶嚟嘅無常損失風險。'
      },
      {
        title: '質押 (Staking)',
        content: (
          <p>
            質押 (Staking) 係一個相對簡單同低風險嘅賺息方法。你可以將你嘅 SOL 委託俾一個「驗證者」(Validator)，幫手維護網絡安全，作為回報，網絡會派發新嘅 SOL 俾你，就好似收利息咁。你嘅 SOL 仍然喺你自己嘅控制之下，只係暫時鎖定咗。
          </p>
        ),
        keyPoint: 'Staking SOL 就好似做定期存款，鎖定資產幫手維護網絡安全，從而賺取利息。'
      },
      {
        title: '咩係 NFT？',
        content: (
          <p>
            NFT 全寫係 Non-Fungible Token，即係「非同質化代幣」。代表每一個都係<strong className="text-cyan-400">獨一無二、冇得取代</strong>嘅。你可以將佢想像成一張有獨立編號、有證書嘅數碼資產，例如數碼藝術品、遊戲道具、會員證等。
          </p>
        ),
        keyPoint: 'NFT 係獨一無二嘅數碼資產，好似有證書嘅數碼收藏品，證明你擁有佢。'
      },
    ],
  },
  {
    title: '風險管理與安全貼士',
    icon: RiskIcon,
    steps: [
      {
        title: '價格波動風險',
        content: (
          <p>
            加密貨幣係一個非常新興嘅市場，價格波動極大。一日之內升跌幾十個百分點係家常便飯。請務必遵守第一原則：<strong className="text-amber-400 text-lg block text-center my-4">「只投資你輸得起嘅錢。」</strong>
          </p>
        ),
        keyPoint: '幣價可升可跌，波幅極大，只用閒錢投資。'
      },
      {
        title: '騙案與釣魚攻擊',
        content: (
          <p>
            加密世界充滿騙徒。常見手法有釣魚網站、假空投、假冒客服。記住：<strong className="text-cyan-400">「永遠唔好點擊唔肯定嘅連結，永遠唔好批准唔清楚嘅交易。」</strong>
          </p>
        ),
        keyPoint: '對任何主動搵你嘅人同連結保持警惕，唔好貪心。'
      },
      {
        title: 'DYOR - 自己做足功課',
        content: (
          <p>
            喺加密世界，"Do Your Own Research" (DYOR) 係金科玉律。投資前，你應該自己去睇項目官網、白皮書、社群討論，了解清楚先做決定。
          </p>
        ),
        keyPoint: '唔好盲目跟風，投資前一定要自己研究清楚。'
      },
       {
        title: '旅程開始！',
        content: (
          <p>
            恭喜你！你已經完成咗呢個新手教學。呢個世界博大精深，今日學嘅只係冰山一角。最重要嘅係保持好奇心，由小額資金開始，親身實踐，慢慢累積經驗。祝你旅途愉快！
          </p>
        ),
        keyPoint: '恭喜完成！由小額開始，邊做邊學，安全第一！'
      },
    ],
  },
  {
    title: '加密貨幣詞彙表',
    icon: SearchIcon,
    component: Glossary,
  },
  {
    title: '常用工具箱',
    icon: ToolboxIcon,
    component: Toolbox,
  },
];