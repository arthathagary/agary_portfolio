"use client";

import React from "react";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { ProjectCaseStudy } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
  compact?: boolean;
}

export function ProjectCard({
  project,
  onOpenCaseStudy,
  compact = false,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-workspace-border bg-workspace-surface p-4 sm:p-5 transition-all hover:border-workspace-accent-border hover:shadow-card">
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-workspace-accent">
                {project.category}
              </span>
              <span className="text-workspace-subtle">·</span>
              <span className="font-mono text-[11px] text-workspace-muted">
                {project.organization}
              </span>
            </div>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-workspace-text group-hover:text-workspace-accent transition-colors">
              {project.name}{" "}
              <span className="font-normal text-workspace-muted text-base">
                — {project.tagline}
              </span>
            </h3>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex shrink-0 items-center gap-1 rounded-md border border-workspace-border bg-workspace-elevated px-2.5 py-1 font-mono text-xs text-workspace-muted hover:border-workspace-accent-border hover:text-workspace-accent transition-colors"
              title={`Open live platform: ${project.liveLabel}`}
            >
              <span>{project.liveLabel}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>

        {/* Custom Architectural Preview */}
        <div
          className="mt-3.5 cursor-pointer"
          onClick={() => onOpenCaseStudy(project)}
        >
          <ProjectVisual archetype={project.visualArchetype} compact={compact} />
        </div>

        {/* One-Sentence Product Summary */}
        <p className="mt-3.5 text-sm leading-relaxed text-workspace-text">
          {project.oneSentenceSummary}
        </p>

        {/* Verified Engineering Contribution */}
        <div className="mt-3 rounded-lg border border-workspace-border-subtle bg-workspace-elevated/50 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-workspace-subtle">
            My Engineering Contribution
          </p>
          <p className="mt-1 text-xs leading-relaxed text-workspace-muted">
            {project.myContribution}
          </p>
        </div>

        {/* Verified Impact Metrics Pills */}
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {project.impactMetrics.slice(0, compact ? 2 : 4).map((metric) => (
            <div
              key={metric.label}
              className="rounded-md border border-workspace-border-subtle bg-workspace-bg/60 px-2.5 py-1.5"
            >
              <div className="font-mono text-xs font-semibold text-workspace-accent">
                {metric.value}
              </div>
              <div className="truncate text-[11px] text-workspace-muted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tech Tags + Case Study Action */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-workspace-border-subtle pt-3.5">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, compact ? 5 : 7).map((tech) => (
            <span
              key={tech}
              className="rounded border border-workspace-border-subtle bg-workspace-elevated px-2 py-0.5 font-mono text-[11px] text-workspace-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 rounded-md bg-workspace-accent-dim border border-workspace-accent-border px-3 py-1.5 text-xs font-medium text-workspace-accent hover:bg-workspace-accent hover:text-[#14171F] transition-colors"
        >
          <Layers className="h-3.5 w-3.5" />
          <span>Inspect Case Study</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
