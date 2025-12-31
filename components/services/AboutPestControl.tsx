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

                    {/* Right Content - Illustration & Pest Icons */}
                    <div className="lg:col-span-7 relative flex flex-col items-center">
                        {/* Header Text */}
                        <div className="text-center mb-8 space-y-2">
                            <p className="text-gray-700 font-medium text-lg">आफ्नो घर, अफिस वा कुनै पनि ठाउँलाई</p>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-primary-500">यी सबैबाट मुक्त राख्नुहोस्</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                            {/* House & Family Illustration - Placeholder with Image since it's complex */}
                            <div className="relative h-[300px] w-full">
                                <Image
                                    src="/services/pest-control.jpg"
                                    alt="Pest Control Illustration"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Pest Icons Grid */}
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { name: "किटा", icon: "🚫🪲" },
                                    { name: "झिंगा", icon: "🚫🪰" },
                                    { name: "साङ्ला", icon: "🚫🐜" },
                                    { name: "धमिरा", icon: "🚫🐛" },
                                    { name: "कमिला", icon: "🚫🐜" },
                                    { name: "मुसा", icon: "🚫🐀" },
                                ].map((pest, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 rounded-full border-2 border-primary-500 flex items-center justify-center flex-col relative overflow-hidden group hover:bg-primary-50 transition-colors">
                                            <span className="text-2xl">{pest.icon.substring(2)}</span>
                                            <div className="absolute inset-0 border-[3px] border-red-500/80 rounded-full flex items-center justify-center transform -rotate-45 scale-[1.1]">
                                                <div className="w-full h-1 bg-red-500/80" />
                                            </div>
                                        </div>
                                        <span className="text-primary-600 font-bold text-sm tracking-wide">{pest.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
