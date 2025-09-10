"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const ReusableButton = ({ text }: { text: string }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => text === "View now" && router.push("/gallery")}
      className="bg-[#83CD20] hover:bg-[#83CD20]/90 transition-colors duration-300 py-2.5 px-3.5 h-fit w-full md:w-fit rounded-[13px] cursor-pointer text-[#172602]"
    >
      {text}
      <Image src={"/Frame 1442.svg"} alt="cursor icon" width={32} height={32} />
    </Button>
  );
};

export default ReusableButton;
