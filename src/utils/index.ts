import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ==================== CLASS NAME 유틸리티 ====================
/**
 * Tailwind CSS 클래스들을 조건부로 병합하는 함수
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ==================== 상수들 ====================
export const CONSTANTS = {
  // 애니메이션 지속시간
  ANIMATION: {
    fast: 150,
    normal: 300,
    slow: 500,
    stagger: 0.1
  },
  
  // 스크롤 설정
  SCROLL: {
    offset: 80,
    smooth_duration: 800
  },
  
  // 프로젝트 관련
  PROJECTS: {
    max_display: 6,
    featured_limit: 3,
    tech_limit: 5
  },
  
  // 메트릭 관련
  METRICS: {
    accuracy_threshold: 0.95,
    performance_threshold: 100,
    default_precision: 2
  },
  
  // 테마 색상
  COLORS: {
    primary: 'blue',
    secondary: 'purple',
    success: 'green',
    warning: 'orange',
    error: 'red',
    info: 'cyan'
  },
  
  // 연락처 정보 (실제 정보로 수정 필요)
  CONTACT: {
    email: 'data.scientist@example.com',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    kaggle: 'https://kaggle.com/your-profile'
  }
} as const

// ==================== 프로젝트 관련 헬퍼 ====================
/**
 * 프로젝트 제목을 URL 슬러그로 변환
 */
export function createProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * 프로젝트 상태에 따른 색상 반환
 */
export function getProjectStatusColor(status: string): string {
  const statusColors = {
    'completed': 'text-green-400',
    'in-progress': 'text-blue-400',
    'planning': 'text-orange-400',
    'archived': 'text-gray-400',
    'production': 'text-purple-400'
  }
  return statusColors[status as keyof typeof statusColors] || 'text-gray-400'
}

/**
 * 기술 스택에 따른 색상 반환
 */
export function getTechColor(tech: string): string {
  const techColors: Record<string, string> = {
    // Data Science
    'Python': 'blue',
    'R': 'blue',
    'Jupyter': 'orange',
    'Pandas': 'purple',
    'NumPy': 'blue',
    'Scikit-learn': 'orange',
    'TensorFlow': 'orange',
    'PyTorch': 'red',
    'Keras': 'red',
    
    // MLOps
    'Docker': 'blue',
    'Kubernetes': 'blue',
    'MLflow': 'blue',
    'Airflow': 'green',
    'Kubeflow': 'blue',
    'DVC': 'purple',
    'Git': 'orange',
    
    // Cloud & Infrastructure
    'AWS': 'orange',
    'GCP': 'blue',
    'Azure': 'blue',
    'Terraform': 'purple',
    
    // Databases
    'PostgreSQL': 'blue',
    'MongoDB': 'green',
    'Redis': 'red',
    'Elasticsearch': 'yellow',
    
    // Visualization
    'Matplotlib': 'blue',
    'Seaborn': 'blue',
    'Plotly': 'blue',
    'Tableau': 'orange',
    'PowerBI': 'yellow'
  }
  
  return techColors[tech] || 'gray'
}

// ==================== 데이터 포맷팅 ====================
/**
 * 숫자를 읽기 쉬운 형태로 포맷팅 (K, M, B 단위)
 */
export function formatLargeNumber(num: number): string {
  if (num < 1000) return num.toString()
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K`
  if (num < 1000000000) return `${(num / 1000000).toFixed(1)}M`
  return `${(num / 1000000000).toFixed(1)}B`
}

/**
 * 정확도/성능 지표 포맷팅 (퍼센트)
 */
export function formatAccuracy(accuracy: number): string {
  return `${(accuracy * 100).toFixed(2)}%`
}

/**
 * 실행 시간 포맷팅
 */
export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds.toFixed(1)}s`
  if (seconds < 3600) return `${(seconds / 60).toFixed(1)}m`
  return `${(seconds / 3600).toFixed(1)}h`
}

/**
 * 데이터 크기 포맷팅 (bytes)
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let size = bytes
  let unitIndex = 0
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`
}

/**
 * 날짜 포맷팅 (프로젝트용)
 */
export function formatProjectDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long'
  })
}

// ==================== 검증 및 유틸리티 ====================
/**
 * 이메일 유효성 검사
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * GitHub URL 유효성 검사
 */
export function isValidGitHubUrl(url: string): boolean {
  const githubRegex = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/
  return githubRegex.test(url)
}

/**
 * 문자열 자르기 (말줄임표)
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * 랜덤 ID 생성
 */
export function generateId(prefix: string = 'ml'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// ==================== 성능 최적화 ====================
/**
 * 디바운스 함수 (검색, 필터링용)
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * 스로틀 함수 (스크롤 이벤트용)
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * 이미지 사전 로드
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// ==================== 스크롤 유틸리티 ====================
/**
 * 부드러운 스크롤
 */
export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId)
  if (!element) return
  
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - CONSTANTS.SCROLL.offset
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

/**
 * 현재 스크롤 진행률 (0-1)
 */
export function getScrollProgress(): number {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  return scrollHeight > 0 ? scrollTop / scrollHeight : 0
}

// ==================== 로컬 스토리지 (테마, 설정용) ====================
/**
 * 안전한 로컬 스토리지 설정
 */
export function setStorageItem(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.warn('로컬 스토리지 저장 실패:', error)
  }
}

/**
 * 안전한 로컬 스토리지 가져오기
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.warn('로컬 스토리지 읽기 실패:', error)
    return defaultValue
  }
}

// ==================== 분석 및 추적 ====================
/**
 * 프로젝트 클릭 추적
 */
export function trackProjectView(projectTitle: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_view', {
      project_name: projectTitle,
      event_category: 'engagement'
    })
  }
}

/**
 * 외부 링크 클릭 추적
 */
export function trackExternalLink(url: string, linkType: 'github' | 'demo' | 'detail'): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'external_link_click', {
      link_url: url,
      link_type: linkType,
      event_category: 'outbound'
    })
  }
}