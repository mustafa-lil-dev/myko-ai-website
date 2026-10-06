import Prose from '@/components/Prose';
export const metadata = { title: 'Security', description: 'How Myko stores keys and guards files, shells and network access.', alternates: { canonical: '/security' } };
export default function Security() {
  return <Prose title="Security" intro="What Myko does today. These points come from the project's README and security model document.">
    <h2>Credentials</h2><p>API keys are stored in your operating system keychain. They are not written to disk or to localStorage.</p>
    <h2>Files and shells</h2><ul><li>AI file tools refuse secret paths such as .env files, private keys and ~/.ssh, on both read and write.</li><li>Terminal sessions, git commands and AI tools work only in authorized workspace folders.</li><li>Shell commands run by the agent are gated by approval.</li></ul>
    <h2>SSH</h2><p>Myko never stores SSH passwords or private keys. Key files are referenced by path, and password and host-key prompts happen in the terminal.</p>
    <h2>Network</h2><p>AI requests go through a native HTTP proxy with defenses against SSRF and DNS rebinding. Myko talks to the provider you configure. With a local model, requests go to your local endpoint.</p>
    <h2>Telemetry and accounts</h2><p>There is no account. The README states no telemetry, and the app source contains no analytics or telemetry code.</p>
    <h2>Limits</h2><p>Windows builds are currently unsigned. No security guarantee is made beyond the behavior described here.</p>
    <h2>Report a vulnerability</h2><p>Follow the SECURITY.md policy in the GitHub repository.</p></Prose>;
}
