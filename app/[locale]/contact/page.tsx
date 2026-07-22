"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, MapPin} from "lucide-react";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";
import { PiWhatsappLogo } from "react-icons/pi";

export default function ContactPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  const formSchema = z.object({
    name: z.string().min(2, { message: t("contact.validations.name") }),
    email: z.string().email({ message: t("contact.validations.email") }),
    subject: z.string().min(5, { message: t("contact.validations.subject") }),
    message: z.string().min(10, { message: t("contact.validations.message") }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to an API route or email service (e.g. Resend, EmailJS)
    alert(t("contact.success"));
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("contact.title")}</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">{t("contact.description")}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t("contact.email")}</h3>
                <p className="text-muted-foreground">vinirex007@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t("contact.location")}</h3>
                <p className="text-muted-foreground">{t("contact.locationValue")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <PiWhatsappLogo className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t("contact.phone")}</h3>
                <p className="text-muted-foreground">{t("contact.phoneValue")}</p>
              </div>
            </div>
          </div>

          

          <div className="lg:col-span-2 bg-card border border-border p-8 rounded-xl shadow-sm">
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}
