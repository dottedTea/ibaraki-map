import type { DialogRootProps } from "@base-ui/react/dialog";
import { YouTubeEmbed } from "@next/third-parties/google";
import { GlobalModal } from "@/components/GlobalModal";

import type { Spot } from "@/types/spot";

type MapDetailModalProps = DialogRootProps & Partial<Spot>;

export const MapDetailModal = ({
  name = "",
  municipality = "",
  description = "",
  videoId = "",
  videoTitle = "",
  videoStartTime = undefined,
  ...restProps
}: MapDetailModalProps) => {
  return (
    <GlobalModal title={name} {...restProps}>
      <div className="overflow-y-scroll h-full space-y-4">
        <p className="text-xs text-black/40">{municipality}</p>
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
      </div>
    </GlobalModal>
  );
};
