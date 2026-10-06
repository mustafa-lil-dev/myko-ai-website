import Link from 'next/link';
import { notFound } from 'next/navigation';
import Copy from '@/components/Copy';
import { docs } from '@/lib/content';
export const dynamicParams = false;
export const generateStaticParams = () => docs.map(d => ({ slug: d.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const d = docs.find(x => x.slug === slug); if (!d) return {};
  return { title: `${d.title} · Docs`, description: d.desc, alternates: { canonical: `/docs/${d.slug}` } };
}
const id = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
export default async function Doc({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const i = docs.findIndex(x => x.slug === slug); if (i < 0) notFound();
  const d = docs[i], prev = docs[i - 1], next = docs[i + 1], toc = d.blocks.filter(b => b.h);
  return <div className="docbody"><article className="art">
    <nav aria-label="Breadcrumb" className="crumbs"><Link href="/docs">Docs</Link><span>/</span><span>{d.group}</span><span>/</span><b>{d.title}</b></nav>
    <h1>{d.title}</h1><p className="desc">{d.desc}</p>
    {d.blocks.map((b, k) => <section key={k}>
      {b.h && <h2 id={id(b.h)}><a href={`#${id(b.h)}`}>{b.h}</a></h2>}{b.p && <p>{b.p}</p>}
      {b.list && <ul>{b.list.map(x => <li key={x}>{x}</li>)}</ul>}
      {b.code && <div className="code"><div className="hd"><span className="mono">{b.code.includes('MYKO.md') ? 'markdown' : 'shell'}</span><Copy text={b.code} /></div><pre><code>{b.code}</code></pre></div>}</section>)}
    <div className="pn">{prev ? <Link href={`/docs/${prev.slug}`} className="glass card"><small>← Previous</small>{prev.title}</Link> : <span />}{next && <Link href={`/docs/${next.slug}`} className="glass card r"><small>Next →</small>{next.title}</Link>}</div>
  </article>
  {toc.length > 0 && <aside className="toc" aria-label="On this page"><p>ON THIS PAGE</p>{toc.map(t => <a key={t.h} href={`#${id(t.h!)}`}>{t.h}</a>)}</aside>}</div>;
}
