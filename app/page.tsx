import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <Link href={'/individual'}>individuallar</Link>
      <Link href={'/organization'}>Organizatsiyalar</Link>
    </div>
  );
}
