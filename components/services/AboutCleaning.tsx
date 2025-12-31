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

                    {/* Right Content - Image */}
                    <div className="relative w-full h-[410px] md:h-[530px] lg:h-[650px] rounded-xl overflow-hidden">
                        <Image
                            src="/services/cleaning.jpg"
                            alt="Professional Cleaning Service in Nepal"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>



                </div>
            </div>
        </section>
    );
};
