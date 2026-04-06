import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        Hello    
        <Link href="contactus">Contact US</Link>
        <Link href="products"> Products</Link>

    </div>
  );
}
