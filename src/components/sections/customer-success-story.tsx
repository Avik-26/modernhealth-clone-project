import Image from "next/image";
import { Play } from "lucide-react";

export default function CustomerSuccessStory() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="relative w-full aspect-[5/4] rounded-xl overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/686c3405802b0228dca21171_customer-success-atlassian-8.webp?"
              alt="Atlassian employee participating in a virtual meeting."
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg flex flex-col items-start">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Customer Success Story
            </p>
            <div className="my-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/686c3405802b0228dca21167_Atlassian-ModernHealth-03-9.png?"
                alt="Atlassian Logo"
                width={160}
                height={26}
                className="h-auto"
              />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              A People-Centric Partnership
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "For me, and for so many of my colleagues, Modern Health has been a game-changer. We’re not all looking for the same kind of support, and that’s what makes Modern Health so powerful. It’s flexible, it’s easy to use, and support is there when you need it."
            </p>
            <div className="mt-6 text-base">
              <p className="font-semibold text-foreground">Alice Vichaita</p>
              <p className="text-muted-foreground">Senior Director of Global Benefits</p>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center bg-primary text-primary-foreground font-medium py-3 px-6 rounded-md hover:bg-deep-purple transition-colors"
            >
              Watch Now
              <Play className="ml-2 h-4 w-4 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}