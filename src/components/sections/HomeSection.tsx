"use client";

import React from "react";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Globe,
  FileText,
} from "lucide-react";
import { PROFILE_DATA, SectionId } from "@/data/portfolio";

interface HomeSectionProps {
  onSelectSection: (section: SectionId) => void;
}

export function HomeSection({ onSelectSection }: HomeSectionProps) {
  return (
    <section
      aria-labelledby="home-heading"
      className="rounded-xl border border-workspace-border bg-workspace-surface p-4 sm:p-5 lg:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="inline-flex items-center gap-2 rounded-md border border-workspace-accent-border bg-workspace-accent-dim px-2.5 py-0.5 font-mono text-[11px] font-medium text-workspace-accent">
          <span>{PROFILE_DATA.eyebrow}</span>
        </p>
        <span className="font-mono text-[11px] text-workspace-muted">
          MEAN &amp; MERN · TypeScript · Node.js · AWS
        </span>
      </div>

      <div className="mt-3 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="max-w-3xl">
          <h1
            id="home-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-workspace-text"
          >
            {PROFILE_DATA.fullName}
          </h1>

          <p className="mt-1.5 text-sm sm:text-base font-medium leading-snug text-workspace-text/95">
            {PROFILE_DATA.headline}
          </p>

          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-workspace-muted">
            {PROFILE_DATA.shortIntro}
          </p>
        </div>
      </div>

      {/* Primary Actions + Discreet Verified Links */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-workspace-border-subtle pt-3.5">
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => onSelectSection("projects")}
            className="inline-flex items-center gap-1.5 rounded-lg bg-workspace-accent px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#14171F] hover:opacity-90 transition-opacity"
          >
            <span>Explore Projects</span>
            <ArrowDown className="h-3.5 w-3.5" />
          </button>

          <a
            href={PROFILE_DATA.resumeFilePath}
            download={PROFILE_DATA.resumeDownloadFilename}
            className="inline-flex items-center gap-1.5 rounded-lg border border-workspace-border bg-workspace-elevated px-3.5 py-2 text-xs sm:text-sm font-medium text-workspace-text hover:border-workspace-accent-border hover:text-workspace-accent transition-colors"
          >
            <Download className="h-3.5 w-3.5 text-workspace-accent" />
            <span>Download Résumé</span>
          </a>

          <button
            type="button"
            onClick={() => onSelectSection("resume")}
            className="inline-flex items-center gap-1.5 rounded-lg border border-transparent px-2.5 py-1.5 text-xs font-mono text-workspace-muted hover:bg-workspace-hover hover:text-workspace-text transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-workspace-accent" />
            <span>Inspect Résumé</span>
          </button>
        </div>

        {/* Discreet Contact & Profile Links */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <a
            href={PROFILE_DATA.contact.githubPersonalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
            title="Personal GitHub (56+ public repositories)"
          >
            <Github className="h-3.5 w-3.5 text-workspace-accent" />
            <span>GitHub</span>
          </a>
          <a
            href={PROFILE_DATA.contact.githubWorkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
            title="Work GitHub (Simato Vas Solutions)"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Work GitHub</span>
          </a>
          <a
            href={PROFILE_DATA.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-3.5 w-3.5 text-workspace-accent" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE_DATA.contact.email}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
            title={PROFILE_DATA.contact.email}
          >
            <Mail className="h-3.5 w-3.5 text-workspace-accent" />
            <span>Email</span>
          </a>
          <a
            href={PROFILE_DATA.contact.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
          >
            <Globe className="h-3.5 w-3.5 text-workspace-accent" />
            <span>{PROFILE_DATA.contact.websiteHandle}</span>
          </a>
        </div>
      </div>

      {/* Core Technical Pillars Strip */}
      <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
        {PROFILE_DATA.coreStrengths.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-workspace-border-subtle bg-workspace-elevated/50 px-3 py-2"
          >
            <p className="font-mono text-[11px] font-semibold text-workspace-accent">
              {item.label}
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-workspace-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
