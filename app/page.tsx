import Link from 'next/link';
import Image from 'next/image';
import Shot from '@/components/Shot';
import Demo from '@/components/Demo';
import { features } from '@/lib/content';
const facts = [['Native, not wrapped', 'Tauri 2 and Rust with a real PTY.'], ['Your models', 'Ten cloud providers, plus LM Studio, MLX and Ollama.'], ['Keys in your keychain', 'Stored by the operating system, not on disk.'], ['No account, no telemetry', 'Nothing to sign up for, nothing phoning home.']];
export default function Home() {
  const rows = features.filter(f => f.shot && f.slug !== 'ai').slice(0, 5);
  const ai = features.find(f => f.slug === 'ai')!;
  return <>
    <section className="wrap hero">
      <Image className="logo rise" src="/logo.png" alt="Myko" width={152} height={152} priority />
      <h1 className="rise" style={{ animationDelay: '.08s' }}>Your entire dev workspace. Built around AI.</h1>
      <p className="sub rise" style={{ animationDelay: '.16s' }}>Terminal, editor, Git, AI, and live preview in one desktop development workspace.</p>
      <div className="cta rise" style={{ animationDelay: '.24s' }}><Link className="btn pri" href="/download">Download Myko</Link><Link className="btn" href="/features">Explore Myko</Link></div>
      <div className="rise" style={{ animationDelay: '.38s' }}><Demo /></div>
    </section>
    <section className="wrap sec"><div className="center"><h2 className="h2">One window instead of five.</h2><p className="lead">Run commands, edit files, review diffs, commit and preview the result without switching apps. The agent works with the same files and the same terminal you do.</p></div>
      <div className="facts">{facts.map(([a, b]) => <div key={a} className="glass fact"><b>{a}</b><span>{b}</span></div>)}</div></section>
    <div className="wrap">
      <section className="split"><div className="txt"><h3>{ai.name}</h3><p className="tag">{ai.tag}</p><p className="mut" style={{ marginTop: 12 }}>{ai.blurb}</p><Link className="more" href="/features/ai">Explore AI agents →</Link></div><Shot name="ai-workflow" alt={ai.alt!} /></section>
      {rows.map((f, i) => <section key={f.slug} className={`split${i % 2 === 0 ? ' flip' : ''}`}><div className="txt"><h3>{f.name}</h3><p className="tag">{f.tag}</p><p className="mut" style={{ marginTop: 12 }}>{f.blurb}</p><Link className="more" href={`/features/${f.slug}`}>Explore {f.name.toLowerCase()} →</Link></div><Shot name={f.shot!} alt={f.alt!} /></section>)}
      <section className="split flip"><div className="txt"><h3>SSH</h3><p className="tag">Remote servers, right next to your local shell.</p><p className="mut" style={{ marginTop: 12 }}>Connect from the command palette. Myko never stores passwords or private keys.</p><Link className="more" href="/features/ssh">Explore SSH →</Link></div><Shot name="ssh" alt="Myko SSH settings" /></section>
    </div>
    <section className="wrap sec"><div className="glass panel"><div><h2 className="h2" style={{ fontSize: 32 }}>Your keys. Your machine.</h2><p className="lead">API keys live in your OS keychain. No account is required, and Myko includes no application telemetry.</p></div><Link className="btn" href="/security">Read about security</Link></div></section>
    <section className="wrap sec final"><h2 className="h2" style={{ fontSize: 'clamp(32px,5vw,56px)' }}>Build without leaving your flow.</h2><div className="cta"><Link className="btn pri" href="/download">Download Myko</Link><Link className="btn" href="/docs/getting-started">Read the docs</Link></div></section>
  </>;
}
