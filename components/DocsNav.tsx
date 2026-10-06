'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
type D = { slug: string; title: string; group: string; desc: string };
export default function DocsNav({ docs }: { docs: D[] }) {
  const path = usePathname(); const [q, setQ] = useState(''); const [open, setOpen] = useState(false);
  const list = docs.filter(d => (d.title + ' ' + d.desc).toLowerCase().includes(q.toLowerCase()));
  const groups = [...new Set(list.map(d => d.group))];
  return <><button className="btn sidebtn" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Hide navigation' : 'Browse docs'}</button>
    <aside className={`side${open ? ' open' : ''}`}><input type="search" placeholder="Search docs" aria-label="Search documentation" value={q} onChange={e => setQ(e.target.value)} />
      <nav aria-label="Documentation">{!q && <div className="grp"><Link href="/docs" className={path === '/docs' ? 'on' : ''}>Overview</Link></div>}
        {groups.map(g => <div className="grp" key={g}><p className="gt">{g}</p>{list.filter(d => d.group === g).map(d => <Link key={d.slug} href={`/docs/${d.slug}`} onClick={() => setOpen(false)} className={path === `/docs/${d.slug}` ? 'on' : ''} aria-current={path === `/docs/${d.slug}` ? 'page' : undefined}>{d.title}</Link>)}</div>)}
        {list.length === 0 && <p className="mut" style={{ padding: '0 12px', fontSize: 14 }}>No pages match “{q}”.</p>}</nav></aside></>;
}
