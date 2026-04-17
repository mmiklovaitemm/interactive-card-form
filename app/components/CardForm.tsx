"use client";
import React from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  number: string;
  mm: string;
  yy: string;
  cvc: string;
}

interface FormErrors {
  name: string;
  number: string;
  mm: string;
  yy: string;
  cvc: string;
}

interface CardFormProps {
  formData: FormData;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const CardForm = ({
  formData,
  errors,
  onChange,
  onSubmit,
}: CardFormProps) => {
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[380px] flex flex-col gap-5 lg:gap-6"
    >
      {/* VARDAS */}
      <div className="flex flex-col gap-2">
        <label className="text-[#21092F] text-xs uppercase tracking-[2px] font-bold">
          Cardholder Name
        </label>
        <div
          className={`rounded-lg p-[1px] transition-all ${
            errors.name
              ? "bg-red-400"
              : "bg-gray-200 focus-within:bg-gradient-to-br focus-within:from-[#6348FE] focus-within:to-[#610595]"
          }`}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="e.g. Jane Appleseed"
            onChange={onChange}
            className="w-full rounded-[7px] bg-white p-3 outline-none text-[#21092F] placeholder:text-gray-300"
          />
        </div>
        {errors.name && (
          <span className="text-red-400 text-[10px] font-bold leading-none">
            {errors.name}
          </span>
        )}
      </div>

      {/* NUMERIS */}
      <div className="flex flex-col gap-2">
        <label className="text-[#21092F] text-xs uppercase tracking-[2px] font-bold">
          Card Number
        </label>
        <div
          className={`rounded-lg p-[1px] transition-all ${
            errors.number
              ? "bg-red-400"
              : "bg-gray-200 focus-within:bg-gradient-to-br focus-within:from-[#6348FE] focus-within:to-[#610595]"
          }`}
        >
          <input
            type="text"
            name="number"
            value={formData.number}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={onChange}
            maxLength={19}
            className="w-full rounded-[7px] bg-white p-3 outline-none text-[#21092F] placeholder:text-gray-300"
          />
        </div>
        {errors.number && (
          <span className="text-red-400 text-[10px] font-bold leading-none">
            {errors.number}
          </span>
        )}
      </div>

      {/* DATA IR CVC */}
      <div className="flex gap-4 lg:gap-5">
        <div className="flex flex-col gap-2 w-1/2">
          <label className="text-[#21092F] text-xs uppercase tracking-[2px] font-bold">
            Exp. Date (MM/YY)
          </label>
          <div className="flex gap-2">
            <div
              className={`flex-1 rounded-lg p-[1px] transition-all ${
                errors.mm
                  ? "bg-red-400"
                  : "bg-gray-200 focus-within:bg-gradient-to-br focus-within:from-[#6348FE] focus-within:to-[#610595]"
              }`}
            >
              <input
                type="text"
                name="mm"
                value={formData.mm}
                placeholder="MM"
                maxLength={2}
                onChange={onChange}
                className="w-full rounded-[7px] bg-white p-3 outline-none text-[#21092F] placeholder:text-gray-300"
              />
            </div>
            <div
              className={`flex-1 rounded-lg p-[1px] transition-all ${
                errors.yy
                  ? "bg-red-400"
                  : "bg-gray-200 focus-within:bg-gradient-to-br focus-within:from-[#6348FE] focus-within:to-[#610595]"
              }`}
            >
              <input
                type="text"
                name="yy"
                value={formData.yy}
                placeholder="YY"
                maxLength={2}
                onChange={onChange}
                className="w-full rounded-[7px] bg-white p-3 outline-none text-[#21092F] placeholder:text-gray-300"
              />
            </div>
          </div>
          {(errors.mm || errors.yy) && (
            <span className="text-red-400 text-[10px] font-bold leading-none">
              {errors.mm || errors.yy || "Can't be blank"}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 w-1/2">
          <label className="text-[#21092F] text-xs uppercase tracking-[2px] font-bold">
            CVC
          </label>
          <div
            className={`rounded-lg p-[1px] transition-all ${
              errors.cvc
                ? "bg-red-400"
                : "bg-gray-200 focus-within:bg-gradient-to-br focus-within:from-[#6348FE] focus-within:to-[#610595]"
            }`}
          >
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              placeholder="e.g. 123"
              maxLength={3}
              onChange={onChange}
              className="w-full rounded-[7px] bg-white p-3 outline-none text-[#21092F] placeholder:text-gray-300"
            />
          </div>
          {errors.cvc && (
            <span className="text-red-400 text-[10px] font-bold leading-none">
              {errors.cvc}
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#21092F] text-white py-4 rounded-lg mt-2 hover:opacity-90 active:scale-[0.98] transition-all font-medium text-lg"
      >
        Confirm
      </button>
    </motion.form>
  );
};
