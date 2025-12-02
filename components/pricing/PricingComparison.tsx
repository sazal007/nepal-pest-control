import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check, ArrowUpRight } from 'lucide-react';

const CheckIcon = ({ active }: { active: boolean }) => {
  if (active) {
    return (
      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto">
        <Check size={14} strokeWidth={3} />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-gray-200 text-white flex items-center justify-center mx-auto">
      <Check size={14} strokeWidth={3} />
    </div>
  );
};

export const PricingComparison = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading 
            tag="[Pricing]"
            title="Values We Delivered" 
            italicWord="Delivered"
            className="mb-0"
          />
        </div>

        {/* Comparison Table Header */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-8 sticky top-20 bg-white z-20 py-4 border-b border-gray-100">
          <div className="col-span-1"></div>
          
          <div className="col-span-1 p-6 border border-gray-100 rounded-2xl text-left bg-white shadow-sm">
            <div className="text-lg font-bold text-gray-900 mb-2">Starter plan</div>
            <p className="text-xs text-gray-500 mb-4">Great for individuals or early-stage projects</p>
            <div className="text-3xl font-bold mb-4">$80</div>
            <button className="w-full py-2 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center justify-center gap-1 hover:bg-blue-700">
              Get started <ArrowUpRight size={10} className="bg-white text-blue-600 rounded-full p-0.5"/>
            </button>
          </div>

          <div className="col-span-1 p-6 border-2 border-blue-600 rounded-2xl text-left bg-blue-600 text-white shadow-lg relative transform scale-105">
            <div className="text-lg font-bold mb-2">Growth plan</div>
            <p className="text-xs text-blue-100 mb-4">Best for growing teams and advanced features</p>
            <div className="text-3xl font-bold mb-4">$120</div>
            <button className="w-full py-2 bg-white text-blue-800 rounded-full text-xs font-bold flex items-center justify-center gap-1 hover:bg-blue-50">
              Get started <ArrowUpRight size={10} className="bg-blue-800 text-white rounded-full p-0.5"/>
            </button>
          </div>

          <div className="col-span-1 p-6 border border-gray-100 rounded-2xl text-left bg-white shadow-sm">
            <div className="text-lg font-bold text-gray-900 mb-2">Enterprise plan</div>
            <p className="text-xs text-gray-500 mb-4">Tailored solutions for large teams</p>
            <div className="text-3xl font-bold mb-4">$260</div>
            <button className="w-full py-2 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center justify-center gap-1 hover:bg-blue-700">
              Get started <ArrowUpRight size={10} className="bg-white text-blue-600 rounded-full p-0.5"/>
            </button>
          </div>
        </div>

        {/* Feature Rows */}
        <div className="space-y-12">
          
          {/* Community Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Community</h3>
            <div className="space-y-0 text-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 py-4 border-b border-gray-50">
                <div className="text-gray-600">Best For</div>
                <div className="text-center text-gray-500">Small teams</div>
                <div className="text-center text-gray-500">Teams & startups</div>
                <div className="text-center text-gray-500">Big teams & enterprises</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 py-4 border-b border-gray-50">
                <div className="text-gray-600">Users</div>
                <div className="text-center text-gray-500">1-5 users</div>
                <div className="text-center text-gray-500">6-20 users</div>
                <div className="text-center text-gray-500">20+ user</div>
              </div>
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Access to core tools</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                </div>
              </div>
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Custom Integrations</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={false} />
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Reporting Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Reporting and Analysis</h3>
            <div className="space-y-0 text-sm">
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Onboarding Assistance</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                  <CheckIcon active={false} />
                </div>
              </div>
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Access to core features</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={false} />
                  <CheckIcon active={false} />
                  <CheckIcon active={true} />
                </div>
              </div>
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Custom integrations</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={false} />
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                </div>
              </div>
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Reports & analytics</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={false} />
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <div className="space-y-0 text-sm">
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Email support</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                </div>
              </div>
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Help center access</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={false} />
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                </div>
              </div>
              <div className="grid grid-cols-4 py-4 border-b border-gray-50 items-center">
                <div className="text-gray-600 col-span-1">Priority support</div>
                <div className="col-span-3 grid grid-cols-3">
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                  <CheckIcon active={true} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Row */}
        <div className="hidden md:grid grid-cols-4 gap-4 mt-12">
          <div className="col-span-1"></div>
          <div className="col-span-1 px-4">
            <button className="w-full py-3 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-700">
              Get started <ArrowUpRight size={14} className="bg-white text-blue-600 rounded-full p-0.5"/>
            </button>
          </div>
          <div className="col-span-1 px-4">
            <button className="w-full py-3 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-700">
              Get started <ArrowUpRight size={14} className="bg-white text-blue-600 rounded-full p-0.5"/>
            </button>
          </div>
          <div className="col-span-1 px-4">
            <button className="w-full py-3 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-700">
              Get started <ArrowUpRight size={14} className="bg-white text-blue-600 rounded-full p-0.5"/>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
