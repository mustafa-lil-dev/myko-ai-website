'use client';
import Image from 'next/image';
import { useState } from 'react';
const items = [
  ['ai-workflow', 'AI', 'An agent plans the change and proposes edits as diffs you accept or reject.'],
  ['terminal', 'Terminal', 'Multi-tab, split panes, WebGL rendering on a native PTY.'],
  ['editor', 'Editor', 'CodeMirror 6 with AI completion, Vim mode and ten editor themes.'],
  ['source-control', 'Source control', 'Hunk staging and a commit graph with merge and branch lanes.'],
  ['web-preview', 'Preview', 'Local dev servers open in a preview tab automatically.'],
  ['themes', 'Themes', 'Custom themes, background images, opacity and blur.'],
];
export default function Demo() {
  const [i, setI] = useState(0);
  return <div className="win" role="group" aria-label="Myko product tour">
    <div className="bar"><div className="dots" aria-hidden><i /><i /><i /></div>
      <div className="tabs" role="tablist" aria-label="Product areas">{items.map(([, n], k) => <button key={n} role="tab" id={`t${k}`} aria-selected={i === k} aria-controls="stage" className="tab" onClick={() => setI(k)}>{n}</button>)}</div></div>
    <div className="stage" id="stage" role="tabpanel" aria-labelledby={`t${i}`}>{items.map(([s, n], k) => <Image key={s} className={i === k ? 'on' : ''} src={`/shots/${s}.png`} alt={`Myko ${n}`} width={1600} height={980} sizes="1060px" priority={k === 0} />)}</div>
    <p className="cap">{items[i][2]}</p></div>;
}
