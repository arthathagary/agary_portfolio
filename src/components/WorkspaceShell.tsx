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

export function WorkspaceShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(
    null
  );
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const mainPanelRef = useRef<HTMLElement>(null);

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

  // Sync section state with URL hash for deep linking & back/forward navigation
  useEffect(() => {
    const syncFromHash = () => {
      const rawHash = window.location.hash.replace("#", "").toLowerCase();
      if (VALID_SECTIONS.has(rawHash as SectionId)) {
        setActiveSection(rawHash as SectionId);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const handleSelectSection = useCallback((section: SectionId) => {
    setActiveSection(section);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${section}`);
    }
    mainPanelRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSelectProjectById = useCallback((projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId);
    if (found) {
      setActiveProject(found);
    }
  }, []);

  // Global keyboard shortcuts (Cmd/Ctrl + K, and number shortcuts 1-7 when not focused in an input)
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
          handleSelectSection(navItem.id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, commandPaletteOpen, handleSelectSection]);

  return (
    <div className="min-h-screen w-full bg-workspace-bg text-workspace-text flex flex-col justify-center lg:p-4 xl:p-6">
      {/* Centered Desktop-Inspired Application Frame */}
      <div className="mx-auto flex w-full max-w-[1380px] flex-1 lg:h-[calc(100vh-2rem)] xl:h-[calc(100vh-3rem)] lg:max-h-[960px] flex-col overflow-hidden lg:rounded-2xl border-workspace-border lg:border bg-workspace-surface/40 shadow-window">
        {/* Top Window Toolbar */}
        <Toolbar
          activeSection={activeSection}
          activeProjectName={activeProject?.name ?? null}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
          onSelectSection={handleSelectSection}
        />

        {/* Workspace Body: Left Sidebar + Main Content Area */}
        <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
          <Sidebar
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            mobileMenuOpen={mobileMenuOpen}
            onCloseMobileMenu={() => setMobileMenuOpen(false)}
          />

          <main
            ref={mainPanelRef}
            id="main-workspace-content"
            tabIndex={-1}
            className="flex-1 overflow-y-auto bg-workspace-bg/50 p-4 sm:p-6 lg:p-8 workspace-scroll focus:outline-none"
          >
            <div className="mx-auto max-w-5xl">
              {activeSection === "home" && (
                <HomeSection
                  onSelectSection={handleSelectSection}
                  onOpenCaseStudy={(project) => setActiveProject(project)}
                />
              )}
              {activeSection === "about" && (
                <AboutSection onSelectSection={handleSelectSection} />
              )}
              {activeSection === "projects" && (
                <ProjectsSection
                  onOpenCaseStudy={(project) => setActiveProject(project)}
                />
              )}
              {activeSection === "experience" && <ExperienceSection />}
              {activeSection === "skills" && <SkillsSection />}
              {activeSection === "resume" && <ResumeSection />}
              {activeSection === "contact" && <ContactSection />}
            </div>
          </main>
        </div>

        {/* Restrained Application Status Bar */}
        <footer className="hidden sm:flex h-8 shrink-0 items-center justify-between border-t border-workspace-border bg-workspace-surface px-4 font-mono text-[11px] text-workspace-muted">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-workspace-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-workspace-accent" />
              <span>{PROFILE_DATA.fullName}</span>
            </span>
            <span className="text-workspace-subtle">·</span>
            <span>{PROFILE_DATA.title} (MEAN / MERN)</span>
          </div>

          <div className="flex items-center gap-4">
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
        onSelectSection={handleSelectSection}
        onSelectProject={handleSelectProjectById}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
    </div>
  );
}
