"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const dropdownItems = [
    { label: "I'm looking to support my employees", href: "/demo/company" },
    { label: "I'm a consultant looking to support my clients", href: "/demo/consultant" },
    { label: "I'm a provider interested in Modern Health", href: "https://web.fountain.com/apply/modern-health/opening/modern-health" },
    { label: "I'm a health plan interested in mental health benefits for our employers and members", href: "/demo/healthplan" },
    { label: "I'm looking for personal support", href: "/demo/individuals" },
  ];

  return (
    <section className="bg-gradient-to-tr from-deep-purple to-[#9C67F5] text-white">
      <div className="container mx-auto px-10 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            style={{ lineHeight: 1.1 }}
          >
            The Global Standard in Mental Health
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 max-w-3xl">
            Modern Health delivers evidence-based, equitable mental health services worldwide — from self-guided tools to crisis care — ensuring our members have the right support wherever in the world they’re&nbsp;located.
          </p>
          <div className="mt-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="default"
                  className="bg-white text-foreground hover:bg-secondary rounded-md h-auto py-3 px-6 text-base font-medium shadow-sm"
                >
                  How can we help?
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                {dropdownItems.map((item, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <a href={item.href} className="text-sm py-2 px-3 block w-full whitespace-normal cursor-pointer">
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}