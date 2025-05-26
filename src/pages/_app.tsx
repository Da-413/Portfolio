import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import { Layout } from '@/components/layout/Layout'
import { ThemeProvider } from '@/hooks/useTheme'
import '@/styles/globals.css'

// 타입 정의
interface CustomAppProps extends AppProps {
  Component: AppProps['Component'] & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
  }
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  // 페이지별 커스텀 레이아웃이 있는지 확인
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  // 전역 설정 및 초기화
  useEffect(() => {
    // 스크롤 복원 설정
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <>
      <Head>
        {/* 기본 메타 태그 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* 기본 SEO */}
        <meta name="description" content="데이터 사이언티스트 & MLOps 엔지니어 포트폴리오" />
        <meta name="keywords" content="데이터 사이언스, MLOps, 머신러닝, AI, Python, 포트폴리오" />
        <meta name="author" content="Your Name" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Data Scientist Portfolio" />
        <meta property="og:description" content="데이터 사이언티스트 & MLOps 엔지니어의 포트폴리오입니다." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Scientist Portfolio" />
        <meta name="twitter:description" content="데이터 사이언티스트 & MLOps 엔지니어의 포트폴리오입니다." />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* 파비콘 */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* 폰트는 CSS에서 @import로 로딩 */}
        
        {/* 테마 색상 */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        
        {/* 브라우저 설정 */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>

      {/* 전역 스크립트 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // 페이지 로드 최적화
            (function() {
              // FOUC (Flash of Unstyled Content) 방지
              document.documentElement.style.visibility = 'visible';
              
              // 스크롤 성능 최적화
              let ticking = false;
              function updateScrollPosition() {
                document.documentElement.style.setProperty('--scroll-y', window.scrollY + 'px');
                ticking = false;
              }
              
              function onScroll() {
                if (!ticking) {
                  requestAnimationFrame(updateScrollPosition);
                  ticking = true;
                }
              }
              
              window.addEventListener('scroll', onScroll, { passive: true });
              
              // 초기 스크롤 위치 설정
              updateScrollPosition();
            })();
          `,
        }}
      />
    </>
  )
}

export default MyApp