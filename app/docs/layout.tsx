import DocsNav from '@/components/DocsNav';
import { docs } from '@/lib/content';
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <div className="wrap docs"><DocsNav docs={docs.map(({ slug, title, group, desc }) => ({ slug, title, group, desc }))} /><div style={{ minWidth: 0 }}>{children}</div></div>;
}
