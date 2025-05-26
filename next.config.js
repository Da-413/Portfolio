/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // TypeScript 설정
  typescript: {
    ignoreBuildErrors: false, // TypeScript 에러시 빌드 중단
  },
  
  // ESLint 설정
  eslint: {
    ignoreDuringBuilds: false, // ESLint 에러시 빌드 중단
  },
  
  // 이미지 최적화
  images: {
    domains: [], // 외부 이미지 도메인이 있다면 여기에 추가
    unoptimized: false, // Vercel 배포시 false, GitHub Pages시 true
    formats: ['image/webp', 'image/avif'],
  },
  
  // Turbopack 설정 (Next.js 13+에서 안정화됨)
  turbopack: {
    // 필요한 경우 별칭 설정
    // resolveAlias: {
    //   '@': './src'
    // }
  },
  
  // 실험적 기능
  experimental: {
    optimizeCss: true,
    // turbo 제거 - turbopack으로 대체됨
  },
  
  // 성능 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 환경변수 설정
  // env: {
  //   CUSTOM_KEY: process.env.CUSTOM_KEY,
  // },
  
  // 리다이렉트 설정
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
  // 헤더 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  
  // GitHub Pages 배포시 아래 주석 해제
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name/',
}

module.exports = nextConfig