import { useEffect, lazy, Suspense } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { LoadingScreen } from "./components/layout/LoadingScreen";
import { ScrollProgressBar } from "./components/layout/ScrollProgressBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { SocialDock } from "./components/layout/SocialDock";
import { CursorGlow } from "./components/layout/CursorGlow";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { NotFound } from "./routes/NotFound";

const TechStack = lazy(() => import("./components/sections/TechStack"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Contact = lazy(() => import("./components/sections/Contact"));
const CommandMenu = lazy(() => import("./components/layout/CommandMenu"));

function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [t]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t.a11y.skipToContent}
      </a>
      <LoadingScreen />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Suspense fallback={null}>
          <TechStack />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <SocialDock />
      <Suspense fallback={null}>
        <CommandMenu />
      </Suspense>
    </>
  );
}

function AppShell() {
  const isHome = window.location.pathname === "/";
  return isHome ? <Home /> : <NotFound />;
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

export default App;
