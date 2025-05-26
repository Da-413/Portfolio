import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko" className="scroll-smooth">
      <Head>
        {/* 기본 문서 설정 */}
        <meta charSet="utf-8" />
        
        {/* DNS 프리페치 및 프리커넥트 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* 폰트 로딩 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* 파비콘 및 아이콘 (기본 favicon.ico만 사용) */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* 기본 manifest가 있다면 추가, 없으면 제거 */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        
        {/* 브라우저 설정 */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* 검색 엔진 최적화 */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* 기본 메타 태그 (페이지별로 덮어쓰기 가능) */}
        <meta name="description" content="데이터 사이언티스트 & MLOps 엔지니어의 포트폴리오" />
        <meta name="keywords" content="데이터 사이언스, MLOps, 머신러닝, AI, Python, 포트폴리오" />
        
        {/* Open Graph 기본값 */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Data Scientist Portfolio" />
        <meta property="og:locale" content="ko_KR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yourusername" />
        
        {/* 성능 최적화를 위한 리소스 힌트 */}
        {/* 실제 폰트 파일이 있을 때만 프리로드 */}
        {/* <link rel="preload" href="/fonts/Inter-var.woff2" as="font" type="font/woff2" crossOrigin="" /> */}
        
        {/* 초기 다크 테마 스크립트 (FOUC 방지) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme') || 'dark';
                  var resolvedTheme = theme === 'system' 
                    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                    : theme;
                  
                  document.documentElement.setAttribute('data-theme', resolvedTheme);
                  document.documentElement.classList.add(resolvedTheme);
                  
                  // CSS 변수 설정
                  if (resolvedTheme === 'dark') {
                    document.documentElement.style.setProperty('--bg-primary', '#0f172a');
                    document.documentElement.style.setProperty('--bg-secondary', '#1e293b');
                    document.documentElement.style.setProperty('--text-primary', '#f8fafc');
                    document.documentElement.style.setProperty('--text-secondary', '#cbd5e1');
                  } else {
                    document.documentElement.style.setProperty('--bg-primary', '#ffffff');
                    document.documentElement.style.setProperty('--bg-secondary', '#f8fafc');
                    document.documentElement.style.setProperty('--text-primary', '#0f172a');
                    document.documentElement.style.setProperty('--text-secondary', '#475569');
                  }
                } catch (e) {
                  // 오류 발생 시 기본 다크 테마
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        
        {/* 스크롤 진행률을 위한 CSS 변수 초기화 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.style.setProperty('--scroll-y', '0px');
              document.documentElement.style.setProperty('--scroll-progress', '0');
            `,
          }}
        />
        
        {/* Google Analytics (환경변수가 있을 때만) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    allow_ad_features: false
                  });
                `,
              }}
            />
          </>
        )}
        
        {/* 구조화된 데이터 (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              jobTitle: 'Data Scientist & MLOps Engineer',
              description: '데이터 사이언스와 MLOps 분야의 전문가',
              url: 'https://your-portfolio-domain.com',
              sameAs: [
                'https://github.com/your-username',
                'https://linkedin.com/in/your-profile',
                'https://kaggle.com/your-profile'
              ],
              knowsAbout: [
                'Machine Learning',
                'Deep Learning',
                'MLOps',
                'Data Science',
                'Python',
                'TensorFlow',
                'PyTorch',
                'Docker',
                'Kubernetes'
              ]
            })
          }}
        />
      </Head>
      
      <body className="bg-slate-900 text-slate-100 antialiased">
        {/* 네이티브 스크롤 동작 개선 */}
        <div id="scroll-container" className="min-h-screen">
          <Main />
        </div>
        
        {/* Next.js 스크립트 */}
        <NextScript />
        
        {/* 추가 성능 모니터링 스크립트 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 페이지 로드 성능 측정
              window.addEventListener('load', function() {
                if ('performance' in window) {
                  setTimeout(function() {
                    var timing = performance.timing;
                    var loadTime = timing.loadEventEnd - timing.navigationStart;
                    
                    if (window.gtag && loadTime > 0) {
                      gtag('event', 'page_load_time', {
                        event_category: 'Performance',
                        value: Math.round(loadTime),
                        custom_map: {metric1: 'load_time'}
                      });
                    }
                  }, 0);
                }
              });
              
              // 스크롤 진행률 추적을 위한 리스너
              let ticking = false;
              function updateScrollProgress() {
                const scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
                document.documentElement.style.setProperty('--scroll-progress', scrollProgress);
                document.documentElement.style.setProperty('--scroll-y', window.pageYOffset + 'px');
                ticking = false;
              }
              
              function onScroll() {
                if (!ticking) {
                  requestAnimationFrame(updateScrollProgress);
                  ticking = true;
                }
              }
              
              window.addEventListener('scroll', onScroll, { passive: true });
              updateScrollProgress(); // 초기값 설정
            `,
          }}
        />
      </body>
    </Html>
  )
}