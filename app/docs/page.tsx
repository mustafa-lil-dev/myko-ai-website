import Link from 'next/link';
import { docs } from '@/lib/content';
export const metadata = { title: 'Documentation', description: 'Guides for installing and using Myko.', alternates: { canonical: '/docs' } };
export default function Docs() {
  return <div className="art" style={{ maxWidth: 'none' }}><h1>Documentation</h1><p className="desc">Install Myko, connect an AI provider, and learn each part of the workspace.</p>
    <div className="tiles">{docs.map(d => <Link key={d.slug} href={`/docs/${d.slug}`} className="glass card"><span className="mut mono" style={{ fontSize: 12 }}>{d.group}</span><h3 style={{ marginTop: 8 }}>{d.title}</h3><p>{d.desc}</p></Link>)}</div></div>;
}
