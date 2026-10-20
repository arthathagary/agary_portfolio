"use client";

import React from "react";
import {
  Home,
  User,
  Layers,
  Briefcase,
  Cpu,
  FileText,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import {
  NAVIGATION_ITEMS,
  PROFILE_DATA,
  SectionId,
} from "@/data/portfolio";

interface SidebarProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  mobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
}

const SECTION_ICONS: Record<SectionId, React.ComponentType<{ className?: string }>> = {
  home: Home,
  about: User,
  projects: Layers,
  experience: Briefcase,
  skills: Cpu,
  resume: FileText,
  contact: Mail,
};

export function Sidebar({
  activeSection,
  onSelectSection,
  mobileMenuOpen,
  onCloseMobileMenu,
}: SidebarProps) {
  const handleSelect = (id: SectionId) => {
    onSelectSection(id);
    onCloseMobileMenu();
  };

  return (
    <>
      {/* Desktop Left Sidebar */}
      <aside
        aria-label="Primary Portfolio Navigation"
        className="hidden lg:flex w-60 shrink-0 flex-col justify-between border-r border-workspace-border bg-workspace-surface/75 select-none"
      >
        <div className="p-3.5 space-y-5">
          {/* Compact Engineer Identity Card */}
          <div className="rounded-lg border border-workspace-border-subtle bg-workspace-elevated/60 p-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-workspace-accent-border bg-workspace-accent-dim font-mono text-xs font-semibold text-workspace-accent">
                AA
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-workspace-text">
                  {PROFILE_DATA.fullName}
                </p>
                <p className="truncate text-[11px] text-workspace-muted">
                  {PROFILE_DATA.title}
                </p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-workspace-border-subtle pt-2 text-[11px] font-mono text-workspace-muted">
              <span>MEAN / MERN</span>
              <span className="text-workspace-accent">2+ Yrs Exp</span>
            </div>
          </div>

          {/* Navigation List */}
          <nav aria-label="Workspace Sections" className="space-y-1">
            <p className="px-2.5 pb-1 text-[10px] font-mono uppercase tracking-wider text-workspace-subtle">
              Workspace
            </p>
            {NAVIGATION_ITEMS.map((item) => {
              const Icon = SECTION_ICONS[item.id];
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-[13px] font-medium transition-all ${
                    isActive
                      ? "bg-workspace-accent-dim text-workspace-text"
                      : "text-workspace-muted hover:bg-workspace-hover/70 hover:text-workspace-text"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r-full bg-workspace-accent"
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex items-center gap-2.5">
                    <Icon
                      className={`h-4 w-4 transition-colors ${
                        isActive
                          ? "text-workspace-accent"
                          : "text-workspace-muted group-hover:text-workspace-text"
                      }`}
                    />
                    <span>{item.label}</span>
                  </span>
                  <kbd
                    className={`font-mono text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                      isActive
                        ? "border-workspace-accent-border bg-workspace-surface text-workspace-accent"
                        : "border-transparent text-workspace-subtle group-hover:border-workspace-border"
                    }`}
                    title={`Press Alt+${item.shortcut} or use ⌘K`}
                  >
                    {item.shortcut}
                  </kbd>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Verified Profile Links */}
        <div className="border-t border-workspace-border p-3.5 space-y-2.5">
          <p className="px-1 text-[10px] font-mono uppercase tracking-wider text-workspace-subtle">
            Verified Profiles
          </p>
          <div className="grid grid-cols-1 gap-1 text-xs">
            <a
              href={PROFILE_DATA.contact.githubPersonalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md px-2 py-1.5 text-workspace-muted hover:bg-workspace-hover hover:text-workspace-text transition-colors"
            >
              <span className="flex items-center gap-2 truncate">
                <Github className="h-3.5 w-3.5 shrink-0 text-workspace-accent" />
                <span className="truncate">GitHub (Personal)</span>
              </span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
            </a>
            <a
              href={PROFILE_DATA.contact.githubWorkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md px-2 py-1.5 text-workspace-muted hover:bg-workspace-hover hover:text-workspace-text transition-colors"
            >
              <span className="flex items-center gap-2 truncate">
                <Github className="h-3.5 w-3.5 shrink-0 text-workspace-muted" />
                <span className="truncate">GitHub (Simato Work)</span>
              </span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
            </a>
            <a
              href={PROFILE_DATA.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md px-2 py-1.5 text-workspace-muted hover:bg-workspace-hover hover:text-workspace-text transition-colors"
            >
              <span className="flex items-center gap-2 truncate">
                <Linkedin className="h-3.5 w-3.5 shrink-0 text-workspace-accent" />
                <span className="truncate">LinkedIn</span>
              </span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Compact Horizontal Navigation Pill Bar */}
      <nav
        aria-label="Mobile Section Navigation"
        className="flex lg:hidden items-center gap-1 overflow-x-auto border-b border-workspace-border bg-workspace-surface px-3 py-2 no-scrollbar"
      >
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = SECTION_ICONS[item.id];
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.id)}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "bg-workspace-accent-dim text-workspace-accent border border-workspace-accent-border"
                  : "text-workspace-muted hover:bg-workspace-hover hover:text-workspace-text border border-transparent"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Slide-down Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobileMenu}
        >
          <div
            className="w-72 max-w-[85vw] h-full border-r border-workspace-border bg-workspace-surface p-4 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b border-workspace-border pb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-workspace-accent-border bg-workspace-accent-dim font-mono text-xs font-semibold text-workspace-accent">
                  AA
                </div>
                <div>
                  <p className="text-sm font-semibold text-workspace-text">
                    {PROFILE_DATA.fullName}
                  </p>
                  <p className="text-xs text-workspace-muted">
                    {PROFILE_DATA.title}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                {NAVIGATION_ITEMS.map((item) => {
                  const Icon = SECTION_ICONS[item.id];
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item.id)}
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-workspace-accent-dim text-workspace-accent"
                          : "text-workspace-muted hover:bg-workspace-hover hover:text-workspace-text"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <div>
                        <div>{item.label}</div>
                        <div className="text-[11px] font-normal text-workspace-subtle">
                          {item.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-workspace-border pt-3 space-y-2 text-xs">
              <a
                href={PROFILE_DATA.contact.githubPersonalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md px-2 py-1.5 text-workspace-muted hover:text-workspace-text"
              >
                <span>github.com/arthathagary</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE_DATA.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md px-2 py-1.5 text-workspace-muted hover:text-workspace-text"
              >
                <span>linkedin.com/in/arthathagary</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
