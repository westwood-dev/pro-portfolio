/// <reference types="node" />
import '@testing-library/jest-dom';

// Mock IntersectionObserver
const mockIntersectionObserver = class IntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {
    // Implementation not needed for tests
  }

  disconnect(): void {
    // Implementation not needed for tests
  }

  observe(): void {
    // Implementation not needed for tests
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve(): void {
    // Implementation not needed for tests
  }
};

(global as any).IntersectionObserver = mockIntersectionObserver;