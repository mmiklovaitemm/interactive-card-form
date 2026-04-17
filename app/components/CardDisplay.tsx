"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  number: string;
  mm: string;
  yy: string;
  cvc: string;
}

interface CardDisplayProps {
  formData: FormData;
}

export const CardDisplay = ({ formData }: CardDisplayProps) => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/interactive-card-form" : "";

  return (
    <section className="relative h-[32%] w-full lg:h-screen lg:w-1/3 flex-shrink-0 bg-deep-purple">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={`${basePath}/images/bg-main-mobile.png`}
          alt="Mobile BG"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={`${basePath}/images/bg-main-desktop.png`}
          alt="Desktop BG"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute top-[30px] lg:top-1/2 left-1/2 -translate-x-1/2 w-full max-w-[343px] lg:top-1/2 lg:left-full lg:-translate-y-1/2 lg:-translate-x-1/2 lg:max-w-none lg:w-auto flex flex-col lg:gap-10 z-20">
        {/* PRIEKINĖ KORTELĖ  */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 self-start w-[286px] h-[157px] lg:w-[447px] lg:h-[245px] lg:-ml-[160px] shadow-2xl text-white scale-[0.93] lg:scale-100 transition-all origin-top-left"
        >
          <Image
            src={`${basePath}/images/bg-card-front.png`}
            alt="Card Front"
            fill
            className="object-contain rounded-lg"
          />
          <div className="relative flex flex-col h-full justify-between p-5 lg:p-8 z-10">
            <div className="relative w-14 h-8 lg:w-20 lg:h-12">
              <Image
                src={`${basePath}/images/card-logo.svg`}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-3 lg:gap-6">
              <p className="text-[18px] tracking-[2.2px] lg:text-[28px] lg:tracking-[3.5px] font-medium">
                {formData.number || "0000 0000 0000 0000"}
              </p>
              <div className="flex justify-between text-[10px] uppercase tracking-[1.2px] lg:text-sm lg:tracking-[2px]">
                <span className="truncate max-w-[150px] lg:max-w-none lg:pr-4 font-medium">
                  {formData.name || "Jane Appleseed"}
                </span>
                <span className="font-medium flex-shrink-0">
                  {formData.mm || "00"}/{formData.yy || "00"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GALINĖ KORTELĖ  */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative -mt-[85px] lg:mt-0 self-end w-[286px] h-[157px] lg:w-[447px] lg:h-[245px] shadow-2xl scale-[0.93] lg:scale-100 transition-all origin-bottom-right"
        >
          <Image
            src={`${basePath}/images/bg-card-back.png`}
            alt="Card Back"
            fill
            className="object-contain rounded-lg"
          />
          <div className="absolute top-[70px] right-9 lg:top-[111px] lg:right-14 z-10 text-white text-[10px] lg:text-sm tracking-[2px]">
            {formData.cvc || "000"}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
