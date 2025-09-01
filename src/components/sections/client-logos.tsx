import Image from 'next/image';

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6e78c0f47825f5adc6e5_cox-health-logo-1.png?", alt: 'Cox Health logo' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6c79ef0ee5754adce913_netsmart-logo-2.png?", alt: 'Netsmart logo' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6c7915f2bd0cce774e33_dennys-logo-3.png?", alt: "Denny's logo" },
  { src: "https://cdn.prod.website-files.com/66ea499b2bdb92277c3762f4/66ea6c7aaf9f49441658d3ff_doordash-logo.png", alt: 'DoorDash logo' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/681e8b60669b1aa2b4f601c7_logo-evenbrite%201-4.svg?", alt: 'Eventbrite logo' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6e7819618abdc0749b42_the-trade-desk-logo-5.png?", alt: 'The Trade Desk logo' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6c79d1833f34004856e4_ancestry-logo-6.png?", alt: 'Ancestry logo' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6e78303636637953d3e9_electronic-arts-logo-7.png?", alt: 'Electronic Arts logo' }
];

const animationKeyframes = `
  @keyframes infinite-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }
`;

const ClientLogos = () => {
  return (
    <section className="bg-background py-20 overflow-hidden">
      <style>{animationKeyframes}</style>
      <div className="container">
        <p className="text-center text-lg text-foreground mb-12">
          The world's top companies choose Modern Health
        </p>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start flex-shrink-0 animate-[infinite-scroll_40s_linear_infinite]">
            {logos.map((logo, index) => (
              <li key={index} className="mx-12">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={40}
                  className="max-h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
                />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start flex-shrink-0 animate-[infinite-scroll_40s_linear_infinite]" aria-hidden="true">
            {logos.map((logo, index) => (
              <li key={index} className="mx-12">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={40}
                  className="max-h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;