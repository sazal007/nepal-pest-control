import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-gray-200 pb-12 mb-12 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-gray-500">Let's transform your vision into results.</p>
          </div>
          <div className="w-full lg:w-auto flex gap-2">
            <div className="relative w-full lg:w-96">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full pl-6 pr-32 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white rounded-full px-6 text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1">
                Subscribe <ArrowUpRight size={14}/>
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="text-sm font-medium text-gray-500 mb-2">Email</div>
            <a href="mailto:contactinfo@gmail.com" className="text-gray-900 font-semibold block mb-8 hover:text-blue-600 transition-colors">contactinfo@gmail.com</a>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Main Pages</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home V1</Link></li>
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home V2</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Case Study</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/services" className="hover:text-blue-600 transition-colors">Service</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Template</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">404 not Found</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Password Protect</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Changelog</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Style Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 mb-12">
          <div className="text-sm font-medium text-gray-500 mb-2">Visit Us</div>
          <p className="text-gray-900 font-semibold mb-2">Los Angeles, CA 90017 United States</p>
          <div className="text-sm font-medium text-gray-500 mt-6 mb-2">Call us Now</div>
          <p className="text-gray-900 font-semibold">+99 1234 5478</p>
        </div>

        {/* Bottom Bar */}
        <div className="bg-blue-600 text-white p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold tracking-tight">OPTIMO</div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:opacity-80">Twitter</a>
            <a href="#" className="hover:opacity-80">LinkedIn</a>
            <a href="#" className="hover:opacity-80">Facebook</a>
            <a href="#" className="hover:opacity-80">Instagram</a>
          </div>
          <div className="flex gap-6 text-xs text-blue-100">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Changelog</Link>
            <Link href="#" className="hover:text-white">License</Link>
            <span>© 2025. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
