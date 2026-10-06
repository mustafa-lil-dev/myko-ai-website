'use client';
import { useState } from 'react';
export default function Copy({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return <button className="cp" aria-label="Copy code to clipboard" onClick={async () => { try { await navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 1600); } catch {} }}>{ok ? 'Copied ✓' : 'Copy'}</button>;
}
