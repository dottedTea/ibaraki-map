"use client";

import { useState } from "react";
import { RiInformation2Line } from "react-icons/ri";
import { GlobalModal } from "@/components/GlobalModal";

export const GlobalAboutButton = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsAboutModalOpen(true)}
        className="w-10 h-10 grid place-items-center rounded-full hover:bg-black/10 transition-colors cursor-pointer"
      >
        <RiInformation2Line className="text-black/60 w-5 h-5" />
      </button>

      <GlobalModal
        open={isAboutModalOpen}
        onOpenChange={setIsAboutModalOpen}
        title="さしまっぷ とは？"
      >
        <p className="text-sm text-black/60">
          いばらき観光マイスターのVTuber「茶芝間ティー（さしまてぃー）」が、動画で紹介した茨城県の観光スポットの一覧を地図上でご覧いただけるサイトです。
          <br />
          マーカーをクリックすると、スポットの概要と紹介動画が表示されます。
        </p>
      </GlobalModal>
    </>
  );
};
