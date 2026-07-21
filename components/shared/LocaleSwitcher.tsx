"use client";

import { usePathname, useRouter } from "next/navigation";

import { type Locale } from "@/lib/i18n";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;

  const switchLocale = (nextLocale: Locale) => {
    const normalizedPath = pathname.replace(/^\/(en|pt)(?=\/|$)/, "") || "/";
    router.push(`/${nextLocale}${normalizedPath}`);
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-2 py-1 text-sm">
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`rounded-full px-2 py-1 transition ${locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLocale("pt")}
        className={`rounded-full px-2 py-1 transition ${locale === "pt" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
      >
        PT
      </button>
    </div>
  );
}
