"use client";
import React, { useState } from "react";
import { CardDisplay } from "./components/CardDisplay";
import { CardForm } from "./components/CardForm";
import { Success } from "./components/Success";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: rawValue } = e.target;
    let formattedValue = rawValue;

    if (name === "number") {
      formattedValue = rawValue
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }
    if (["mm", "yy", "cvc"].includes(name)) {
      formattedValue = rawValue.replace(/\D/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", number: "", mm: "", yy: "", cvc: "" };
    let hasError = false;

    if (!formData.name) {
      newErrors.name = "Can't be blank";
      hasError = true;
    }
    if (!formData.number) {
      newErrors.number = "Can't be blank";
      hasError = true;
    } else if (formData.number.length < 19) {
      newErrors.number = "Wrong format";
      hasError = true;
    }
    if (!formData.mm) {
      newErrors.mm = "Can't be blank";
      hasError = true;
    }
    if (!formData.yy) {
      newErrors.yy = "Can't be blank";
      hasError = true;
    }
    if (!formData.cvc) {
      newErrors.cvc = "Can't be blank";
      hasError = true;
    }

    setErrors(newErrors);
    if (!hasError) setIsSubmitted(true);
  };

  const handleContinue = () => {
    setFormData({ name: "", number: "", mm: "", yy: "", cvc: "" });
    setIsSubmitted(false);
  };

  return (
    <main className="flex h-screen max-h-screen flex-col lg:flex-row font-space bg-white overflow-hidden">
      <CardDisplay formData={formData} />

      <section className="flex flex-1 flex-col items-center justify-center px-6 pt-18 pb-6 lg:pt-0 lg:pb-0">
        {!isSubmitted ? (
          <CardForm
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : (
          <Success onContinue={handleContinue} />
        )}
      </section>
    </main>
  );
}
