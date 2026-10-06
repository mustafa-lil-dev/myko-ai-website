import Link from 'next/link';
import Shot from '@/components/Shot';
import { features } from '@/lib/content';
export const metadata = { title: 'Features', description: 'Terminal, editor, AI agents, source control, web preview, themes and SSH in one workspace.', alternates: { canonical: '/features' } };
export default function Features() {
  return <div className="wrap"><div className="page-h"><h1>Everything you need, next to your terminal.</h1><p className="lead">Seven parts of one workspace. Open any of them for details.</p></div>
    <div className="grid2">{features.map(f => <Link key={f.slug} href={`/features/${f.slug}`} className="glass card">{f.shot && <Shot name={f.shot} alt={f.alt!} />}<h2>{f.name}</h2><p>{f.blurb}</p></Link>)}</div></div>;
}
