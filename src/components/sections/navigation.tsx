"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, User, X, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [
  {
    title: "Who We Serve",
    links: [
      { text: "Employers", href: "/employers" },
      { text: "Consultants", href: "/consultants" },
      { text: "Members", href: "/member" },
      { text: "Providers", href: "/providers" },
      { text: "Health Plans", href: "/healthplans" },
      { text: "Channel Partners", href: "/channel-partners" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { text: "Workplace Tools", href: "/workplace-tools" },
      { text: "Economic Value", href: "/economic-value" },
      { text: "Global Coverage", href: "/global" },
      { text: "Pathways™", href: "/pathways" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Circles", href: "https://circles.modernhealth.com/" },
      { text: "Resources", href: "/resources" },
      { text: "Blog", href: "/blog" },
      { text: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Clinical",
    links: [
      { text: "Clinical", href: "/clinical" },
      { text: "Substance Abuse Care", href: "/substanceusecare" },
      { text: "Family Care", href: "/familycare" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "/about-us" },
      { text: "Press", href: "/press" },
      { text: "DEIB", href: "/deib" },
      { text: "Careers", href: "/careers" },
    ],
  },
];

const loginLinks = [
  { text: "Members", href: "https://my.joinmodernhealth.com/login" },
  { text: "Admins", href: "https://my.joinmodernhealth.com/login" },
  { text: "Providers", href: "https://chat.joinmodernhealth.com/login" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-background shadow-sm border-b border-gray-200">
        <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-10">
          <Link href="/" className="flex items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/80c806c0-f49b-4fbd-8848-0bfb95356bb3-modernhealth-com/assets/svgs/67016969deaa29d5b5e44ac8_ModernHealth-logo-main-1.svg?"
              alt="Modern Health logo"
              width={160}
              height={30}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-base font-medium text-foreground hover:text-primary">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] gap-1 p-4">
                        {item.links.map((link) => (
                          <ListItem key={link.text} href={link.href} title={link.text} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link href="/events" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base font-medium text-foreground hover:text-primary")}>
                      Events
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-2">
                    <User className="h-5 w-5 text-slate-800" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {loginLinks.map((link) => (
                    <DropdownMenuItem key={link.text} asChild>
                      <a href={link.href} className="text-base">
                        {link.text}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild className="rounded-md font-medium text-base px-6 py-3 h-auto">
                <a href="/request-demo">Let’s Talk</a>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </header>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0c1426] text-white lg:hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-5 flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            
            <div className="flex flex-col gap-4 mb-8">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full text-xl font-medium text-left py-2">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5" />
                      <span>Log In</span>
                    </div>
                    <ChevronDown className="h-5 w-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#0c1426] border-white/20 text-white w-[calc(100vw-2rem)]">
                    {loginLinks.map(link => (
                      <DropdownMenuItem key={link.text} asChild className="focus:bg-white/10 focus:text-white">
                        <a href={link.href} className="text-lg py-2">{link.text}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

              <Button asChild variant="default" className="w-full text-lg py-6 rounded-md bg-primary hover:bg-primary/90">
                <a href="/request-demo">Let's Talk</a>
              </Button>
            </div>


            <Accordion type="single" collapsible className="w-full">
              {navItems.map((item) => (
                <AccordionItem value={item.title} key={item.title} className="border-b border-white/20">
                  <AccordionTrigger className="py-4 text-xl font-medium hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pb-4 pl-4 space-y-4">
                      {item.links.map((link) => (
                        <li key={link.text}>
                          <a href={link.href} className="text-lg text-white/80 hover:text-white">
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
               <a href="/events" className="flex items-center py-4 text-xl font-medium border-b border-white/20">
                 Events
               </a>
            </Accordion>
            
          </div>
        </div>
      )}
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-base",
            className
          )}
          {...props}
        >
          <div className="font-medium">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


export default Navigation;