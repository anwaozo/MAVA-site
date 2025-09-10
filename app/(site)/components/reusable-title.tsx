import Image from "next/image";
import React from "react";

interface titleDataProps {
  title: string;
  textColor: string;
  arrowLeft?: string;
  arrowRight?: string;
}

const ReusableTitle = ({
  title,
  textColor,
  arrowLeft,
  arrowRight,
}: titleDataProps) => {
  return (
    <div className="flex items-center gap-4 font-jakarta">
      {arrowLeft && (
        <Image src={`/${arrowLeft}`} alt="arrow icon" width={52} height={10} />
      )}
      <h2
        className={`text-${textColor} text-sm font-semibold tracking-widest uppercase`}
      >
        {title}
      </h2>
      <Image src={`/${arrowRight}`} alt="arrow icon" width={52} height={10} />
    </div>
  );
};

export default ReusableTitle;
