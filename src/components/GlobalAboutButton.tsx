"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RiHome4Line,
  RiInformation2Line,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";
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
        <div className="space-y-4 md:space-x-8">
          <div className="mx-auto max-w-200">
            <Image
              src="/about.png"
              alt="さしまっぷ by 茶芝間ティー"
              width={1280}
              height={720}
              className="w-full"
            />
          </div>
          <p className="text-black/60">
            いばらき観光マイスターのVTuber「茶芝間ティー（さしまてぃー）」が、動画で紹介した茨城県の観光スポット一覧を地図上でご覧いただけるサイトです。
            <br />
            地図上のピンをクリックすると、スポットの概要と紹介動画が表示されます。
            <br />
            ※システムのバグにより、ピンの位置が実際の位置とズレている場合がございます。訪れる際には、各スポットの公式サイトなどをご確認ください。
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-x-2 items-center">
            <a
              href="https://dottedtea.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#879A6B] rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
            >
              <RiHome4Line className="w-5 h-5" />
              <span className="text-sm">ホームページ</span>
            </a>
            <a
              href="https://www.youtube.com/@dottedTea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#ff0033] rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
            >
              <RiYoutubeLine className="w-5 h-5" />
              <span className="text-sm">YouTube</span>
            </a>
            <a
              href="https://x.com/dottedTea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0F1419] rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
            >
              <RiTwitterXLine className="w-5 h-5" />
              <span className="text-sm">X（旧Twitter）</span>
            </a>
          </div>
        </div>
      </GlobalModal>
    </>
  );
};
