'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const REPO = 'https://github.com/mustafa-lil-dev/myko-ai-terminal';
const links = [['Features', '/features'], ['AI', '/features/ai'], ['Docs', '/docs'], ['Changelog', '/changelog'], ['Download', '/download'], ['About', '/about']];
export default function Nav() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  const on = (h: string) => path === h || (h !== '/features/ai' && h !== '/features' && path.startsWith(h)) || (h === '/features' && path.startsWith('/features') && path !== '/features/ai');
  return <header className="nav"><div className="wrap in">
    <Link href="/" className="brand" onClick={() => setOpen(false)}><Image src="/logo.png" alt="" width={32} height={32} priority />MYKO</Link>
    <nav aria-label="Primary" className="links">{links.map(([n, h]) => <Link key={h} href={h} className={on(h) ? 'on' : ''} aria-current={on(h) ? 'page' : undefined}>{n}</Link>)}</nav>
    <div className="acts"><a className="btn" href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a><Link className="btn pri" href="/download">Download Myko</Link></div>
    <button className="btn burger" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
  </div>
  <div id="drawer" className={`drawer${open ? ' open' : ''}`}>{links.map(([n, h]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{n}</Link>)}<a href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a><Link href="/download" className="btn pri" style={{ marginTop: 16, justifyContent: 'center' }} onClick={() => setOpen(false)}>Download Myko</Link></div></header>;
}
