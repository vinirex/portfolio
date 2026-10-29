"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t("contact.title")}
        </h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          {t("contact.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:viniciuspereirasprofissional@gmail.com"
            className="flex items-start gap-4 bg-card border border-border hover:border-primary/50 transition-colors p-6 rounded-xl shadow-sm group"
          >
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                {t("contact.email")}
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
              </h3>
              <p className="text-muted-foreground break-all">
                viniciuspereirasprofissional@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/5511939448410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-card border border-border hover:border-primary/50 transition-colors p-6 rounded-xl shadow-sm group"
          >
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <PiWhatsappLogo className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                {t("contact.phone")}
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
              </h3>
              <p className="text-muted-foreground">{t("contact.phoneValue")}</p>
            </div>
          </a>

          <Link
            href="https://www.linkedin.com/in/-vini-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-card border border-border hover:border-primary/50 transition-colors p-6 rounded-xl shadow-sm group"
          >
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <FaLinkedin className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                {t("contact.linkedin")}
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
              </h3>
              <p className="text-muted-foreground">linkedin.com/in/-vini-silva</p>
            </div>
          </Link>

          <Link
            href="https://github.com/vinirex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-card border border-border hover:border-primary/50 transition-colors p-6 rounded-xl shadow-sm group"
          >
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <FaGithub className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                {t("contact.github")}
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
              </h3>
              <p className="text-muted-foreground">github.com/vinirex</p>
            </div>
          </Link>

          <div className="flex items-start gap-4 bg-card border border-border p-6 rounded-xl shadow-sm md:col-span-2">
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{t("contact.location")}</h3>
              <p className="text-muted-foreground">
                {t("contact.locationValue")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
