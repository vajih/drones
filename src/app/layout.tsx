import type { Metadata } from 'next';
import './globals-import';

export const metadata: Metadata = {
  metadataBase: new URL('https://sterlingautonomoussystems.com'),
  title: {
    default: 'Sterling Autonomous Systems',
    template: '%s · Sterling Autonomous Systems',
  },
  description:
    'The end-to-end platform to stand up a sovereign unmanned vehicle industry across air, land, and maritime domains.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
