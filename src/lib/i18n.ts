import type { Localized } from '@/content/products';

export function pick(loc: 'en' | 'ar', value: Localized): string {
  return value[loc];
}
