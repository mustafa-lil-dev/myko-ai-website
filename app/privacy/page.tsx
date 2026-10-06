import Prose from '@/components/Prose';
export const metadata = { title: 'Privacy', description: 'What data Myko and this website handle.', alternates: { canonical: '/privacy' } };
export default function Privacy() {
  return <Prose title="Privacy" intro="Last reviewed October 2026.">
    <h2>The app</h2><p>Myko needs no account and contains no telemetry code. Your files and terminal sessions stay on your machine. When you use a cloud AI provider, the prompts and file context you send go to that provider under its own terms. With a local model, they stay on your machine.</p>
    <h2>This website</h2><p>This site sets no tracking cookies and loads no analytics scripts. Hosting providers may keep standard server logs.</p>
    <h2>Contact</h2><p>Questions can be raised as an issue on the GitHub repository.</p></Prose>;
}
