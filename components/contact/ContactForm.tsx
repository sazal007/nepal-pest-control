"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import { useSubmitContactForm } from "@/hooks/use-contact";
import { xinfinEmail, xinfinPhone } from "@/constants/contact";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, isPending } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { name, email, message },
      {
        onSuccess: () => {
          setName("");
          setEmail("");
          setMessage("");
        },
      }
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Left Contact Details */}
          <div className="lg:col-span-5">
            <SectionHeading
              tag="[Contact]"
              title="Drop Us a Message"
              italicWord="Message"
              className="mb-6"
            />
            <p className="text-gray-500 mb-10 text-sm">
              We&apos;re always happy to hear from you and will get back to you
              as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="font-bold text-gray-900 text-base">
                    {xinfinEmail}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Call</div>
                  <div className="font-bold text-gray-900 text-base">
                    {xinfinPhone}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Visit Us</div>
                  <div className="font-bold text-gray-900 text-base">
                    See on Google Map
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Write Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="I want to collaborate"
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3.5 bg-primary-600 text-white rounded-full font-bold flex items-center justify-between px-6 hover:bg-primary-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? "Sending..." : "Send Message"}
                  <div className="w-7 h-7 rounded-full bg-white text-primary-600 flex items-center justify-center">
                    {isPending ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <ArrowUpRight size={14} />
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
