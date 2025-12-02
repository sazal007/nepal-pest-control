import { SectionHeading } from '@/components/ui/SectionHeading';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          
          {/* Left Contact Details */}
          <div className="lg:col-span-5">
            <SectionHeading 
              tag="[Contact]"
              title="Collaborate With Us"
              italicWord="Us"
              className="mb-6"
            />
            <p className="text-gray-500 mb-10 text-sm">
              We believe in the power of collaboration and partnerships. We are always looking for opportunities to work with other businesses and professionals to enhance our offerings and expand our reach.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="font-bold text-gray-900 text-base">contactinfo@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Call</div>
                  <div className="font-bold text-gray-900 text-base">+99 1234 5478</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Visit Us</div>
                  <div className="font-bold text-gray-900 text-base">See on Google Map</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Phone No.</label>
                  <input 
                    type="tel" 
                    placeholder="Enter phone number" 
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Address</label>
                  <input 
                    type="text" 
                    placeholder="Enter your address" 
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Other Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements" 
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-3.5 bg-blue-600 text-white rounded-full font-bold flex items-center justify-between px-6 hover:bg-blue-700 transition-colors text-sm">
                  Submit
                  <div className="w-7 h-7 rounded-full bg-white text-blue-600 flex items-center justify-center">
                    <ArrowUpRight size={14} />
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
