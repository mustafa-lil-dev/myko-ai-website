import { RELEASES, REPO } from '@/lib/site';
export const metadata = { title: 'Changelog', description: 'Published Myko releases.', alternates: { canonical: '/changelog' } };
const rel = [
  ['v2.0.1', '2026-10-06', 'Windows x64 installer (application version 0.8.5). Release note: merged existing private repository history.'],
  ['v0.2', '2026-10-03', 'Published as "Myko 2.0". Windows x64 setup installer and MSI package (application version 0.8.5).'],
  ['v0.8.5', '2026-09-03', 'First official Linux release: .deb, .rpm and AppImage, with updater signatures for all Linux packages.'],
  ['v1.0.0', '2026-07-22', 'Earlier Windows x64 setup installer. No release notes were published.'],
];
export default function Changelog() {
  return <div className="wrap narrow"><div className="page-h"><h1>Changelog</h1><p className="lead">Taken from published GitHub releases. Release tags and the application version number do not always match.</p></div>
    <ol className="tl">{rel.map(([v, d, n]) => <li key={v} className="glass"><div className="top"><h2 className="mono" style={{ fontSize: 18 }}>{v}</h2><time className="mut" style={{ fontSize: 14 }} dateTime={d}>{d}</time></div><p className="soft" style={{ marginTop: 10 }}>{n}</p><a className="mut" style={{ fontSize: 14, textDecoration: 'underline', display: 'inline-block', marginTop: 12 }} href={`${REPO}/releases/tag/${v}`} target="_blank" rel="noopener noreferrer">View release</a></li>)}</ol>
    <p className="mut" style={{ fontSize: 14.5 }}>Older tags are on <a style={{ textDecoration: 'underline' }} href={RELEASES} target="_blank" rel="noopener noreferrer">GitHub Releases</a>.</p></div>;
}
