import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/without-suspense">Without Suspense</Link>
      </li>
      <li>
        <Link href="/with-suspense">With Suspense</Link>
      </li>
    </ul>
  );
}
