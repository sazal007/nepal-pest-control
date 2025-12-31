import Image from "next/image";

export const AboutPestControl = () => {
    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-[2px] bg-primary-500" />
                                <span className="text-primary-500 font-semibold tracking-wide text-sm uppercase">
                                    About
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Best Pest Control Service <br />
                                Provider in Nepal
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-500 leading-relaxed text-lg">
                            <p>
                                Searching for the best pest control service provider in Nepal? For more
                                than 12 years, Orange Ball Pvt Ltd. has been providing the best{" "}
                                <span className="font-bold text-gray-700">pest control Services in Nepal</span>. We believe that each and every customers have
                                their own needs thus, Orange Ball specializes in providing customer based
                                plan for effective pest control in Nepal.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">
                                Why we are best pest control in kathmandu
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                We always focus on using the best techniques to make the process of
                                pest control easy and safe. Whether it is your restaurant or your office, we
                                are always ready to help. As a premier{" "}
                                <span className="font-bold text-gray-700">Pest Control Company in Kathmandu</span>, we deliver the most dependable pest control solutions to our
                                customers
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="lg:col-span-7 relative">
                        <div className="relative w-full h-[400px] md:h-[520px] lg:h-[600px] rounded-xl overflow-hidden">
                            <Image
                                src="/services/pest-control.jpg"
                                alt="Professional Pest Control Service in Nepal"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
