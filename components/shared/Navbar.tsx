"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/shared/LocaleSwitcher";
import { getTranslation, type Locale } from "@/lib/i18n";

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/#about", key: "nav.about" },
  { href: "/projects", key: "nav.projects" },
  { href: "/experience", key: "nav.experience" },
  { href: "/certificates", key: "nav.certificates" },
  { href: "/contact", key: "nav.contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    link: { href: string; key: string }
  ) => {
    if (link.key === "nav.about") {
      event.preventDefault();

      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      router.push(`/${locale}#about`);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold text-xl tracking-tight flex items-center gap-2 hover:text-primary transition-colors">
          <span className="text-primary-foreground p-1 rounded-md overflow-hidden">
            <Image src="/logo.png" alt="Vinicius logo" width={40} height={40} className=" object-contain" />
          </span>
          Vinicius<span className="text-primary">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const href = `/${locale}${link.href === "/" ? "" : link.href}`;
            return (
              <Link
                key={link.href}
                href={href}
                onClick={(event) => handleLinkClick(event, link)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === href || pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {getTranslation(locale, link.key)}
              </Link>
            );
          })}
          
          <LocaleSwitcher />

          <Button variant="outline" size="sm" className="hidden lg:flex items-center gap-2 text-muted-foreground" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}>
            {getTranslation(locale, "nav.search")} <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span className="text-xs">Ctrl</span>K</kbd>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const href = `/${locale}${link.href === "/" ? "" : link.href}`;
            return (
              <Link
                key={link.href}
                href={href}
                onClick={(event) => {
                  handleLinkClick(event, link);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-base font-medium transition-colors",
                  pathname === href || pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {getTranslation(locale, link.key)}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
