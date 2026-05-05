import { YouTubeEmbed } from "@next/third-parties/google";
import type { Spot } from "@/types/spot";

type DetailModalProps = Spot;

export const DetailModal = ({ videoId, videoStartTime }: DetailModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <YouTubeEmbed
        videoid={videoId}
        height={400}
        params={videoStartTime ? `start=${videoStartTime}` : undefined}
      />
    </div>
  );
};
