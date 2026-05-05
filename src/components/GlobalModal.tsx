import { Dialog, type DialogRootProps } from "@base-ui/react/dialog";
import type { ReactNode } from "react";
import { RiCloseLine } from "react-icons/ri";

type GlobalModalProps = DialogRootProps & {
  /** タイトル */
  title: string;
  /** 子要素 */
  children: ReactNode;
};

export const GlobalModal = ({
  children,
  title,
  ...restProps
}: GlobalModalProps) => {
  return (
    <Dialog.Root {...restProps}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black dialog-backdrop" />
        <Dialog.Popup
          className="
            fixed inset-0 m-4 p-4 z-50 dialog-popup
            bg-white rounded-lg overflow-hidden
          "
        >
          <div className="grid grid-cols-[1fr_40px] items-center">
            <h2 className="text-lg">{title}</h2>
            <Dialog.Close
              className="
                w-10 h-10 grid place-items-center rounded-full
                hover:bg-black/10 transition-colors cursor-pointer
              "
            >
              <RiCloseLine className="text-black/60 w-5 h-5" />
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
