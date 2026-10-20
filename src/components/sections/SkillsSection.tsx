"use client";

import React from "react";
import { CheckCircle2, Layers } from "lucide-react";
import { SKILLS_DATA } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-workspace-border pb-4">
        <p className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
          Technical Capabilities
        </p>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-workspace-text">
          Production Stack &amp; Engineering Tooling
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-workspace-muted">
          Every technology listed below is backed by verified commercial SaaS or open-source experience on my résumé—grouped by domain with real usage context instead of arbitrary percentages.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-workspace-border-subtle bg-workspace-elevated/40 px-4 py-2.5 text-xs">
        <span className="font-mono text-[11px] uppercase tracking-wider text-workspace-subtle">
          Evidence Scope:
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-workspace-accent">
          <span className="h-2 w-2 rounded-full bg-workspace-accent" />
          Production Core
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-workspace-text">
          <span className="h-2 w-2 rounded-full bg-workspace-muted" />
          Production Integration
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-workspace-muted">
          <span className="h-2 w-2 rounded-full bg-workspace-border" />
          Engineering Workflow
        </span>
      </div>

      {/* Categorized Skills Grid */}
      <div className="space-y-5">
        {SKILLS_DATA.map((category) => (
          <section
            key={category.id}
            aria-labelledby={`skill-cat-${category.id}`}
            className="rounded-xl border border-workspace-border bg-workspace-surface p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-workspace-border-subtle pb-3">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-workspace-accent shrink-0" />
                <h2
                  id={`skill-cat-${category.id}`}
                  className="text-base sm:text-lg font-semibold text-workspace-text"
                >
                  {category.title}
                </h2>
              </div>
              <p className="text-xs text-workspace-muted">
                {category.description}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-lg border border-workspace-border-subtle bg-workspace-elevated/40 p-3.5 flex flex-col justify-between hover:border-workspace-accent-border transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-sm font-semibold text-workspace-text flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-workspace-accent shrink-0" />
                        {skill.name}
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                          skill.usageLevel === "Production Core"
                            ? "bg-workspace-accent-dim text-workspace-accent border border-workspace-accent-border"
                            : "bg-workspace-surface text-workspace-muted border border-workspace-border-subtle"
                        }`}
                      >
                        {skill.usageLevel}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-workspace-muted">
                      {skill.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
