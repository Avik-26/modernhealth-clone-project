import Image from "next/image";
import { PlayCircle } from "lucide-react";

const CommunityBuildingSection = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-y-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Community building
            </span>
            <h2 className="text-4xl font-semibold text-foreground leading-tight">
              Destigmatizing mental health one conversation at a time.
            </h2>
            <p className="text-lg text-medium-gray">
              Join U.S. Surgeon General,{" "}
              <strong className="font-bold text-foreground">Dr. Vivek Murthy</strong>,
              and Modern Health's Chief Community Health Advocate,{" "}
              <strong className="font-bold text-foreground">Naomi Osaka</strong> for
              an intimate conversation about their mental health journeys and inner
              voice.
            </p>
            <a
              href="#"
              className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-deep-purple"
            >
              Watch Now
              <PlayCircle className="h-5 w-5" />
            </a>
          </div>

          <div className="relative aspect-[1.73/1] w-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/686c7517c63a17299c219c78_e7272229d46d50ab0563bc4e0b0d9449_HamaKuma-img-14.jpg?"
              alt="Dr. Vivek Murthy and Naomi Osaka in conversation"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBuildingSection;