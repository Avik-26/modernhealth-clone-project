"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const testimonials = [
  {
    id: "rsm",
    company: "RSM",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/icons/66ea6c7a489cc0a4a6eb83ea_rsm-logo-2.png?",
    quote: "Modern Health is having a big impact on a lot of things. Productivity, turnover, burnout, how our associates are delivering services, how people are showing up to work...",
    name: "Rick Edgerton",
    title: "Global Wellbeing Manager",
  },
  {
    id: "kraken",
    company: "Kraken",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/icons/66ea6c79cf782057fc465897_kraken-logo-3.png?",
    quote: "It's so much more than 1-on-1 coaching. There's so much more that you can gain and learn through Pathways...",
    name: "Ingrid Henderson",
    title: "Wellbeing Manager",
  },
  {
    id: "live-nation",
    company: "Live Nation",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/icons/66ea6c81c0f47825f5abd52d_live-nation-logo-4.png?",
    quote: "Being able to have a partner to bring that type of proactive care to people has been a game changer.",
    name: "Emily Monroe",
    title: "Global Head of Benefits",
  },
  {
    id: "impact",
    company: "Impact",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/icons/66ea6c79a1b3e6bc766c618d_impact-logo-5.png?",
    quote: "The feedback that we have from our employees... just how amazing the services are, especially since we're a global company, to be able to have access to this is something that we did not have before.",
    name: "Michelle Denman",
    title: "CPO",
  },
  {
    id: "netsmart",
    company: "Netsmart",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6c79ef0ee5754adce913_netsmart-logo-2.png?",
    quote: "We're trying to integrate a well-being approach into how we do performance management... a life event happens and we have the tools that can surround that employee.",
    name: "Wendy Hill",
    title: "CPO",
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container max-w-[1200px] px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-foreground">
            Hear directly from our customers
          </h2>
        </div>
        <Tabs defaultValue="rsm" className="w-full">
          <TabsList className="h-auto bg-transparent flex justify-center items-center flex-wrap gap-4 md:gap-8 mb-12 p-0">
            {testimonials.map((testimonial) => (
              <TabsTrigger
                key={testimonial.id}
                value={testimonial.id}
                className="h-20 w-44 p-4 border border-slate-200 rounded-md opacity-50 hover:opacity-100 data-[state=active]:opacity-100 data-[state=active]:bg-white data-[state=active]:border-primary transition-all duration-200"
              >
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  width={130}
                  height={40}
                  className="object-contain h-10 w-full"
                />
              </TabsTrigger>
            ))}
          </TabsList>

          {testimonials.map((testimonial) => (
            <TabsContent
              key={testimonial.id}
              value={testimonial.id}
              className="mt-0 text-center max-w-4xl mx-auto"
            >
              <blockquote className="text-2xl leading-snug font-medium text-foreground mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer className="text-base">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-medium-gray">{testimonial.title}</div>
              </footer>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CustomerTestimonials;