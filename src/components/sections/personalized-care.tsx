"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";

const tags = [
  "Anxiety", "Low mood", "New job", "Communication", "Mindfulness", 
  "Professional Growth", "Burnout", "Healthy diet", "Parenting & family", "Exercise",
];

const stepsData = [
  {
    id: 1,
    title: "Tell us what you need",
    description: "We take a personalized approach to self-assessment, prioritizing how members prefer to receive care. This allows us to structure a plan that best suits each individual member.",
    images: [
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/687a9fdcc9bfc4845d98d4fb_product-01-a-25.webp",
        alt: "Product screen showing a user's personalized plan",
        width: 492,
        height: 402,
        className: "absolute top-0 left-0 z-10",
      },
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/687822661434f9c0474fe8ff_product-01-b-24.webp",
        alt: "Product screen showing a list of focus areas",
        width: 213,
        height: 311,
        className: "absolute bottom-0 right-0",
      },
    ],
  },
  {
    id: 2,
    title: "Get connected to care",
    description: "Using Stepped Care methodology, members can expect unique guidance based on preferences and levels of need. Members around the globe can access culturally centered care in their preferred language.",
    images: [
      {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/67007a241589f419b5c1b6cb_Product-screen-03%202-27.png",
        alt: "Product screen showing options for connecting to care like therapy and coaching",
        width: 492,
        height: 454,
        className: "relative",
      },
    ],
  },
  {
    id: 3,
    title: "Assess and adapt",
    description: "We know things change, and we’re here to support each member along the way. Members can check in to track changes in their well-being or adjust what they’d like to focus on, whenever they want.",
    images: [],
  },
];

const TagButton = ({ text, isActive }: { text: string; isActive?: boolean }) => (
  <div
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border px-4 py-[6px] text-sm font-medium transition-colors ${
      isActive
        ? "border-primary bg-subtle-blue text-primary"
        : "border-slate-300 bg-white text-slate-700"
    }`}
  >
    {text}
    {isActive && <Check className="ml-1.5 h-4 w-4" />}
  </div>
);

const PersonalizedCare = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="bg-off-white py-20">
      <div className="mx-auto max-w-6xl px-10">
        <div className="relative mb-12 flex h-[50px] w-full flex-row overflow-hidden">
           <div className="animate-marquee-slow flex min-w-full shrink-0 items-center justify-around">
            <div className="flex items-center gap-3 px-1.5">
                {[...tags].map((tag, index) => (
                  <TagButton key={index} text={tag} isActive={index === 0} />
                ))}
            </div>
           </div>
           <div className="animate-marquee-slow-2 flex min-w-full shrink-0 items-center justify-around">
            <div className="flex items-center gap-3 px-1.5">
                {[...tags].map((tag, index) => (
                  <TagButton key={index} text={tag} isActive={index === 0} />
                ))}
            </div>
           </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-semibold text-slate-800">
            Personalized health care at scale
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Modern Health provides a robust suite of mental health care
            offerings to keep employees happy, healthy, and motivated. Here’s
            where the journey begins.
          </p>
        </div>

        <div className="mt-16">
          {stepsData.map((step, index) => {
            const isActive = activeStep === step.id;
            return (
              <div
                key={step.id}
                className={`grid grid-cols-1 items-center gap-12 py-8 lg:grid-cols-2 lg:gap-24`}
              >
                  <div className={`flex flex-col gap-5 ${index === 1 ? 'lg:order-2' : ''}`}>
                    <div
                      className="flex cursor-pointer items-start gap-4"
                      onClick={() => setActiveStep(isActive ? 0 : step.id)}
                    >
                      <div
                        className={`mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 text-lg font-semibold transition-colors ${
                          isActive
                            ? "border-primary text-primary"
                            : "border-slate-300 text-slate-500"
                        }`}
                      >
                        {step.id}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`text-2xl font-semibold transition-colors ${
                              isActive ? "text-slate-900" : "text-slate-600"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <ChevronDown
                            className={`h-6 w-6 text-primary transition-transform duration-300 ${
                              isActive ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {isActive && (
                          <p className="mt-4 animate-accordion-down text-base text-slate-600">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                
                {step.images.length > 0 && (
                  <div className={`relative h-[450px] w-full ${index === 1 ? 'lg:order-1' : ''}`}>
                    {step.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className={`${img.className} rounded-xl shadow-2xl`}
                        style={{
                          boxShadow: '0 40px 80px -20px rgba(10,30,55,.15)',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee-slow {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes marquee-slow-2 {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        .animate-marquee-slow-2 {
          animation: marquee-slow-2 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PersonalizedCare;