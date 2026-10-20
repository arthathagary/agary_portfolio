"use client";

import React from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Globe,
  FileText,
  Layers,
} from "lucide-react";
import {
  PROFILE_DATA,
  PROJECTS_DATA,
  ProjectCaseStudy,
  SectionId,
} from "@/data/portfolio";
import { ProjectCard } from "../ProjectCard";

interface HomeSectionProps {
  onSelectSection: (section: SectionId) => void;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export function HomeSection({
  onSelectSection,
  onOpenCaseStudy,
}: HomeSectionProps) {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <div className="space-y-8">
      {/* Opening Hero Panel — Designed for the First Five Seconds */}
      <section
        aria-labelledby="home-heading"
        className="rounded-xl border border-workspace-border bg-workspace-surface p-5 sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="inline-flex items-center gap-2 rounded-md border border-workspace-accent-border bg-workspace-accent-dim px-2.5 py-1 font-mono text-xs font-medium text-workspace-accent">
            <span>{PROFILE_DATA.eyebrow}</span>
          </p>
          <span className="font-mono text-xs text-workspace-muted">
            MEAN &amp; MERN · TypeScript · Node.js · AWS
          </span>
        </div>

        <h1
          id="home-heading"
          className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-workspace-text"
        >
          {PROFILE_DATA.fullName}
        </h1>

        <p className="mt-2.5 max-w-3xl text-base sm:text-lg font-medium leading-relaxed text-workspace-text/95">
          {PROFILE_DATA.headline}
        </p>

        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-workspace-muted">
          {PROFILE_DATA.shortIntro}
        </p>

        {/* Primary Actions + Discreet Verified Links */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-workspace-border-subtle pt-5">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectSection("projects")}
              className="inline-flex items-center gap-2 rounded-lg bg-workspace-accent px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#14171F] hover:opacity-90 transition-opacity"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={PROFILE_DATA.resumeFilePath}
              download={PROFILE_DATA.resumeDownloadFilename}
              className="inline-flex items-center gap-2 rounded-lg border border-workspace-border bg-workspace-elevated px-4 py-2.5 text-xs sm:text-sm font-medium text-workspace-text hover:border-workspace-accent-border hover:text-workspace-accent transition-colors"
            >
              <Download className="h-4 w-4 text-workspace-accent" />
              <span>Download Résumé</span>
            </a>

            <button
              type="button"
              onClick={() => onSelectSection("resume")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-transparent px-3 py-2 text-xs font-mono text-workspace-muted hover:bg-workspace-hover hover:text-workspace-text transition-colors"
            >
              <FileText className="h-3.5 w-3.5 text-workspace-accent" />
              <span>Inspect Résumé View</span>
            </button>
          </div>

          {/* Discreet Contact & Profile Links */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href={PROFILE_DATA.contact.githubPersonalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1.5 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
              title="Personal GitHub (56+ public repositories)"
            >
              <Github className="h-3.5 w-3.5 text-workspace-accent" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE_DATA.contact.githubWorkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1.5 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
              title="Work GitHub (Simato Vas Solutions)"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Work GitHub</span>
            </a>
            <a
              href={PROFILE_DATA.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1.5 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-3.5 w-3.5 text-workspace-accent" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PROFILE_DATA.contact.email}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1.5 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
              title={PROFILE_DATA.contact.email}
            >
              <Mail className="h-3.5 w-3.5 text-workspace-accent" />
              <span>Email</span>
            </a>
            <a
              href={PROFILE_DATA.contact.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated/60 px-2.5 py-1.5 text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-text transition-colors"
            >
              <Globe className="h-3.5 w-3.5 text-workspace-accent" />
              <span>{PROFILE_DATA.contact.websiteHandle}</span>
            </a>
          </div>
        </div>

        {/* Core Technical Pillars Strip */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5">
          {PROFILE_DATA.coreStrengths.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-workspace-border-subtle bg-workspace-elevated/50 p-3"
            >
              <p className="font-mono text-xs font-semibold text-workspace-accent">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-workspace-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Compact Selected Projects Area Directly Beneath Introduction */}
      <section aria-labelledby="featured-work-heading" className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-workspace-accent" />
              <h2
                id="featured-work-heading"
                className="text-lg font-semibold tracking-tight text-workspace-text"
              >
                Selected Commercial &amp; SaaS Engineering Work
              </h2>
            </div>
            <p className="mt-0.5 text-xs text-workspace-muted">
              Production platforms engineered at Simato Vas Solutions — click any panel to inspect architecture, contributions, and verified metrics.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectSection("projects")}
            className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border bg-workspace-surface px-3 py-1.5 text-xs font-medium text-workspace-text hover:border-workspace-accent-border hover:text-workspace-accent transition-colors"
          >
            <span>View All {PROJECTS_DATA.length} Projects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              compact
            />
          ))}
        </div>
      </section>
    </div>
  );
}
