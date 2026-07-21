"use client";

import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Terminal as TerminalIcon } from "lucide-react";
import { getTranslation, type Locale } from "@/lib/i18n";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);


  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="text-muted-foreground">
            {t("terminal.available")}<br />
            - <span className="text-primary">about</span>: {t("terminal.about")}<br />
            - <span className="text-primary">projects</span>: {t("terminal.projects")}<br />
            - <span className="text-primary">skills</span>: {t("terminal.skills")}<br />
            - <span className="text-primary">resume</span>: {t("terminal.resume")}<br />
            - <span className="text-primary">contact</span>: {t("terminal.contact")}<br />
            - <span className="text-primary">github</span>: {t("terminal.github")}<br />
            - <span className="text-primary">linkedin</span>: {t("terminal.linkedin")}<br />
            - <span className="text-primary">clear</span>: {t("terminal.clear")}
          </div>
        );
        break;
      case "about":
        output = t("terminal.navigatingAbout");
        router.push(`/${locale}#about`);
        break;
      case "projects":
        output = t("terminal.navigatingProjects");
        router.push(`/${locale}/projects`);
        break;
      case "skills":
        output = t("terminal.scrollingAbout");
        router.push(`/${locale}#about`);
        break;
      case "contact":
        output = t("terminal.navigatingContact");
        router.push(`/${locale}/contact`);
        break;
      case "resume":
        output = t("terminal.downloadingResume");
        const pdfPath = locale === "pt" ? "/curriculo.pdf" : "/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = locale === "pt" ? "curriculo.pdf" : "resume.pdf";
        link.target = "_blank";
        link.click();
        break;
      case "github":
        output = t("terminal.openingGitHub");
        window.open("https://github.com/vinirex", "_blank");
        break;
      case "linkedin":
        output = t("terminal.openingLinkedIn");
        window.open("https://www.linkedin.com/in/-vini-silva/", "_blank");
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = <span className="text-destructive">{t("terminal.unknown")}: {cmd}. {t("terminal.help")}</span>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 mb-20">
      <div className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-2 bg-muted/50 border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="mx-auto flex items-center text-xs text-muted-foreground font-mono">
            <TerminalIcon className="w-3 h-3 mr-2" /> vinicius@portfolio: ~
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-4 h-[300px] overflow-y-auto font-mono text-sm cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="text-muted-foreground mb-4">
            {t("terminal.welcome")}<br />
            {t("terminal.help")}
          </div>

          {history.map((item, i) => (
            <div key={i} className="mb-2">
              <div className="flex items-center text-primary">
                <span className="text-green-500 mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                {item.command}
              </div>
              <div className="mt-1 ml-4">{item.output}</div>
            </div>
          ))}

          <form onSubmit={handleCommand} className="flex items-center mt-2">
            <span className="text-green-500 mr-2">➜</span>
            <span className="text-blue-400 mr-2">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none border-none text-foreground placeholder:text-muted-foreground/50"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
