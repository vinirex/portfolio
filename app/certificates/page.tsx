"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificates</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          Continuous learning is essential in software engineering. Here are some of the professional certifications and courses I have completed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-medium text-primary">{cert.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2">Issued: {cert.issueDate}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={cert.credentialLink} target="_blank">
                      <ExternalLink className="mr-2 w-4 h-4" /> View Credential
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
