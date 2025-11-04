"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";

// Zod schema for form validation
const contactSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+ ]+$/, "Enter a valid phone number"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    reset();
    alert("Message sent successfully!");
  };

  return (
    <section className="w-full max-container bg-white py-6 md:py-12">
      <div className=" mx-auto border border-gray-300 rounded-2xl p-4 sm:p-8 md:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-black mb-2">
              Get In Touch
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-3">
              We&apos;re here to help – Reach out anytime
            </p>

            <div className="hidden md:block">
              <Image
                src="/assets/contact.jpg"
                alt="Contact"
                width={500}
                height={320}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                FULL NAME
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="Enter Your Name"
                  className="w-full outline-none text-gray-800 placeholder-gray-400 text-sm"
                />
                <FiUser className="text-gray-500" />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                EMAIL
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Example@gmail.com"
                  className="w-full outline-none text-gray-800 placeholder-gray-400 text-sm"
                />
                <FiMail className="text-gray-500" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                PHONE NUMBER
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="+91 12345678"
                  className="w-full outline-none text-gray-800 placeholder-gray-400 text-sm"
                />
                <FiPhone className="text-gray-500" />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                MESSAGE
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Type Here..."
                className="w-full border border-gray-300 rounded-md p-3 text-sm text-gray-800 placeholder-gray-400 outline-none resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 w-fit hover:bg-yellow-300 transition-all duration-300 disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
