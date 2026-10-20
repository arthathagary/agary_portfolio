"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PROFILE_DATA, SectionId } from "@/data/portfolio";

interface AboutSectionProps {
  onSelectSection: (section: SectionId) => void;
}

export function AboutSection({ onSelectSection }: AboutSectionProps) {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-workspace-border pb-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
            About &amp; Background
          </p>
          <h2 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-workspace-text">
            Engineering Philosophy &amp; Academic Foundation
          </h2>
        </div>
        <button
          type="button"
          onClick={() => onSelectSection("experience")}
          className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border bg-workspace-surface px-3 py-1.5 text-xs font-medium text-workspace-text hover:border-workspace-accent-border hover:text-workspace-accent transition-colors"
        >
          <span>View Experience Timeline</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Main About Narrative */}
      <section className="rounded-xl border border-workspace-border bg-workspace-surface p-5 sm:p-6 space-y-3.5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-workspace-accent">
          <Code2 className="h-4 w-4" />
          <span>Full-Stack SaaS Engineer</span>
        </div>
        {PROFILE_DATA.aboutParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm sm:text-[15px] leading-relaxed text-workspace-text/90"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Education Panel */}
      <section
        aria-labelledby="education-heading"
        className="rounded-xl border border-workspace-border bg-workspace-surface p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-workspace-accent">
              <GraduationCap className="h-4 w-4" />
              <span id="education-heading">Education</span>
            </div>
            <h2 className="mt-1.5 text-lg font-semibold text-workspace-text">
              {PROFILE_DATA.education.degree}
            </h2>
            <p className="text-sm text-workspace-muted">
              {PROFILE_DATA.education.institution}
            </p>
          </div>
          <span className="rounded-md border border-workspace-border bg-workspace-elevated px-3 py-1 font-mono text-xs text-workspace-accent">
            {PROFILE_DATA.education.period}
          </span>
        </div>

        <p className="mt-3.5 text-sm leading-relaxed text-workspace-muted">
          {PROFILE_DATA.education.summary}
        </p>

        <div className="mt-4 rounded-lg border border-workspace-border-subtle bg-workspace-elevated/40 p-3.5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-workspace-subtle">
            Final-Year Capstone
          </p>
          <p className="mt-1 text-xs sm:text-sm text-workspace-text">
            {PROFILE_DATA.education.capstone}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-mono text-[11px] uppercase tracking-wider text-workspace-subtle">
            Relevant Coursework
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {PROFILE_DATA.education.coursework.map((course) => (
              <span
                key={course}
                className="inline-flex items-center gap-1.5 rounded-md border border-workspace-border-subtle bg-workspace-elevated px-2.5 py-1 text-xs text-workspace-text"
              >
                <CheckCircle2 className="h-3 w-3 text-workspace-accent" />
                <span>{course}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Engineering Achievements */}
      <section aria-labelledby="achievements-heading" className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-workspace-accent">
          <Award className="h-4 w-4" />
          <h2 id="achievements-heading">Verified Engineering Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROFILE_DATA.achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-workspace-border bg-workspace-surface p-4 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block rounded bg-workspace-accent-dim border border-workspace-accent-border px-2 py-0.5 font-mono text-xs font-semibold text-workspace-accent">
                  {item.metric}
                </span>
                <h3 className="mt-2.5 text-sm font-semibold text-workspace-text">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-workspace-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
