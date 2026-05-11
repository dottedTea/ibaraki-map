import { Checkbox } from "@base-ui/react/checkbox";
import { CheckboxGroup } from "@base-ui/react/checkbox-group";
import { RiCheckboxFill } from "react-icons/ri";
import { PIN_TYPE } from "@/types";

type MapFilterProps<T extends string> = {
  value: T[];
  onValueChange: (value: T[]) => void;
};

export const MapFilter = <T extends string>({
  value,
  onValueChange,
}: MapFilterProps<T>) => {
  return (
    <CheckboxGroup
      value={value}
      onValueChange={(newValue) => onValueChange(newValue as T[])}
      className="fixed bottom-0 left-0 grid py-5 md:px-2"
    >
      <label
        htmlFor={PIN_TYPE.SPOT}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
      >
        <Checkbox.Root
          id={PIN_TYPE.SPOT}
          name={PIN_TYPE.SPOT}
          value={PIN_TYPE.SPOT}
          className="bg-white w-5 h-5 rounded-xs shadow-md"
        >
          <Checkbox.Indicator>
            <RiCheckboxFill className="text-[#879A6B] w-5 h-5" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className="text-shadow-md text-shadow-white">スポット</span>
      </label>

      <label
        htmlFor={PIN_TYPE.GOURMET}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
      >
        <Checkbox.Root
          id={PIN_TYPE.GOURMET}
          name={PIN_TYPE.GOURMET}
          value={PIN_TYPE.GOURMET}
          className="bg-white w-5 h-5 rounded-xs shadow-md"
        >
          <Checkbox.Indicator>
            <RiCheckboxFill className="text-[#9A6B70] w-5 h-5" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className="text-shadow-md text-shadow-white">グルメ</span>
      </label>

      <label
        htmlFor={PIN_TYPE.ACTIVITY}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
      >
        <Checkbox.Root
          id={PIN_TYPE.ACTIVITY}
          name={PIN_TYPE.ACTIVITY}
          value={PIN_TYPE.ACTIVITY}
          className="bg-white w-5 h-5 rounded-xs shadow-md"
        >
          <Checkbox.Indicator>
            <RiCheckboxFill className="text-[#6B9A96] w-5 h-5" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className="text-shadow-md text-shadow-white">アクティビティ</span>
      </label>

      <label
        htmlFor={PIN_TYPE.EVENT}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 hover:bg-black/10 transition-colors cursor-pointer"
      >
        <Checkbox.Root
          id={PIN_TYPE.EVENT}
          name={PIN_TYPE.EVENT}
          value={PIN_TYPE.EVENT}
          className="bg-white w-5 h-5 rounded-xs shadow-md"
        >
          <Checkbox.Indicator>
            <RiCheckboxFill className="text-[#7E6B9A] w-5 h-5" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className="text-shadow-md text-shadow-white">イベント</span>
      </label>
    </CheckboxGroup>
  );
};
