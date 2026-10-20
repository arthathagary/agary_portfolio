"use client";

import React from "react";
import {
  Briefcase,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
} from "lucide-react";
import { EXPERIENCE_DATA, PROFILE_DATA } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-workspace-border pb-4">
        <p className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
          Career Timeline
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-workspace-text">
          Professional Software Engineering Experience
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-workspace-muted">
          2+ years of hands-on full-stack product engineering across the MEAN and MERN stacks.
        </p>
      </div>

      {/* Chronological Timeline */}
      <div className="relative space-y-5 before:absolute before:left-4 before:top-3 before:bottom-3 before:w-[1px] before:bg-workspace-border sm:before:left-6">
        {EXPERIENCE_DATA.map((role, index) => (
          <article
            key={role.id}
            className="relative pl-10 sm:pl-14"
          >
            {/* Timeline Node Dot */}
            <div
              className={`absolute left-2.5 sm:left-4.5 top-5 h-3.5 w-3.5 rounded-full border-2 ${
                index === 0
                  ? "border-workspace-accent bg-workspace-accent"
                  : "border-workspace-accent bg-workspace-surface"
              }`}
              aria-hidden="true"
            />

            <div className="rounded-xl border border-workspace-border bg-workspace-surface p-5 sm:p-6 space-y-4">
              {/* Role Header */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-workspace-accent">
                      {role.company}
                    </span>
                    <span className="rounded border border-workspace-border-subtle bg-workspace-elevated px-2 py-0.5 font-mono text-[10px] text-workspace-muted">
                      {role.employmentType}
                    </span>
                  </div>
                  <h2 className="mt-1 text-lg sm:text-xl font-bold text-workspace-text">
                    {role.title}
                  </h2>
                </div>

                <span className="rounded-md border border-workspace-border bg-workspace-elevated px-3 py-1 font-mono text-xs text-workspace-text">
                  {role.period}
                </span>
              </div>

              {/* Role Progression Pills (if promoted within company) */}
              {role.progression && (
                <div className="flex flex-wrap items-center gap-2 rounded-lg border border-workspace-border-subtle bg-workspace-elevated/40 px-3 py-2 text-xs font-mono">
                  <Briefcase className="h-3.5 w-3.5 text-workspace-accent shrink-0" />
                  {role.progression.map((step, i) => (
                    <React.Fragment key={step.title}>
                      <span
                        className={
                          i === 0
                            ? "font-semibold text-workspace-accent"
                            : "text-workspace-muted"
                        }
                      >
                        {step.title} ({step.period})
                      </span>
                      {i < role.progression!.length - 1 && (
                        <span className="text-workspace-subtle">←</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              <p className="text-sm leading-relaxed text-workspace-muted">
                {role.summary}
              </p>

              {/* Main Responsibilities */}
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-workspace-subtle">
                  Core Engineering Responsibilities
                </h3>
                <ul className="mt-2 space-y-2">
                  {role.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-workspace-text/90"
                    >
                      <CheckCircle2 className="h-4 w-4 text-workspace-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Contributions & Achievements */}
              <div className="rounded-lg border border-workspace-accent-border/40 bg-workspace-accent-dim/30 p-3.5">
                <h3 className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-workspace-accent">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>Verified Contributions &amp; Impact</span>
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {role.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-workspace-text leading-relaxed"
                    >
                      • {ach}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {role.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-workspace-border-subtle bg-workspace-elevated px-2.5 py-0.5 font-mono text-[11px] text-workspace-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Education Milestone on Timeline */}
        <article className="relative pl-10 sm:pl-14">
          <div
            className="absolute left-2.5 sm:left-4.5 top-5 h-3.5 w-3.5 rounded-full border-2 border-workspace-border bg-workspace-elevated"
            aria-hidden="true"
          />
          <div className="rounded-xl border border-workspace-border bg-workspace-surface p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-workspace-accent">
                  <GraduationCap className="h-4 w-4" />
                  <span>{PROFILE_DATA.education.institution}</span>
                </div>
                <h2 className="mt-1 text-lg font-bold text-workspace-text">
                  {PROFILE_DATA.education.degree}
                </h2>
              </div>
              <span className="rounded-md border border-workspace-border bg-workspace-elevated px-3 py-1 font-mono text-xs text-workspace-muted">
                {PROFILE_DATA.education.period}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-workspace-muted leading-relaxed">
              {PROFILE_DATA.education.summary}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
