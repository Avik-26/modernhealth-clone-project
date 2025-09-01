"use client";

import React from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const whoWeServeLinks = [
  { text: "Employers", href: "/employers" },
  { text: "Consultants", href: "/consultants" },
  { text: "Members", href: "/member" },
  { text: "Providers", href: "/providers" },
  { text: "Health Plans", href: "/healthplans" },
];

const solutionsLinks = [
    { text: "Workplace tools", href: "/workplace-tools" },
    { text: "Economic value", href: "/economic-value" },
    { text: "Global Coverage", href: "/global" },
    { text: "Pathways™", href: "/pathways" },
];

const resourcesLinks = [
    { text: "Circles", href: "https://circles.modernhealth.com/" },
    { text: "Blog", href: "/blog" },
    { text: "Case Studies", href: "/case-studies" },
    { text: "Events", href: "/events" },
];

const companyLinks = [
    { text: "About us", href: "/about-us" },
    { text: "Careers", href: "/careers" },
    { text: "DEIB", href: "/deib" },
    { text: "Press", href: "/press" },
];

const legalLinksTop = [
    { text: "Compliance", href: "/compliance" },
    { text: "Privacy", href: "/privacy" },
    { text: "HIPAA Notice", href: "/hipaa" },
    { text: "Security", href: "/security" },
    { text: "Terms of Use", href: "/terms-of-use" },
    { text: "System Status", href: "https://status.joinmodernhealth.com/" },
];

const legalLinksBottom = [
    { text: "Cookie Preferences", href: "/consent-to-telehealth-treatment" },
    { text: "Do Not Sell My Personal Information", href: "https://privacy.joinmodernhealth.com/policies" },
];

const FooterLinkColumn = ({ title, links }: { title: string; links: { text: string; href: string }[] }) => (
  <div>
    <h3 className="font-semibold text-white mb-4 text-[15px]">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterForm = () => (
  <div className="space-y-4">
    <h4 className="text-base font-semibold text-white">Modern Health Newsletter</h4>
    <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2">
        <Label htmlFor="footer-email" className="text-white text-xs">
          <span className="text-red-500">*</span> Email Address
        </Label>
        <div className="flex items-center space-x-2">
          <Input id="footer-email" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:ring-primary h-10 flex-grow" />
          <Button type="submit" className="bg-primary hover:bg-deep-purple text-primary-foreground h-10 px-6 font-medium text-sm">
            Sign Up!
          </Button>
        </div>
      </div>
    </form>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-slate-800" style={{ backgroundColor: '#1E293B' }}>
      <div className="max-w-[1200px] mx-auto px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 lg:col-span-4 space-y-6">
            <a href="#" className="mb-4 inline-block">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/67034ebb202df9dddeea9263_Modern-logo-15.png?" alt="Modern Health Logo" width={160} height={32} />
            </a>
            <NewsletterForm />
            <div className="flex space-x-3 items-center">
              <a href="https://play.google.com/store/apps/details?id=com.modernhealth.modernhealth&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6bada4396f70fd7ae48e_GooglePlay-badge-16.png?" alt="Get it on Google Play" width={120} height={36} />
              </a>
              <a href="https://apps.apple.com/us/app/modern-health/id1445843859" target="_blank" rel="noopener noreferrer">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/images/66ea6bad19618abdc071d3c1_AppStore-badge-17.png?" alt="Download on the App Store" width={120} height={36} />
              </a>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              The comprehensive mental health care platform for enterprises around the world
            </p>
            <div className="flex space-x-5 text-slate-300">
              <a href="https://www.linkedin.com/company/modern-health" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="https://twitter.com/modernhealthco" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/modernhealthco/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <FooterLinkColumn title="Who we serve" links={whoWeServeLinks} />
            <FooterLinkColumn title="Solutions" links={solutionsLinks} />
            <FooterLinkColumn title="Resources" links={resourcesLinks} />
            <FooterLinkColumn title="Company" links={companyLinks} />
            <div>
              <h3 className="font-semibold text-white mb-4 text-[15px]">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/request-demo" className="text-sm text-slate-300 hover:text-white transition-colors">
                    Talk to a Consultant
                  </a>
                </li>
              </ul>
              <h4 className="font-semibold text-white text-[15px] mt-6 mb-2">Mailing Address</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                2261 Market Street<br />
                STE 85847<br />
                San Francisco, CA<br />
                94114
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-slate-400">&copy;2025 Modern Life, Inc. All rights reserved</p>
            <div className="flex flex-wrap justify-center items-center gap-y-2 text-xs text-slate-400">
              {legalLinksTop.map((link, index) => (
                <React.Fragment key={link.text}>
                  {index > 0 && <span className="mx-2 text-slate-500">|</span>}
                  <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-y-2 text-xs text-slate-400">
            {legalLinksBottom.map((link, index) => (
              <React.Fragment key={link.text}>
                {index > 0 && <span className="mx-2 text-slate-500">|</span>}
                <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}