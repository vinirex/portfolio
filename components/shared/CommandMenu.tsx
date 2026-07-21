"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Smile,
  User,
  FolderOpen,
  Briefcase,
  FileBadge,
  PenTool,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder={t("commandMenu.searchPlaceholder")} />
        <CommandList>
          <CommandEmpty>{t("commandMenu.noResults")}</CommandEmpty>
          
          <CommandGroup heading={t("commandMenu.navigation")}>
            <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}`))}>
              <User className="mr-2 h-4 w-4" />
              <span>{t("nav.home")}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}#about`))}>
              <Smile className="mr-2 h-4 w-4" />
              <span>{t("nav.about")}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/projects`))}>
              <FolderOpen className="mr-2 h-4 w-4" />
              <span>{t("nav.projects")}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/experience`))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{t("nav.experience")}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/certificates`))}>
              <FileBadge className="mr-2 h-4 w-4" />
              <span>{t("nav.certificates")}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/blog`))}>
              <PenTool className="mr-2 h-4 w-4" />
              <span>{t("nav.blog")}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/contact`))}>
              <Mail className="mr-2 h-4 w-4" />
              <span>{t("nav.contact")}</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading={t("commandMenu.socials")}>
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/vinirex", "_blank"))}>
              <FaGithub className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/-vini-silva/", "_blank"))}>
              <FaLinkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </CommandItem>
          </CommandGroup>

        </CommandList>
      </Command>
    </CommandDialog>
  );
}
