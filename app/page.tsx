import Image from "next/image";
import next from "@/public/images/next.svg";

import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">
        Hello {session && <span>{session.user?.name}</span>}!
      </h1>
      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="next"
        fill
        // style={{ objectFit: "cover" }}
        // style={{ objectFit: "contain" }}
        className="object-cover"
        // sizes="100vw"
        //set mobil, table, .. sizes
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"

        quality={100}
        priority>

        </Image> */}
    </main>
  );
}
