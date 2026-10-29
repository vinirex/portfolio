"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <footer className="w-full border-t border-border bg-background py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-semibold text-lg">Vinicius Silva</p>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Vinicius Silva. {t("footer.rights")}
          </p>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <Link
            href="https://github.com/vinirex"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/-vini-silva/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:viniciuspereirasprofissional@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <div className="text-sm text-muted-foreground flex items-center gap-1">
          {t("footer.builtWith")}{" "}
          <Link
            href="https://nextjs.org"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Next.js
          </Link>{" "}
          {t("footer.and")}{" "}
          <Link
            href="https://tailwindcss.com"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Tailwind
          </Link>
        </div>
      </div>
    </footer>
  );
}
