import Image from "next/image";

type Testimonial = {
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  quote: string;
  authorName: string;
  authorTitle: string;
};

const testimonials: Testimonial[] = [
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/630c0f8097b687ff50a25d0e_nextdoor-9.svg?",
    logoAlt: "Nextdoor logo",
    logoWidth: 123,
    logoHeight: 31,
    quote:
      "“Providing support across the organization required a partner with the ability to reach everyone, regardless of location, language preference, or level of need. Modern Health’s approach to mental health allowed us to frame this resource as something for everyone.”",
    authorName: "Beth Steinberg",
    authorTitle: "Head of People at Nextdoor",
  },
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/68abde82504d707f0282c5a8_Sisense_Logo_Full_White-10.png?",
    logoAlt: "Sisense logo",
    logoWidth: 149,
    logoHeight: 41,
    quote:
      "\"There has been a cultural shift since implementing Modern Health. Our registration and utilization rates are even better than expected. Employees in all our locations have expressed gratitude for the benefit and seem very enthusiastic about it. They are also mentioning Modern Health more often in conversation and in our engagement surveys.”",
    authorName: "Kristen Cerone",
    authorTitle: "Benefits Analyst at Sisense",
  },
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/68acf55e9324c5e07cc44c17_Midland%20Logo%20-%20CMYK%20-%20White-11.png?",
    logoAlt: "Midland States Bank logo",
    logoWidth: 149,
    logoHeight: 50,
    quote:
      "\" We've had tremendous success with Modern Health — higher utilization, satisfaction, and engagement than anything we could have ever imagined with a traditional EAP. The digital experience, holistic approach, and speed to treatment is far better with the new crop of tools.”",
    authorName: "Shonna Kracinski",
    authorTitle: "Chief Human Resources Officer at Midland States Bank",
  },
  {
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/68acf55e9324c5e07cc44c1e_Franklin%20Pierce%20Schools%20Logo-12.png?",
    logoAlt: "Franklin Pierce Schools Logo",
    logoWidth: 149,
    logoHeight: 64,
    quote:
      "“Modern Health offers user-friendly access to mental health support through a variety of modes and methods, ensuring that it meets the diverse needs of our employees. It's a comprehensive solution that adapts to individuals' unique requirements.”",
    authorName: "Brandy Marshall",
    authorTitle: "Executive Director, HR and Business Services, Franklin Pierce Schools",
  },
];

const CustomerExperiences = () => {
  return (
    <section className="bg-[#4F46E5] text-white py-20">
      <div className="container mx-auto px-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
            Experiences
          </div>
          <h2 className="text-4xl font-semibold leading-tight">
            Discover what our customer champions have to say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-16 flex items-start mb-6">
                <Image
                  src={testimonial.logoSrc}
                  alt={testimonial.logoAlt}
                  width={testimonial.logoWidth}
                  height={testimonial.logoHeight}
                  className="h-8 w-auto"
                />
              </div>
              <blockquote className="flex-grow">
                <p className="text-lg leading-relaxed">{testimonial.quote}</p>
              </blockquote>
              <footer className="mt-6">
                <p className="text-base">
                  <strong className="font-semibold">{testimonial.authorName}</strong>{" "}
                  {testimonial.authorTitle}
                </p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerExperiences;