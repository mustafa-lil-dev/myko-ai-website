import Link from 'next/link';
import { notFound } from 'next/navigation';
import Shot from '@/components/Shot';
import { features, docs } from '@/lib/content';
export const dynamicParams = false;
export const generateStaticParams = () => features.map(f => ({ slug: f.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const f = features.find(x => x.slug === slug); if (!f) return {};
  return { title: f.name, description: f.tag + ' ' + f.blurb, alternates: { canonical: `/features/${f.slug}` } };
}
export default async function Feature({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const f = features.find(x => x.slug === slug); if (!f) notFound();
  const doc = docs.find(d => d.slug === (slug === 'source-control' ? 'git' : slug));
  const i = features.indexOf(f), nx = features[(i + 1) % features.length];
  return <div className="wrap"><div className="page-h"><Link href="/features" className="mut" style={{ fontSize: 14 }}>← All features</Link><h1 style={{ marginTop: 18 }}>{f.tag}</h1><p className="lead" style={{ maxWidth: 680 }}>{f.detail}</p></div>
    {f.shot && <div style={{ marginTop: 44 }}><Shot name={f.shot} alt={f.alt!} priority /></div>}
    <div className="glass" style={{ padding: 32, marginTop: 44 }}><h2 style={{ fontSize: 22 }}>What it includes</h2><ul className="checks">{f.points.map(p => <li key={p}>{p}</li>)}</ul></div>
    <div className="cta" style={{ justifyContent: 'flex-start', marginTop: 32 }}>{doc && <Link className="btn" href={`/docs/${doc.slug}`}>Read the docs</Link>}<Link className="btn" href={`/features/${nx.slug}`}>Next: {nx.name} →</Link><Link className="btn pri" href="/download">Download Myko</Link></div></div>;
}
