import Link from "next/link";

export default function NotFound() {
  return (
    <section className="block">
      <div className="frame">
        <h1>Page not found</h1>
        <p className="intro-copy">
          That page doesn&apos;t exist. Try the <Link href="/">homepage</Link>{" "}
          or the <Link href="/services">services list</Link>.
        </p>
      </div>
    </section>
  );
}
