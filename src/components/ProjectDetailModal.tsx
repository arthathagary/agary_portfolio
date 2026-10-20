"use client";

import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Wrench,
  AlertCircle,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full max-w-3xl flex-col border-l border-workspace-border bg-workspace-surface shadow-window overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between border-b border-workspace-border bg-workspace-elevated/80 px-5 py-3.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="rounded bg-workspace-accent-dim border border-workspace-accent-border px-2 py-0.5 font-mono text-[11px] font-medium text-workspace-accent">
              Case Study
            </span>
            <span className="font-mono text-xs text-workspace-muted truncate">
              {project.organization} · {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-workspace-accent-border bg-workspace-accent-dim px-3 py-1 text-xs font-medium text-workspace-accent hover:bg-workspace-accent hover:text-[#14171F] transition-colors"
              >
                <span>Visit {project.liveLabel}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1 rounded-md border border-workspace-border bg-workspace-surface px-2.5 py-1 text-xs text-workspace-muted hover:text-workspace-text transition-colors"
              aria-label="Close case study"
            >
              <span>Close</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Scrollable Case Study Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 workspace-scroll">
          {/* Title & One-Sentence Overview */}
          <div>
            <h2
              id="case-study-title"
              className="text-2xl font-bold tracking-tight text-workspace-text"
            >
              {project.name} —{" "}
              <span className="font-normal text-workspace-muted">
                {project.tagline}
              </span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-workspace-muted">
              {project.oneSentenceSummary}
            </p>
          </div>

          {/* Architectural Preview */}
          <ProjectVisual archetype={project.visualArchetype} />

          {/* 7. Verified Results & Measurable Impact */}
          <section aria-label="Verified Results and Impact">
            <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-workspace-accent">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Verified Engineering Outcomes</span>
            </h3>
            <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.impactMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-workspace-border bg-workspace-elevated/60 p-3.5"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-lg font-bold text-workspace-accent">
                      {metric.value}
                    </span>
                    <span className="text-xs font-semibold text-workspace-text">
                      {metric.label}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-workspace-muted">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 1 & 2. Project Overview & Problem / User Need */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="rounded-lg border border-workspace-border bg-workspace-elevated/40 p-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-workspace-subtle">
                1. Project Overview
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-workspace-text">
                {project.overview}
              </p>
            </section>

            <section className="rounded-lg border border-workspace-border bg-workspace-elevated/40 p-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-workspace-subtle">
                2. Problem &amp; User Need
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-workspace-text">
                {project.problemNeed}
              </p>
            </section>
          </div>

          {/* 3. Role & Responsibilities */}
          <section className="rounded-lg border border-workspace-border bg-workspace-elevated/40 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-workspace-accent">
                <Briefcase className="h-3.5 w-3.5" />
                <span>3. My Role &amp; Responsibilities</span>
              </h3>
              <span className="rounded border border-workspace-border bg-workspace-surface px-2 py-0.5 font-mono text-[11px] text-workspace-text">
                {project.role}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-workspace-text">
              {project.myContribution}
            </p>
          </section>

          {/* 4. Technical Approach & Implementation */}
          <section>
            <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-workspace-accent">
              <Wrench className="h-3.5 w-3.5" />
              <span>4. Technical Approach &amp; Implementation</span>
            </h3>
            <ul className="mt-2.5 space-y-2">
              {project.technicalApproach.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 rounded-lg border border-workspace-border-subtle bg-workspace-elevated/30 p-3 text-xs sm:text-sm text-workspace-text"
                >
                  <CheckCircle2 className="h-4 w-4 text-workspace-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Technologies Used & Why They Were Relevant */}
          <section>
            <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-workspace-accent">
              <Cpu className="h-3.5 w-3.5" />
              <span>5. Technology Stack &amp; Architectural Rationale</span>
            </h3>
            <div className="mt-2.5 grid grid-cols-1 gap-2.5">
              {project.technologyRationale.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-workspace-border-subtle bg-workspace-elevated/40 p-3"
                >
                  <div className="font-mono text-xs font-semibold text-workspace-accent">
                    {item.name}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-workspace-muted">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Engineering Challenges & Solutions */}
          <section>
            <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-workspace-accent">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>6. Engineering Challenges &amp; Solutions</span>
            </h3>
            <div className="mt-2.5 space-y-3">
              {project.challenges.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-workspace-border bg-workspace-elevated/50 p-4 space-y-2"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-workspace-subtle">
                      Challenge
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-workspace-text">
                      {item.challenge}
                    </p>
                  </div>
                  <div className="border-t border-workspace-border-subtle pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-workspace-accent">
                      Solution &amp; Verified Result
                    </span>
                    <p className="text-xs sm:text-sm text-workspace-muted leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
