import Prose from '@/components/Prose';
export const metadata = { title: 'Terms', description: 'Terms for using Myko and this website.', alternates: { canonical: '/terms' } };
export default function Terms() {
  return <Prose title="Terms" intro="Last reviewed October 2026.">
    <h2>License</h2><p>Myko is licensed under the GNU General Public License v3.0. The license text in the repository governs your use, copying and modification of the software.</p>
    <h2>No warranty</h2><p>The software is provided as is, without warranty of any kind. You are responsible for reviewing AI-generated changes and commands before accepting them.</p>
    <h2>Third-party services</h2><p>AI providers you connect are governed by their own terms and pricing.</p></Prose>;
}
