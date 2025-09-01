import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface DifferenceCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const differencesData: DifferenceCardProps[] = [
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/673d4014af0bcd076d753c35_icon-replace-eap-5.svg?',
    title: 'One platform, designed for your entire team',
    description: 'When mental health benefits only support employees with more severe mental health concerns, organizations miss key opportunities to prevent burnout and reduce costs. Our Adaptive Care Model offers a full spectrum of support, flexing to meet clinical and subclinical needs.',
    linkText: 'Learn About Adaptive Care',
    linkHref: '/clinical'
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/673d412d80b51d4e8b458508_icon-sustainable-care-6.svg?',
    title: 'Built for global access and equity',
    description: 'We’ve curated an elite, proprietary provider network that spans 200+ countries and territories, 80+ languages, and a wide range of specialties. This lets you offer culturally responsive care anywhere, with real-time global insights at your fingertips.',
    linkText: 'Explore Our Global Network',
    linkHref: '/global'
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/673d414e1feac46d9f0c2078_icon-rooted-excellence-7.svg?',
    title: 'Sustainable pricing, proven value',
    description: 'Our pricing model is as flexible as our care. Choose between PEPM or usage-based pricing to meet your financial goals while delivering measurable outcomes across your population. Because your mental health program should be scalable—and sustainable.',
    linkText: 'See the Value of Investment',
    linkHref: '/economic-value'
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/673d415d044bc4fe245d7c3a_icon-best-global-8.svg?',
    title: 'Proven partnership and support',
    description: 'From onboarding to incident response, our expert client success team is by your side. With deep experience and time-tested processes, we help you launch confidently, adapt over time, and deliver real impact for your workforce.',
    linkText: 'Learn How We Support Our Employers',
    linkHref: '/employers'
  }
];

const DifferenceCard = ({ icon, title, description, linkText, linkHref }: DifferenceCardProps) => (
  <div className="bg-white rounded-xl p-8 flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <Image src={icon} alt={title} width={64} height={64} className="mb-6" />
    <h3 className="text-2xl font-semibold text-foreground mb-4">{title}</h3>
    <div className="flex-grow">
      <p className="text-medium-gray text-base leading-relaxed">{description}</p>
    </div>
    <Link href={linkHref} className="flex items-center text-primary font-medium mt-6 group">
      <span>{linkText}</span>
      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </div>
);

export default function ModernHealthDifference() {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-12">
          <div className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
            Our Foundation
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            The Modern Health Difference
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differencesData.map((data, index) => (
            <DifferenceCard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}