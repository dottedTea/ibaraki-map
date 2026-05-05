import { Dialog, type DialogRootProps } from "@base-ui/react/dialog";
import { YouTubeEmbed } from "@next/third-parties/google";
import { RiCloseLine } from "react-icons/ri";
import type { Spot } from "@/types/spot";

type DetailModalProps = DialogRootProps & Spot;

export const DetailModal = ({
  open,
  onOpenChange,
  name,
  videoId,
  videoStartTime,
}: DetailModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className="
            fixed inset-0 z-40 
            bg-black opacity-50
          "
        />
        <Dialog.Popup
          className="
            fixed inset-0 m-4 p-4 z-50
            bg-white rounded-lg overflow-hidden
          "
        >
          <div className="grid grid-cols-[1fr_auto]">
            <h2>{name}</h2>
            <Dialog.Close>
              <RiCloseLine className="text-black/50 w-5 h-5" />
            </Dialog.Close>
          </div>
          <YouTubeEmbed
            videoid={videoId}
            height={400}
            params={videoStartTime ? `start=${videoStartTime}` : undefined}
          />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
