import { ArrowUp } from "lucide-react";



export const Footer = () => {
  return (
    <footer className="mt-8 border-t border-border bg-card py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <a
          href="#hero"
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-primary/80 hover:bg-primary/30text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
