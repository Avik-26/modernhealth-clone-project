import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const MemberImpact = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="container mx-auto max-w-6xl px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Member impact
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground">
              Getting personal and career support through coaching
            </h2>
            <blockquote className="mt-6">
              <p className="text-2xl leading-relaxed text-foreground">
                "With the help of Modern Health, I feel so much more prepared for the uncertainty of the future. I’ll be able to ground myself and recenter and be able to make the best decisions moving forward."
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-bold text-foreground">Nicole</span>
              <div className="h-6 w-px bg-border"></div>
              <span className="text-muted-foreground">Modern Health Member</span>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-deep-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Watch Now
              <Play className="h-5 w-5 fill-current" />
            </a>
          </div>
          <div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/67ae3072ee3a1d01eca60b82_hp-testimonial.jpg?"
              alt="Nicole, a Modern Health member"
              width={882}
              height={980}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberImpact;