import Image from "next/image";
import { Check } from "lucide-react";
import { Phone } from "lucide-react";

export const AboutCleaning = () => {
    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-[2px] bg-primary-500" />
                                <span className="text-primary-500 font-semibold tracking-wide text-sm uppercase">
                                    Best Cleaning Company in Nepal
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Professional Cleaning <br />
                                Services in Nepal
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-500 leading-relaxed text-lg">
                            <p>
                                Orange Ball Pvt. Ltd. is the leading hub where you get reliable{" "}
                                <span className="font-bold text-gray-700">cleaning services in Nepal</span> at
                                affordable prices. Cleaning a home or office is no challenge.
                                But you don&apos;t have to worry about anything because we are here
                                to make life easier. Our cleaning service aims to provide you
                                with a clean and healthy environment.
                            </p>
                            <p>
                                Cleaning your space requires diligence, patience and a great
                                deal of knowledge when it comes to cleaning supplies. Once you
                                hire our affordable{" "}
                                <span className="font-bold text-gray-700">professional cleaning services in Nepal</span>
                                , you can leave all the issues on your back seat. Our highly
                                trained staff has the latest equipment to keep your property
                                spick and span.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">
                                Book Our Cleaning Services
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Daily office cleaning for many types of offices",
                                    "Carpet cleaning and flooring maintenance",
                                    "Friendly 24/7 customer service",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-primary-600" />
                                        </div>
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content - Visual Collage */}
                    <div className="relative">
                        {/* Main Orange Border Box */}
                        <div className="border-8 border-primary-500 p-8 md:p-12 relative min-h-[500px] flex items-center justify-center">
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-6 bg-gray-200" />

                            <div className="grid grid-cols-2 gap-4 relative z-10 w-full">
                                {/* Image 1 - Large vertical */}
                                <div className="col-span-1 row-span-2 relative h-[350px] shadow-2xl rounded-sm transform -rotate-1">
                                    <div className="absolute inset-0 border-4 border-primary-400/20" />
                                    <Image
                                        src="/services/cleaning.jpg"
                                        alt="Cleaning Service 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Top Right Text */}
                                <div className="flex flex-col justify-center text-center space-y-2 py-4">
                                    <p className="text-gray-900 font-medium leading-tight">
                                        फर्निचर होस् या कार्पेट <br /> भयाल होस् या सम्पूर्ण भवन
                                    </p>
                                    <p className="text-3xl md:text-3xl font-extrabold text-primary-500">
                                        सबै सफा गर्नेछौ
                                    </p>
                                </div>

                                {/* Bottom Images */}
                                <div className="relative h-[180px] shadow-2xl rounded-sm transform rotate-2">
                                    <div className="absolute inset-0 border-4 border-primary-400/20" />
                                    <Image
                                        src="/services/cleaning.jpg"
                                        alt="Cleaning Service 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Float Contact Banner at Bottom */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] bg-primary-500 text-white p-4 rounded-full shadow-2xl flex items-center gap-4 px-6">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="flex flex-wrap gap-x-4 gap-y-1">
                                    <span className="font-bold text-sm md:text-base">9843141616, 9843141614,</span>
                                    <span className="font-bold text-sm md:text-base">9810306060, 9818679752</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
