"use client";
import { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function SuccessModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="font-jakarta text-center flex flex-col items-center justify-center gap-4 max-w-md mx-auto bg-white rounded-2xl shadow-2xl border-0 p-8">
        <DialogTitle />
        <CheckCircle2 className="text-green-600 w-12 h-12 mb-2" />
        <h3 className="text-green-700 text-xl lg:text-4xl font-bold lg:mb-1 ">
          Registration successful!
        </h3>
        <p className="text-gray-700 text-base">
          Thank you for registering for the cohort.
        </p>
      </DialogContent>
    </Dialog>
  );
}
