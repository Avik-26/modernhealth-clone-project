import React from 'react';
import Image from 'next/image';

const statsData = [
  {
    value: '$2.39',
    title: 'ROI',
    description: 'For every $1 invested—based on reduced health care costs alone',
  },
  {
    value: '60%',
    title: 'of savings',
    description: 'Came from supporting employees with moderate mental health needs',
  },
  {
    value: '64%',
    title: 'of members',
    description: 'Chose coaching, an evidence-based, scalable 1:1 care option',
  },
];

const RoiProof = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="lg:w-2/5 w-full">
            <div className="mb-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/686c333e8dbbc1c86b008a31_ROI-icon-1.png?"
                alt="ROI Icon"
                width={96}
                height={96}
                className="h-24 w-24"
              />
            </div>
            <h2 className="text-4xl font-semibold text-foreground mb-4">
              Proof that mental health care{' '}
              <span className="whitespace-nowrap">pays off</span>
            </h2>
            <p className="text-base text-foreground mb-6">
              A third-party analysis of 13,000+ members shows how Modern Health’s adaptive care model drives down costs by supporting the whole workforce—not just those with severe mental health concerns.
            </p>
            <a
              href="https://explore.modernhealth.com/clinical-excellence/roi-study-overview"
              className="text-primary font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              See the science behind the savings
            </a>
          </div>

          <div className="lg:w-3/5 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="border border-border bg-card p-6 rounded-lg flex flex-col"
              >
                <div className="text-[40px] font-semibold text-success-green mb-2 leading-tight">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.title}
                </div>
                <p className="text-sm text-medium-gray">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiProof;