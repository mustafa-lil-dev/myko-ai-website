import { DL, RELEASES } from '@/lib/site';
export const metadata = { title: 'Download', description: 'Download Myko for Windows and Linux.', alternates: { canonical: '/download' } };
const rows = [
  { os: 'Windows', note: 'x64 · setup installer · unsigned build', files: [['Download for Windows (.exe)', `${DL}/v2.0.1/Myko_0.8.5_x64-setup.exe`], ['MSI package', `${DL}/v0.2/Myko_0.8.5_x64_en-US.msi`]] },
  { os: 'Linux', note: 'amd64 / x86_64 · Debian, Fedora and universal', files: [['.deb · Debian, Ubuntu', `${DL}/v0.8.5/Myko_0.8.5_amd64.deb`], ['.rpm · Fedora, RHEL', `${DL}/v0.8.5/Myko-0.8.5-1.x86_64.rpm`], ['AppImage · universal', `${DL}/v0.8.5/Myko_0.8.5_amd64.AppImage`]] },
];
export default function Download() {
  return <div className="wrap narrow" style={{ maxWidth: 880 }}><div className="page-h"><h1>Download Myko</h1><p className="lead">Application version 0.8.5. Installers are hosted on GitHub Releases.</p></div>
    {rows.map(r => <div key={r.os} className="glass os"><h2>{r.os}</h2><p className="mut" style={{ fontSize: 14.5 }}>{r.note}</p><div className="files">{r.files.map(([l, h], k) => <a key={h} className={`btn${k === 0 ? ' pri' : ''}`} href={h}>{l}</a>)}</div></div>)}
    <div className="glass os"><h2>macOS<span className="badge">Coming soon</span></h2><p className="mut" style={{ fontSize: 14.5 }}>No macOS build has been published yet. You can build it from source.</p></div>
    <p className="mut" style={{ marginTop: 28, fontSize: 14.5 }}>Windows may warn about an unrecognized app because the build is unsigned: choose More info, then Run anyway. See the <a className="soft" style={{ textDecoration: 'underline' }} href="/docs/installation">installation notes</a>, or browse all files on <a className="soft" style={{ textDecoration: 'underline' }} href={RELEASES} target="_blank" rel="noopener noreferrer">GitHub Releases</a>.</p></div>;
}
