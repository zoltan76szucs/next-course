import Image from "next/image";
import next from "@/public/images/next.svg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
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

        </Image>

    </main>
  );
}
