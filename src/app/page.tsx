import { GlobalAboutButton } from "@/components/GlobalAboutButton";
import { MapRoot as Map } from "@/components/Map";

export default function Home() {
  return (
    <div>
      <header
        className="
          fixed top-0 left-0 right-0 z-10 rounded-lg
          m-2 px-2 py-1 text-black bg-white/80 shadow-md
          grid grid-cols-[auto_1fr_auto] gap-2 items-baseline
        "
      >
        <h1 className="text-xl">さしまっぷ</h1>
        <p className="text-xs text-black/60">茨城県の観光スポット紹介マップ</p>
        <GlobalAboutButton />
      </header>
      <main className="w-screen h-lvh">
        <Map />
      </main>
    </div>
  );
}
