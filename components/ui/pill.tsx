import { Check } from "lucide-react";

const Pill = ({ children }: { children: any }) => {
  return (
    <div className="bg-[#040A1466] rounded-full p-[3px] flex items-center gap-[10px] text-sm font-medium pr-[15px] w-fit border border-[#B7D2FF0D]">
      <span className="w-4 h-4 p-[2px] rounded-full flex items-center justify-center bg-[#B7D2FF26] text-[#B7D2FF40]">
        <Check />
      </span>
      {children}
    </div>
  );
};

export default Pill;
