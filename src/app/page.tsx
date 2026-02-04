import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header>
        <a href="#" className="logo">
          <Image src="/logo.png" alt="YouShu Logo" width={24} height={24} />
          有书
        </a>
        <nav className="nav-links">
          <a href="#features">功能</a>
          <a href="#typography">排版</a>
          <a href="#download">立即获取</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero container">
          <h1>既然阅读，何不极致</h1>
          <p>专业级多端阅读终端。为深度阅读、笔记思考与 AI 协作而生。</p>
          <div className="hero-visual">
            <Image
              src="/hero_minimal.webp"
              alt="YouShu Interface"
              width={900}
              height={600}
              className="hero-image"
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section container">
          <div className="section-head">
            <h2>核心生产力</h2>
            <p>全面覆盖从获取到思考的全流程。</p>
          </div>

          <div className="feature-layout">
            {/* AI Agent - Large */}
            <div className="feat-card feat-large">
              <div className="feat-content">
                <i className="fas fa-microchip"></i>
                <h3>AI 智能 Agent</h3>
                <p>深度集成大模型。不仅是摘要，更能协助您搭建专属阅读助手，实现书籍内容的实时对话与深度解析。</p>
              </div>
              <div className="feat-media">
                <Image src="/feat_ai.png" alt="AI Agent" width={600} height={400} />
              </div>
            </div>

            {/* Format Support */}
            <div className="feat-card">
              <div className="feat-media">
                <Image src="/hero_minimal.webp" alt="Format Support" width={400} height={225} style={{ objectFit: 'contain', padding: '20px' }} />
              </div>
              <i className="fas fa-file-invoice"></i>
              <h3>全格式支持</h3>
              <p>PDF、ePub、Mobi、Zip、Awz 等主流格式。打破内容读取的最后一道屏障。</p>
            </div>

            {/* TTS */}
            <div className="feat-card">
              <div className="feat-media" style={{ background: '#fbfbfd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fas fa-volume-up" style={{ fontSize: '60px', color: '#d2d2d7' }}></i>
              </div>
              <i className="fas fa-wave-square"></i>
              <h3>TTS 听书系统</h3>
              <p>EdgeTTS 与豆包 TTS 驱动。上百种自然人声，支持多国语言，让阅读不止于视线。</p>
            </div>

            {/* Note System - Large */}
            <div className="feat-card feat-large feat-reverse">
              <div className="feat-content">
                <i className="fas fa-pen-nib"></i>
                <h3>块状知识体系</h3>
                <p>突破传统笔记。采用高度灵活的块状结构，让您的思考可以被无限组合与检索，搭建真正的个人第二大脑。</p>
              </div>
              <div className="feat-media">
                <Image src="/feat_notes.png" alt="Notes System" width={600} height={400} />
              </div>
            </div>

            {/* Sync */}
            <div className="feat-card">
              <div className="feat-media">
                <Image src="/feat_sync.png" alt="Cloud Sync" width={400} height={250} />
              </div>
              <i className="fas fa-sync"></i>
              <h3>全渠道协议同步</h3>
              <p>WebDAV 与主流网盘全覆盖。支持局域网 P2P 互传，让您的阅读进度在万物间同步。</p>
            </div>

            {/* Reading Control */}
            <div className="feat-card">
              <div className="feat-media">
                <Image src="/feat_reading.png" alt="Layout Control" width={400} height={250} />
              </div>
              <i className="fas fa-sliders"></i>
              <h3>极致控制体系</h3>
              <p>简繁转换、横竖排切换、对比翻译与拟真翻页。每一行文字的呈现，都在您的掌控之中。</p>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography" className="experience-block">
          <div className="container">
            <div className="section-head">
              <h2>排版的意境</h2>
              <p className="typo-subtitle">内置"京华老宋体"，在数字屏幕重现宣纸墨香。</p>
            </div>
            <div className="snippet-view">
              「 夫阅读者，心灵之远行也。有书，载道之具，极致之选。 」
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="download-footer container">
          <h2>选择您的极致终端</h2>
          <div className="platform-row">
            <a href="https://youshu.icu/download/android" className="btn-ghost">Android</a>
            <a href="https://youshu.icu/download/ios" className="btn-ghost">iOS</a>
            <a href="https://youshu.icu/download/harmonyos" className="btn-ghost">HarmonyOS</a>
            <a href="https://youshu.icu/download/windows" className="btn-ghost">Windows</a>
            <a href="https://youshu.icu/download/macos" className="btn-ghost">macOS</a>
          </div>
          <p className="download-notice">下载即代表您同意服务条款与隐私政策。</p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2026 有书 (YouShu). 版权所有。</p>
        </div>
      </footer>
    </>
  );
}
