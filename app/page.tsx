import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
        <h1>HOME</h1>
        <Link href="/login">to Login</Link>
    </div>
  );
}
