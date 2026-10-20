"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import { PROJECTS_DATA, ProjectCaseStudy } from "@/data/portfolio";
import { ProjectCard } from "../ProjectCard";

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<"all" | "saas" | "oss">("all");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "all") return true;
    if (filter === "oss") return project.id === "cordova-hcp-cli";
    return project.id !== "cordova-hcp-cli";
  });

  return (
    <div className="space-y-4">
      {/* Header & Filter Bar */}
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-workspace-border pb-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-workspace-accent">
            Featured &amp; Commercial Engineering Work
          </p>
          <h2 className="mt-0.5 text-xl font-bold tracking-tight text-workspace-text">
            Production SaaS Platforms &amp; Open Source
          </h2>
          <p className="mt-0.5 text-xs text-workspace-muted">
            Click any project panel to inspect its full case study, architecture, and verified impact—or scroll down to explore Experience, Skills, and Résumé.
          </p>
        </div>

        <div
          className="inline-flex rounded-lg border border-workspace-border bg-workspace-surface p-1"
          role="tablist"
          aria-label="Filter projects by category"
        >
          <button
            type="button"
            role="tab"
            aria-selected={filter === "all"}
            onClick={() => setFilter("all")}
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
              filter === "all"
                ? "bg-workspace-accent-dim text-workspace-accent"
                : "text-workspace-muted hover:text-workspace-text"
            }`}
          >
            All ({PROJECTS_DATA.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === "saas"}
            onClick={() => setFilter("saas")}
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
              filter === "saas"
                ? "bg-workspace-accent-dim text-workspace-accent"
                : "text-workspace-muted hover:text-workspace-text"
            }`}
          >
            Commercial SaaS (4)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === "oss"}
            onClick={() => setFilter("oss")}
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
              filter === "oss"
                ? "bg-workspace-accent-dim text-workspace-accent"
                : "text-workspace-muted hover:text-workspace-text"
            }`}
          >
            Open Source (1)
          </button>
        </div>
      </div>

      {/* Context Banner from Résumé */}
      <div className="flex items-start gap-2.5 rounded-lg border border-workspace-border-subtle bg-workspace-elevated/50 px-3.5 py-2.5 text-xs text-workspace-muted">
        <Info className="h-4 w-4 text-workspace-accent shrink-0 mt-0.5" />
        <p>
          <strong className="font-medium text-workspace-text">
            Production Context:
          </strong>{" "}
          Appmaker, Otenro Pro, Telegram Sub Manager, and Appmaker Spark are commercial in-house SaaS platforms developed as part of the{" "}
          <span className="text-workspace-text">Simato Vas Solutions</span>{" "}
          engineering team and used by external enterprise and business customers as no-code and AI builders.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        ))}
      </div>
    </div>
  );
}
