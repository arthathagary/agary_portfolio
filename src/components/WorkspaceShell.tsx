"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  NAVIGATION_ITEMS,
  PROFILE_DATA,
  PROJECTS_DATA,
  ProjectCaseStudy,
  SectionId,
} from "@/data/portfolio";
import { Toolbar } from "./Toolbar";
import { Sidebar } from "./Sidebar";
import { CommandPalette } from "./CommandPalette";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { HomeSection } from "./sections/HomeSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ResumeSection } from "./sections/ResumeSection";
import { ContactSection } from "./sections/ContactSection";

const VALID_SECTIONS = new Set<SectionId>(
  NAVIGATION_ITEMS.map((item) => item.id)
);

const SECTION_ORDER: SectionId[] = [
  "home",
  "projects",
  "experience",
  "skills",
  "about",
  "resume",
  "contact",
];

export function WorkspaceShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(
    null
  );
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const mainPanelRef = useRef<HTMLElement>(null);
  const isProgrammaticScroll = useRef(false);

  // Sync theme with document root
  useEffect(() => {
    const saved = window.localStorage.getItem("ws-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(saved);
    }
  }, []);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(next);
      window.localStorage.setItem("ws-theme", next);
      return next;
    });
  }, []);

  const scrollToSection = useCallback((section: SectionId, smooth = true) => {
    setActiveSection(section);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${section}`);
    }

    const container = mainPanelRef.current;
    if (!container) return;

    if (section === "home") {
      isProgrammaticScroll.current = true;
      container.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 450);
      return;
    }

    const targetEl = container.querySelector<HTMLElement>(
      `#section-${section}`
    );
    if (targetEl) {
      isProgrammaticScroll.current = true;
      const containerTop = container.getBoundingClientRect().top;
      const targetTop = targetEl.getBoundingClientRect().top;
      const offset = targetTop - containerTop + container.scrollTop - 16;
      container.scrollTo({
        top: Math.max(0, offset),
        behavior: smooth ? "smooth" : "auto",
      });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 450);
    }
  }, []);

  // Sync initial hash on load
  useEffect(() => {
    const rawHash = window.location.hash.replace("#", "").toLowerCase();
    if (VALID_SECTIONS.has(rawHash as SectionId)) {
      scrollToSection(rawHash as SectionId, false);
    }
  }, [scrollToSection]);

  // Update active section indicator in Sidebar & Toolbar as user scrolls inside the desktop app panel
  useEffect(() => {
    const container = mainPanelRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const scrollTop = container.scrollTop;
      if (scrollTop < 120) {
        setActiveSection("home");
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const triggerLine = containerRect.top + containerRect.height * 0.28;

      let current: SectionId = "home";
      for (const id of SECTION_ORDER) {
        const el = container.querySelector<HTMLElement>(`#section-${id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectProjectById = useCallback((projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId);
    if (found) {
      setActiveProject(found);
    }
  }, []);

  // Global keyboard shortcuts (Cmd/Ctrl + K, and Alt + 1..7)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
        return;
      }

      const target = e.target as HTMLElement | null;
      const isInputFocused =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (
        !isInputFocused &&
        !commandPaletteOpen &&
        !activeProject &&
        !e.metaKey &&
        !e.ctrlKey &&
        e.altKey
      ) {
        const navItem = NAVIGATION_ITEMS.find((item) => item.shortcut === e.key);
        if (navItem) {
          e.preventDefault();
          scrollToSection(navItem.id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, commandPaletteOpen, scrollToSection]);

  return (
    <div className="h-dvh max-h-dvh w-full overflow-hidden bg-workspace-bg text-workspace-text flex flex-col lg:p-3 xl:p-4">
      {/* Centered Desktop-Inspired Application Frame — Fits 100% inside viewport with zero outer page scroll */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 min-h-0 flex-col overflow-hidden lg:rounded-xl border-workspace-border lg:border bg-workspace-surface/40 shadow-window">
        {/* Top Window Toolbar (Fixed at top of app frame) */}
        <Toolbar
          activeSection={activeSection}
          activeProjectName={activeProject?.name ?? null}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
          onSelectSection={scrollToSection}
        />

        {/* Workspace Body: Fixed Left Sidebar + Scrollable Main Content Viewport */}
        <div className="flex flex-1 min-h-0 flex-col lg:flex-row overflow-hidden">
          <Sidebar
            activeSection={activeSection}
            onSelectSection={scrollToSection}
            mobileMenuOpen={mobileMenuOpen}
            onCloseMobileMenu={() => setMobileMenuOpen(false)}
          />

          <main
            ref={mainPanelRef}
            id="main-workspace-content"
            tabIndex={-1}
            className="flex-1 min-h-0 overflow-y-auto bg-workspace-bg/50 p-3.5 sm:p-5 lg:p-6 workspace-scroll focus:outline-none"
          >
            <div className="mx-auto max-w-5xl space-y-10 pb-12">
              <div id="section-home" className="scroll-mt-4">
                <HomeSection onSelectSection={scrollToSection} />
              </div>

              <div id="section-projects" className="scroll-mt-4">
                <ProjectsSection
                  onOpenCaseStudy={(project) => setActiveProject(project)}
                />
              </div>

              <div id="section-experience" className="scroll-mt-4">
                <ExperienceSection />
              </div>

              <div id="section-skills" className="scroll-mt-4">
                <SkillsSection />
              </div>

              <div id="section-about" className="scroll-mt-4">
                <AboutSection onSelectSection={scrollToSection} />
              </div>

              <div id="section-resume" className="scroll-mt-4">
                <ResumeSection />
              </div>

              <div id="section-contact" className="scroll-mt-4">
                <ContactSection />
              </div>
            </div>
          </main>
        </div>

        {/* Restrained Application Status Bar — Always visible at bottom of viewport */}
        <footer className="hidden sm:flex h-7 shrink-0 items-center justify-between border-t border-workspace-border bg-workspace-surface px-4 font-mono text-[11px] text-workspace-muted">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-workspace-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-workspace-accent" />
              <span>{PROFILE_DATA.fullName}</span>
            </span>
            <span className="text-workspace-subtle">·</span>
            <span>{PROFILE_DATA.title} (MEAN / MERN)</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-workspace-subtle hidden md:inline">
              Scroll workspace panel for full portfolio
            </span>
            <span className="text-workspace-subtle hidden md:inline">·</span>
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="hover:text-workspace-accent transition-colors"
            >
              Command Palette (⌘K)
            </button>
            <span className="text-workspace-subtle">·</span>
            <a
              href={`mailto:${PROFILE_DATA.contact.email}`}
              className="hover:text-workspace-accent transition-colors"
            >
              {PROFILE_DATA.contact.email}
            </a>
          </div>
        </footer>
      </div>

      {/* Interactive Case Study Drawer / Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Command Palette (Cmd/Ctrl + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectSection={scrollToSection}
        onSelectProject={handleSelectProjectById}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
    </div>
  );
}
