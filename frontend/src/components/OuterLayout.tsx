import { ReactNode } from "react";

const OuterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="text-text-primary dark:text-text-primary-dark">
        {/* <header className="bg-primary h-16 px-4 sticky top-0 flex items-center justify-between backdrop-blur-md border-b border-primary/30 shadow-sm dark:bg-surface-dark dark:border-surface-dark/30">
          <a className="text-text-primary font-bold text-3xl" href="#">
            <h1>Glowme</h1>
          </a>
        </header> */}
        <main className="h-screen mx-auto bg-background dark:bg-background-dark">
          {children}
        </main>
        {/* <footer className="h-12 px-4 bg-footer-background flex items-center text-xs text-text-secondary">
          © 2025 GlowMe · AI
        </footer> */}
      </div>
    </>
  );
};

export default OuterLayout;
