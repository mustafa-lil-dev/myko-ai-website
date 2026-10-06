export default function Prose({ title, intro, children, cls = '' }: { title: string; intro?: string; children: React.ReactNode; cls?: string }) {
  return <div className={`wrap narrow ${cls}`}><div className="page-h"><h1>{title}</h1>{intro && <p className="lead">{intro}</p>}</div><div className="prose" style={{ marginTop: 24 }}>{children}</div></div>;
}
