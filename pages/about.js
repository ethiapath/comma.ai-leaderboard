import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Link  href="/">
        <a>
          home
        </a>
      </Link>
      <p>This is the about page</p>
    </div>
  );
}