import Prose from '@/components/Prose';
import { faq } from '@/lib/content';
export const metadata = { title: 'FAQ', description: 'Common questions about Myko.', alternates: { canonical: '/faq' } };
export default function Faq() {
  return <Prose title="FAQ" cls="faq">{faq.map(([q, a]) => <details key={q} className="glass p-4 mb-3"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-3">{a}</p></details>)}</Prose>;
}
