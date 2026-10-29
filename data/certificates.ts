import type { Locale } from "@/lib/i18n";

export type CertificateItem = {
  id: number;
  title: string;
  institution: string;
  issueDate: string;
  credentialLink: string;
  image: string;
};

export const certificatesByLocale: Record<Locale, CertificateItem[]> = {
  pt: [
    {
      id: 1,
      title: "Inteligência Artificial e Computacional",
      institution: "FIAP - Faculdade de Informática e Administração Paulista",
      issueDate: "Janeiro 2026",
      credentialLink:
        "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=7f6c533c0511e1346ee25c33e48c3e71&action=view",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    },
    {
      id: 2,
      title: "C#: criando sua primeira aplicação",
      institution: "Alura",
      issueDate: "Julho 2025",
      credentialLink:
        "https://cursos.alura.com.br/certificate/1b80f713-df05-4ba9-aeed-5082273151fb?lang",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    },
  ],
  en: [
    {
      id: 1,
      title: "Inteligência Artificial e Computacional",
      institution: "FIAP - Faculdade de Informática e Administração Paulista",
      issueDate: "January 2026",
      credentialLink:
        "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=7f6c533c0511e1346ee25c33e48c3e71&action=view",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    },
    {
      id: 2,
      title: "C#: criando sua primeira aplicação",
      institution: "Alura",
      issueDate: "July 2025",
      credentialLink:
        "https://cursos.alura.com.br/certificate/1b80f713-df05-4ba9-aeed-5082273151fb?lang",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    },
  ],
};

export const certificates = certificatesByLocale.en;

export function getCertificates(locale: Locale): CertificateItem[] {
  return certificatesByLocale[locale] ?? certificatesByLocale.pt;
}
