import Prose from '@/components/Prose';
export const metadata = { title: 'About', description: 'Why Myko exists and how it is built.', alternates: { canonical: '/about' } };
export default function About() {
  return <Prose title="About Myko" intro="Myko is a desktop workspace where the terminal comes first and AI works alongside you.">
    <h2>Why it exists</h2><p>Development is spread across a terminal, an editor, a Git client, a browser and an AI chat. Every switch costs context. Myko puts them in one small, fast window.</p>
    <h2>How we think about it</h2><ul><li>Terminal first. The shell is the center, not a side panel.</li><li>AI that shows its work. Edits arrive as diffs and commands wait for approval.</li><li>Your keys and your models. Bring your own provider or run one locally.</li><li>Light. Built on Tauri and Rust, about 7–8 MB on disk.</li></ul>
    <h2>Who builds it</h2><p>Myko is built by developer for developers.</p></Prose>;
}
