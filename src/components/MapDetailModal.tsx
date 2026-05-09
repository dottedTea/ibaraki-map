import type { DialogRootProps } from "@base-ui/react/dialog";
import { YouTubeEmbed } from "@next/third-parties/google";
import { RiFileCopyLine, RiLink } from "react-icons/ri";
import { GlobalButton } from "@/components/GlobalButton";
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
          <GlobalButton type="button" onClick={handleCopyAddress}>
            <RiFileCopyLine className="text-black/40 w-4 h-4" />
          </GlobalButton>
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
          <GlobalButton type="a" href={url} target="_blank">
            <RiLink className="w-5 h-5 text-[#879A6B]" />
            <span className="text-sm text-[#879A6B]">ウェブサイト</span>
          </GlobalButton>
        </div>
      </div>
    </GlobalModal>
  );
};
