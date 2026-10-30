"use client";

import { motion } from "framer-motion";
import { getCertificates } from "@/data/certificates";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";

export default function CertificatesPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const items = getCertificates(locale);

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t("certificates.title")}
        </h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          {t("certificates.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-medium text-primary">{cert.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t("certificates.issued")} {cert.issueDate}
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("certificates.button")} — ${cert.title}`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full gap-2"
                    )}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t("certificates.button")}</span>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
