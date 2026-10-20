"use client";

import React, { useState } from "react";
import { Layers, Info } from "lucide-react";
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
    <div className="space-y-6">
      {/* Header & Filter Bar */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-workspace-border pb-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
            Engineering Case Studies
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-workspace-text">
            Production SaaS Platforms &amp; Open Source
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-workspace-muted">
            Select any project card to open its full engineering case study, architectural rationale, and verified outcomes.
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
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
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
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
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
            className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
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
      <div className="flex items-start gap-2.5 rounded-lg border border-workspace-border-subtle bg-workspace-elevated/50 px-4 py-3 text-xs text-workspace-muted">
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
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
