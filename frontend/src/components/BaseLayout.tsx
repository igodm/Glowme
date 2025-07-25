import { ReactNode } from "react";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="text-text-primary dark:text-text-primary-dark">
        <header className="h-16 px-4 sticky top-0 flex items-center justify-between bg-surface/70 backdrop-blur-md border-b border-surface/30 shadow-sm dark:bg-surface-dark dark:border-surface-dark/30">
          <a className="text-primary font-bold text-3xl" href="#">
            <h1>Glowme</h1>
          </a>
          <button
            className="absolute top-0 right-0 z-50"
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
          >
            switch
          </button>
        </header>
        <main className="min-h-[calc(100dvh-112px)] bg-background dark:bg-background-dark">
          {children}
        </main>
        <footer className="h-12 px-4 bg-footer-background flex items-center text-xs text-text-secondary">
          © 2025 GlowMe · AI
        </footer>
      </div>
    </>
  );
};

export default BaseLayout;
