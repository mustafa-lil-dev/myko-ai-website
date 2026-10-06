import Image from 'next/image';
export default function Shot({ name, alt, priority }: { name: string; alt: string; priority?: boolean }) {
  return <div className="frame"><Image src={`/shots/${name}.png`} alt={alt} width={1600} height={980} sizes="(min-width:1024px) 700px, 100vw" priority={priority} /></div>;
}
