"use client";

import React from "react";
import {
  Search,
  Sun,
  Moon,
  Download,
  Menu,
  X,
  Terminal,
} from "lucide-react";
import {
  NAVIGATION_ITEMS,
  PROFILE_DATA,
  SectionId,
} from "@/data/portfolio";

interface ToolbarProps {
  activeSection: SectionId;
  activeProjectName?: string | null;
  onOpenCommandPalette: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onSelectSection: (section: SectionId) => void;
}

export function Toolbar({
  activeSection,
  activeProjectName,
  onOpenCommandPalette,
  theme,
  onToggleTheme,
  mobileMenuOpen,
  onToggleMobileMenu,
  onSelectSection,
}: ToolbarProps) {
  const currentNav =
    NAVIGATION_ITEMS.find((item) => item.id === activeSection) ??
    NAVIGATION_ITEMS[0];

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-workspace-border bg-workspace-surface/95 px-3.5 backdrop-blur-sm sm:px-5">
      {/* Left: Subtle macOS-inspired window dots + workspace path */}
      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className="hidden sm:flex items-center gap-1.5"
          aria-hidden="true"
          title="Minimal Engineer Workspace"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/75 border border-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/75 border border-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/75 border border-black/15" />
        </div>

        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="inline-flex lg:hidden items-center justify-center rounded-md p-1.5 text-workspace-muted hover:bg-workspace-hover hover:text-workspace-text transition-colors"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        <div className="h-3.5 w-[1px] bg-workspace-border hidden sm:block" />

        <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-mono truncate">
          <Terminal className="h-3.5 w-3.5 text-workspace-accent shrink-0" />
          <button
            type="button"
            onClick={() => onSelectSection("home")}
            className="font-medium text-workspace-text hover:text-workspace-accent transition-colors truncate"
          >
            arthath-agary
          </button>
          <span className="text-workspace-subtle">/</span>
          <span className="text-workspace-muted truncate">
            {currentNav.label.toLowerCase()}
          </span>
          {activeProjectName && (
            <>
              <span className="text-workspace-subtle hidden md:inline">/</span>
              <span className="text-workspace-accent truncate hidden md:inline">
                {activeProjectName.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Right: Command Palette, Résumé quick link, Theme Toggle */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="group flex items-center gap-2.5 rounded-md border border-workspace-border bg-workspace-elevated/80 px-2.5 py-1 text-xs text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-all"
          aria-label="Open command palette (Command + K)"
        >
          <Search className="h-3.5 w-3.5 text-workspace-muted group-hover:text-workspace-accent transition-colors" />
          <span className="hidden sm:inline">Jump to section or project...</span>
          <span className="sm:hidden">Jump</span>
          <kbd className="hidden md:inline-flex items-center gap-0.5 rounded border border-workspace-border bg-workspace-surface px-1.5 py-0.5 font-mono text-[10px] text-workspace-muted">
            ⌘K
          </kbd>
        </button>

        <a
          href={PROFILE_DATA.resumeFilePath}
          download={PROFILE_DATA.resumeDownloadFilename}
          onClick={(e) => {
            // Allow user to also view the Résumé section if they prefer, while still triggering download
            e.stopPropagation();
          }}
          className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-workspace-border bg-workspace-elevated/60 px-2.5 py-1 text-xs font-medium text-workspace-text hover:border-workspace-accent-border hover:text-workspace-accent transition-colors"
          title="Download verified PDF résumé"
        >
          <Download className="h-3.5 w-3.5 text-workspace-accent" />
          <span>Résumé</span>
        </a>

        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-flex items-center justify-center rounded-md border border-workspace-border bg-workspace-elevated/60 p-1.5 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark graphite theme"
          }
          title={
            theme === "dark" ? "Switch to light theme" : "Switch to dark graphite theme"
          }
        >
          {theme === "dark" ? (
            <Sun className="h-3.5 w-3.5" />
          ) : (
            <Moon className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </header>
  );
}
