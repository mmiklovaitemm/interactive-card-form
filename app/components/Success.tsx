"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface SuccessProps {
  onContinue: () => void;
}

export const Success = ({ onContinue }: SuccessProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex flex-col items-center text-center w-full max-w-[380px]"
    >
      <div className="relative w-20 h-20 mb-9">
        <Image
          src="/interactive-card-form/images/icon-complete.svg"
          alt="Complete"
          fill
        />
      </div>
      <h1 className="text-3xl text-deep-purple uppercase tracking-[3.5px] mb-4 text-[#21092F]">
        Thank you!
      </h1>
      <p className="text-gray-400 text-lg mb-12">
        We&apos;ve added your card details
      </p>
      <button
        onClick={onContinue}
        className="w-full bg-[#21092F] text-white py-4 rounded-lg font-medium hover:opacity-90 transition-all active:scale-[0.98]"
      >
        Continue
      </button>
    </motion.div>
  );
};
