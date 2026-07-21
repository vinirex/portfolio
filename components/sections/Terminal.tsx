"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Terminal as TerminalIcon } from "lucide-react";

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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="text-muted-foreground">
            Available commands:<br />
            - <span className="text-primary">about</span>: Learn more about me<br />
            - <span className="text-primary">projects</span>: View my portfolio<br />
            - <span className="text-primary">skills</span>: See my technical skills<br />
            - <span className="text-primary">resume</span>: Download my resume<br />
            - <span className="text-primary">contact</span>: Get in touch<br />
            - <span className="text-primary">github</span>: Open my GitHub profile<br />
            - <span className="text-primary">linkedin</span>: Open my LinkedIn profile<br />
            - <span className="text-primary">clear</span>: Clear terminal
          </div>
        );
        break;
      case "about":
        output = "Navigating to /about...";
        router.push("/about");
        break;
      case "projects":
        output = "Navigating to /projects...";
        router.push("/projects");
        break;
      case "skills":
        output = "Navigating to /about (Skills section)...";
        router.push("/about");
        break;
      case "contact":
        output = "Navigating to /contact...";
        router.push("/contact");
        break;
      case "resume":
        output = "Downloading resume...";
        window.open("/resume.pdf", "_blank");
        break;
      case "github":
        output = "Opening GitHub...";
        window.open("https://github.com", "_blank");
        break;
      case "linkedin":
        output = "Opening LinkedIn...";
        window.open("https://linkedin.com", "_blank");
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = <span className="text-destructive">Command not found: {cmd}. Type 'help' for a list of commands.</span>;
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
            Welcome to ViniciusOS (v1.0.0)<br />
            Type 'help' to see available commands.
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
