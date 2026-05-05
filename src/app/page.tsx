import { RiInformation2Line } from "react-icons/ri";
import { IbarakiMap } from "@/components/IbarakiMap";

export default function Home() {
  return (
    <div>
      <header
        className="
          fixed top-0 left-0 right-0 z-10
          px-2 py-1 text-black bg-white/80
          grid grid-cols-[auto_1fr_auto] gap-2 items-baseline
        "
      >
        <h1 className="text-xl">さしまっぷ</h1>
        <p className="text-xs text-black/50">茨城県の観光スポット紹介マップ</p>
        <RiInformation2Line className="text-black/50 w-5 h-5" />
      </header>
      <main className="w-screen h-screen">
        <IbarakiMap />
      </main>
    </div>
  );
}
