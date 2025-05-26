// 환경변수 타입 정의
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    NEXT_PUBLIC_SITE_URL: string
    NEXT_PUBLIC_GA_ID?: string
    NEXT_PUBLIC_EMAIL: string
    NEXT_PUBLIC_GITHUB_USERNAME: string
  }
}

// 윈도우 객체 확장
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// 모듈 선언
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}

// CSS 모듈
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

export {}
