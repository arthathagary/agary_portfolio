"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  CornerDownLeft,
  Layers,
  Compass,
  Download,
  Sun,
  Moon,
  ExternalLink,
} from "lucide-react";
import {
  NAVIGATION_ITEMS,
  PROFILE_DATA,
  PROJECTS_DATA,
  SectionId,
} from "@/data/portfolio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: SectionId) => void;
  onSelectProject: (projectId: string) => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

interface CommandOption {
  id: string;
  group: "Sections" | "Case Studies" | "Actions";
  label: string;
  subtitle: string;
  shortcut?: string;
  action: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onSelectSection,
  onSelectProject,
  theme,
  onToggleTheme,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const options = useMemo<CommandOption[]>(() => {
    const sectionItems: CommandOption[] = NAVIGATION_ITEMS.map((nav) => ({
      id: `nav-${nav.id}`,
      group: "Sections",
      label: `Go to ${nav.label}`,
      subtitle: nav.description,
      shortcut: nav.shortcut,
      action: () => {
        onSelectSection(nav.id);
        onClose();
      },
    }));

    const projectItems: CommandOption[] = PROJECTS_DATA.map((project) => ({
      id: `proj-${project.id}`,
      group: "Case Studies",
      label: `${project.name} — ${project.tagline}`,
      subtitle: project.technologies.slice(0, 5).join(" · "),
      action: () => {
        onSelectProject(project.id);
        onClose();
      },
    }));

    const actionItems: CommandOption[] = [
      {
        id: "act-resume",
        group: "Actions",
        label: "Download Verified Résumé (PDF)",
        subtitle: PROFILE_DATA.resumeDownloadFilename,
        action: () => {
          const link = document.createElement("a");
          link.href = PROFILE_DATA.resumeFilePath;
          link.download = PROFILE_DATA.resumeDownloadFilename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          onClose();
        },
      },
      {
        id: "act-theme",
        group: "Actions",
        label:
          theme === "dark"
            ? "Switch to Light Workspace Theme"
            : "Switch to Dark Graphite Theme",
        subtitle: "Toggle visual color palette",
        action: () => {
          onToggleTheme();
          onClose();
        },
      },
      {
        id: "act-github",
        group: "Actions",
        label: "Open GitHub (Personal — 56+ Public Repositories)",
        subtitle: PROFILE_DATA.contact.githubPersonalHandle,
        action: () => {
          window.open(
            PROFILE_DATA.contact.githubPersonalUrl,
            "_blank",
            "noopener,noreferrer"
          );
          onClose();
        },
      },
      {
        id: "act-linkedin",
        group: "Actions",
        label: "Open LinkedIn Profile",
        subtitle: PROFILE_DATA.contact.linkedinHandle,
        action: () => {
          window.open(
            PROFILE_DATA.contact.linkedinUrl,
            "_blank",
            "noopener,noreferrer"
          );
          onClose();
        },
      },
    ];

    return [...sectionItems, ...projectItems, ...actionItems];
  }, [onClose, onSelectProject, onSelectSection, onToggleTheme, theme]);

  const filteredOptions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(q) ||
        opt.subtitle.toLowerCase().includes(q) ||
        opt.group.toLowerCase().includes(q)
    );
  }, [options, query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredOptions.length > 0 ? (prev + 1) % filteredOptions.length : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredOptions.length > 0
            ? (prev - 1 + filteredOptions.length) % filteredOptions.length
            : 0
        );
      } else if (e.key === "Enter" && filteredOptions[selectedIndex]) {
        e.preventDefault();
        filteredOptions[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredOptions, isOpen, onClose, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/65 px-4 pt-[12vh] backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Workspace Command Palette"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-workspace-border bg-workspace-surface shadow-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-workspace-border px-4 py-3">
          <Search className="h-4 w-4 text-workspace-accent shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section, project name, or technology (e.g., Gemini, Otenro, Résumé)..."
            className="w-full bg-transparent text-sm text-workspace-text placeholder:text-workspace-subtle focus:outline-none"
            aria-label="Filter commands"
          />
          <kbd className="rounded border border-workspace-border bg-workspace-elevated px-1.5 py-0.5 font-mono text-[10px] text-workspace-muted">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2 workspace-scroll">
          {filteredOptions.length === 0 ? (
            <div className="py-8 text-center text-sm text-workspace-muted">
              No matching sections, projects, or actions found.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredOptions.map((option, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={option.action}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-colors ${
                      isSelected
                        ? "bg-workspace-accent-dim text-workspace-text"
                        : "text-workspace-muted hover:bg-workspace-hover"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-workspace-border bg-workspace-elevated text-workspace-accent">
                        {option.group === "Sections" && (
                          <Compass className="h-3.5 w-3.5" />
                        )}
                        {option.group === "Case Studies" && (
                          <Layers className="h-3.5 w-3.5" />
                        )}
                        {option.group === "Actions" &&
                          (option.id === "act-resume" ? (
                            <Download className="h-3.5 w-3.5" />
                          ) : option.id === "act-theme" ? (
                            theme === "dark" ? (
                              <Sun className="h-3.5 w-3.5" />
                            ) : (
                              <Moon className="h-3.5 w-3.5" />
                            )
                          ) : (
                            <ExternalLink className="h-3.5 w-3.5" />
                          ))}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-xs font-semibold text-workspace-text">
                            {option.label}
                          </span>
                          <span className="rounded bg-workspace-elevated px-1.5 py-0.5 font-mono text-[10px] text-workspace-subtle">
                            {option.group}
                          </span>
                        </div>
                        <p className="truncate text-[11px] text-workspace-muted">
                          {option.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {option.shortcut && (
                        <kbd className="rounded border border-workspace-border bg-workspace-elevated px-1.5 py-0.5 font-mono text-[10px] text-workspace-muted">
                          {option.shortcut}
                        </kbd>
                      )}
                      {isSelected && (
                        <CornerDownLeft className="h-3.5 w-3.5 text-workspace-accent" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Hints */}
        <div className="flex items-center justify-between border-t border-workspace-border bg-workspace-elevated/60 px-4 py-2 text-[11px] text-workspace-muted font-mono">
          <span>↑↓ Navigate · ↵ Select · ESC Close</span>
          <span>Arthath Agary Workspace</span>
        </div>
      </div>
    </div>
  );
}
