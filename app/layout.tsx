import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'Myko — AI-native developer workspace', template: '%s — Myko' },
  description: 'Myko puts a terminal, code editor, source control, AI agent and live web preview in one desktop workspace.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'Myko', title: 'Myko — AI-native developer workspace', description: 'Terminal, editor, Git, AI and live preview in one desktop workspace.', images: [{ url: '/shots/ai-workflow.png', width: 1600, height: 1000, alt: 'Myko AI workflow' }] },
  twitter: { card: 'summary_large_image', title: 'Myko — AI-native developer workspace', images: ['/shots/ai-workflow.png'] },
};
export const viewport: Viewport = { themeColor: '#06080b' };
export default function Root({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><div className="bg" aria-hidden /><a href="#main" className="sr btn pri">Skip to content</a><Nav /><main id="main">{children}</main><Footer /></body></html>);
}
