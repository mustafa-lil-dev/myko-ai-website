import Link from 'next/link';
import Image from 'next/image';
import { REPO, ISSUES } from '@/lib/site';
const cols: [string, [string, string][]][] = [
  ['Product', [['Features', '/features'], ['AI agents', '/features/ai'], ['Download', '/download'], ['Changelog', '/changelog']]],
  ['Resources', [['Documentation', '/docs'], ['FAQ', '/faq'], ['About', '/about']]],
  ['Legal', [['Security', '/security'], ['Privacy', '/privacy'], ['Terms', '/terms']]],
];
export default function Footer() {
  return <footer className="foot"><div className="wrap"><div className="cols">
    <div><div className="brand"><Image src="/logo.png" alt="" width={28} height={28} />MYKO</div><p className="mut" style={{ marginTop: 14, maxWidth: 260, fontSize: 14.5 }}>The AI-native developer workspace.</p></div>
    {cols.map(([t, ls]) => <div key={t}><h4>{t}</h4><ul>{ls.map(([n, h]) => <li key={h}><Link href={h}>{n}</Link></li>)}</ul></div>)}</div>
    <div className="base"><span>© 2026 Mustafa Khoso</span><span><a href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a> · <a href={ISSUES} target="_blank" rel="noopener noreferrer">Report a bug</a></span></div></div></footer>;
}
