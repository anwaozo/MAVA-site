"use client";

import Image from "next/image";
import React, { useState } from "react";
import Title from "./title";
import { MapPin, Phone, Send } from "lucide-react";
import { pushToSheet } from "../actions/register-cohort";
import SuccessModal from "./success-modal";

const RegisterCohort = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    await pushToSheet(formData);
    setLoading(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", location: "" });
  };

  return (
    <section className="mt-5 lg:mt-10">
      <div className="bg-[#F1F5EB] py-10 lg:py-24 font-jakarta">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
            <div
              data-aos="zoom-in-down"
              className="w-full max-w-[450px] mx-auto lg:mx-0 px-4"
            >
              <Image
                src={"/Image (2).png"}
                alt="icon"
                width={435}
                height={485}
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="lg:max-w-[580px] w-full px-4 lg:px-6 space-y-6"
            >
              <Title text="DON'T MISS OUT" />
              <h2 className="text-[#034833] text-2xl lg:text-[50px] font-bold">
                Register for the next free cohort.
              </h2>
              <div className="py-6 px-4 lg:px-6 bg-white rounded-[20px]">
                <form
                  onSubmit={handleSubmit}
                  className="w-full lg:max-w-lg space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mb-8">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`text-[#034833] w-full px-4 py-4 pr-12 bg-white border border-gray-200 rounded-2xl placeholder-[#034833] focus:outline-none focus:border-gray-200 transition-all duration-200 ${errors.name ? "border-red-500" : ""}`}
                        disabled={loading}
                      />
                      <Send className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#034833]" />
                      {errors.name && (
                        <span className="text-red-500 text-xs absolute left-0 -bottom-5">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`text-[#034833] w-full px-4 py-4 pr-12 bg-white border border-gray-200 rounded-2xl placeholder-[#034833] focus:outline-none focus:border-gray-200 transition-all duration-200 ${errors.email ? "border-red-500" : ""}`}
                        disabled={loading}
                      />
                      <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#034833]" />
                      {errors.email && (
                        <span className="text-red-500 text-xs absolute left-0 -bottom-5">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      placeholder="Your location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`text-[#034833] w-full px-4 py-4 pr-12 bg-white border border-gray-200 rounded-2xl placeholder-[#034833] focus:outline-none focus:border-gray-200 transition-all duration-200 ${errors.location ? "border-red-500" : ""}`}
                      disabled={loading}
                    />
                    <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#034833]" />
                    {errors.location && (
                      <span className="text-red-500 text-xs absolute left-0 -bottom-5">
                        {errors.location}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-offset-2 flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                    ) : (
                      "Send a message"
                    )}
                  </button>
                </form>
                {showSuccess && (
                  <SuccessModal onClose={() => setShowSuccess(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterCohort;
