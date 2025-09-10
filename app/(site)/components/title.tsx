import Image from "next/image";
import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex items-center gap-3">
      <h3 className="text-[#034833] font-semibold text-[15px] ">{text}</h3>
      <Image src={"/object.png"} alt="icon" height={12} width={14} />{" "}
    </div>
  );
};

export default Title;
