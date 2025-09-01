import Image from 'next/image';

const cardData = [
  {
    number: 1,
    title: 'Boost productivity and prevent burnout',
    description: 'Equip your workforce with the mental resilience tools they need to combat burnout and maintain peak performance.',
  },
  {
    number: 2,
    title: 'Optimize operational efficiency',
    description: "Optimize your organization's performance with our sustainable mental health model. We address long-term needs, reduce absenteeism, boost retention, and enhance operational efficiency—all while improving your bottom line.",
  },
  {
    number: 3,
    title: 'Attract and retain top talent',
    description: 'Elevate your employer brand and attract top-tier talent in a competitive marketplace by showcasing your commitment to employee well-being through comprehensive mental health support.',
  },
];

const BusinessChallenges = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="container mx-auto px-10 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <h2 className="text-4xl font-semibold text-foreground max-w-2xl mb-8 lg:mb-0 leading-[1.2]">
            Solve your greatest business challenges with Modern Health
          </h2>
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/67007a1e1589f419b5c1b131_ModernHealth-icon-3.svg?"
            alt="Modern Health Icon"
            width={64}
            height={64}
            className="w-16 h-16 flex-shrink-0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <div key={card.number} className="bg-card p-8 rounded-xl shadow-md flex flex-col">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-subtle-blue flex items-center justify-center">
                  <span className="text-xl font-semibold text-primary">{card.number}</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 leading-[1.3]">
                {card.title}
              </h3>
              <p className="text-base text-medium-gray">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessChallenges;