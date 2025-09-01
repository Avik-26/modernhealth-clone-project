import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CtaBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4F46E5] to-[#6366F1]">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/66ea6badc6bd23823dcf1d1a_ModernHealth-icon-white-11.svg?"
              alt=""
              width={56}
              height={55}
            />
          </div>
          <h2 className="text-white text-[36px] font-semibold leading-[1.2] mb-8">
            Ready for your workplace to thrive?
          </h2>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-primary font-medium py-3 px-6 rounded-md shadow-sm hover:bg-gray-100 transition-colors duration-200 text-base"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;