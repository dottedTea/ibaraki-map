import type { DialogRootProps } from "@base-ui/react/dialog";
import { YouTubeEmbed } from "@next/third-parties/google";
import { RiFileCopyLine, RiLink } from "react-icons/ri";
import { GlobalModal } from "@/components/GlobalModal";

import type { Spot } from "@/types/spot";

type MapDetailModalProps = DialogRootProps & Partial<Spot>;

export const MapDetailModal = ({
  name = "",
  address = "",
  description = "",
  videoId = "",
  videoTitle = "",
  videoStartTime = undefined,
  url = "",
  ...restProps
}: MapDetailModalProps) => {
  /** 住所をクリップボードにコピーする */
  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      alert(`住所がコピーされました：${address}`);
    } catch (error) {
      console.error("住所のコピーに失敗しました", error);
    }
  };

  return (
    <GlobalModal title={name} {...restProps}>
      <div className="overflow-y-scroll h-full space-y-4">
        <div className="flex items-center">
          <p className="text-xs text-black/40">{address}</p>
          <button
            type="button"
            onClick={handleCopyAddress}
            className="w-8 h-8 grid place-items-center rounded-full hover:bg-black/10 transition-colors cursor-pointer"
          >
            <RiFileCopyLine className="text-black/40 w-4 h-4" />
          </button>
        </div>
        <p className="text-black/60">{description}</p>
        <div>
          <YouTubeEmbed
            videoid={videoId}
            params={videoStartTime ? `start=${videoStartTime}` : undefined}
            style="margin: 0 auto;"
          />
          <p className="md:text-center mt-1 text-xs text-black/40">
            {videoTitle}
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#879A6B] rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
          >
            <RiLink className="w-5 h-5" />
            <span className="text-sm">ウェブサイト</span>
          </a>
        </div>
      </div>
    </GlobalModal>
  );
};
