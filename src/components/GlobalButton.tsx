import type { ComponentProps, ReactNode } from "react";

type AProps = {
  /** aタグモード */
  type: "a";
  /** 子要素 */
  children: ReactNode;
} & Omit<ComponentProps<"a">, "className" | "rel">;

type ButtonProps = {
  /** buttonタグモード */
  type: "button";
  /** 子要素 */
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className">;

type GlobalButtonProps = AProps | ButtonProps;

/**
 * グローバルボタン
 * - type="a" の場合はaタグで、アイコンとテキストが並ぶスタイル
 * - type="button" の場合はbuttonタグで、アイコンのみのスタイル
 */
export const GlobalButton = ({
  children,
  type,
  ...restProps
}: GlobalButtonProps) => {
  if (type === "a") {
    const aProps = restProps as Omit<ComponentProps<"a">, "type">;
    const rel = aProps.target === "_blank" ? "noopener noreferrer" : undefined;

    return (
      <a
        {...aProps}
        rel={rel}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
      >
        {children}
      </a>
    );
  }

  const buttonProps = restProps as Omit<ComponentProps<"button">, "type">;

  return (
    <button
      {...buttonProps}
      className="w-10 h-10 grid place-items-center rounded-full hover:bg-black/10 transition-colors cursor-pointer"
    >
      {children}
    </button>
  );
};
