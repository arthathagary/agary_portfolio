"use client";

import React, { useEffect, useState } from "react";
import {
  Download,
  FileText,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Eye,
  LayoutList,
} from "lucide-react";
import {
  EXPERIENCE_DATA,
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
} from "@/data/portfolio";

export function ResumeSection() {
  const [viewMode, setViewMode] = useState<"structured" | "pdf">("structured");
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    fetch(PROFILE_DATA.resumeFilePath, { method: "HEAD" })
      .then((res) => {
        if (!active) return;
        const contentType = res.headers.get("content-type") || "";
        setPdfAvailable(res.ok && contentType.includes("pdf"));
      })
      .catch(() => {
        if (active) setPdfAvailable(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Header & Download Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-workspace-border pb-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
            Curriculum Vitae
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-workspace-text">
            Résumé — {PROFILE_DATA.fullName}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-workspace-muted">
            View my complete structured résumé below or download the original PDF file (`{PROFILE_DATA.resumeDownloadFilename}`).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex rounded-lg border border-workspace-border bg-workspace-surface p-1">
            <button
              type="button"
              onClick={() => setViewMode("structured")}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                viewMode === "structured"
                  ? "bg-workspace-accent-dim text-workspace-accent"
                  : "text-workspace-muted hover:text-workspace-text"
              }`}
            >
              <LayoutList className="h-3.5 w-3.5" />
              <span>Interactive View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("pdf")}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                viewMode === "pdf"
                  ? "bg-workspace-accent-dim text-workspace-accent"
                  : "text-workspace-muted hover:text-workspace-text"
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>PDF Preview</span>
            </button>
          </div>

          <a
            href={PROFILE_DATA.resumeFilePath}
            download={PROFILE_DATA.resumeDownloadFilename}
            className="inline-flex items-center gap-2 rounded-lg bg-workspace-accent px-4 py-2 text-xs sm:text-sm font-semibold text-[#14171F] hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Graceful Status Notice if public/resume.pdf has not been placed yet */}
      {pdfAvailable === false && (
        <div className="flex items-start gap-3 rounded-xl border border-workspace-border bg-workspace-elevated/60 p-4 text-xs text-workspace-muted">
          <AlertCircle className="h-4 w-4 text-workspace-accent shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium text-workspace-text">
              Original PDF Asset Location: <code className="font-mono text-workspace-accent">public/resume.pdf</code>
            </p>
            <p className="leading-relaxed">
              To serve your exact uploaded PDF without altering or inventing a file, copy your <code className="font-mono text-workspace-text">agary_software_engineer_resume.pdf</code> file to <code className="font-mono text-workspace-text">public/resume.pdf</code>. The interactive résumé sheet below already contains 100% of your verified résumé content.
            </p>
          </div>
        </div>
      )}

      {viewMode === "pdf" ? (
        <div className="rounded-xl border border-workspace-border bg-workspace-surface overflow-hidden">
          {pdfAvailable ? (
            <div className="flex flex-col">
              <div className="flex items-center justify-between border-b border-workspace-border bg-workspace-elevated px-4 py-2.5 text-xs">
                <span className="font-mono text-workspace-muted">
                  {PROFILE_DATA.resumeDownloadFilename}
                </span>
                <a
                  href={PROFILE_DATA.resumeFilePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-workspace-accent hover:underline"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <iframe
                src={PROFILE_DATA.resumeFilePath}
                title="Arthath Agary Résumé PDF Preview"
                className="h-[75vh] w-full border-0"
              />
            </div>
          ) : (
            <div className="p-8 text-center space-y-3">
              <FileText className="h-8 w-8 text-workspace-accent mx-auto" />
              <h2 className="text-base font-semibold text-workspace-text">
                Place <code className="font-mono text-workspace-accent">public/resume.pdf</code> to Enable Inline PDF Embed
              </h2>
              <p className="max-w-lg mx-auto text-xs text-workspace-muted leading-relaxed">
                Copy your original <code className="font-mono text-workspace-text">agary_software_engineer_resume.pdf</code> into <code className="font-mono text-workspace-text">public/resume.pdf</code>. In the meantime, switch to the Interactive View tab to inspect the complete résumé.
              </p>
              <button
                type="button"
                onClick={() => setViewMode("structured")}
                className="inline-flex items-center gap-1.5 rounded-md border border-workspace-accent-border bg-workspace-accent-dim px-3.5 py-1.5 text-xs font-medium text-workspace-accent"
              >
                <span>Switch to Interactive Résumé Sheet</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Complete Verified Digital Résumé Sheet */
        <div className="rounded-xl border border-workspace-border bg-workspace-surface p-6 sm:p-8 space-y-7">
          {/* Top Identity Header */}
          <div className="border-b border-workspace-border pb-5 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-workspace-text">
                {PROFILE_DATA.fullName}
              </h2>
              <p className="mt-0.5 text-sm font-medium text-workspace-accent">
                {PROFILE_DATA.title}
              </p>
            </div>
            <div className="space-y-1 text-xs font-mono text-workspace-muted sm:text-right">
              <div>
                <a
                  href={PROFILE_DATA.contact.phoneHref}
                  className="hover:text-workspace-accent"
                >
                  {PROFILE_DATA.contact.phone}
                </a>{" "}
                ·{" "}
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="hover:text-workspace-accent"
                >
                  {PROFILE_DATA.contact.email}
                </a>
              </div>
              <div>
                <a
                  href={PROFILE_DATA.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-workspace-accent"
                >
                  {PROFILE_DATA.contact.linkedinHandle}
                </a>{" "}
                ·{" "}
                <a
                  href={PROFILE_DATA.contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-workspace-accent"
                >
                  {PROFILE_DATA.contact.websiteHandle}
                </a>
              </div>
              <div>
                <a
                  href={PROFILE_DATA.contact.githubPersonalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-workspace-accent"
                >
                  {PROFILE_DATA.contact.githubPersonalHandle} (Personal)
                </a>{" "}
                ·{" "}
                <a
                  href={PROFILE_DATA.contact.githubWorkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-workspace-accent"
                >
                  {PROFILE_DATA.contact.githubWorkHandle} (Work)
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <section className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
              Summary
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-workspace-text/90">
              {PROFILE_DATA.shortIntro}
            </p>
          </section>

          {/* Education */}
          <section className="space-y-2 border-t border-workspace-border-subtle pt-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
              Education
            </h3>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-sm font-semibold text-workspace-text">
                  {PROFILE_DATA.education.institution}
                </span>{" "}
                —{" "}
                <span className="text-sm text-workspace-muted">
                  {PROFILE_DATA.education.degree}
                </span>
              </div>
              <span className="font-mono text-xs text-workspace-muted">
                {PROFILE_DATA.education.period}
              </span>
            </div>
            <p className="text-xs text-workspace-muted">
              {PROFILE_DATA.education.summary}
            </p>
            <p className="text-xs text-workspace-muted">
              <strong className="text-workspace-text">Coursework:</strong>{" "}
              {PROFILE_DATA.education.coursework.join(", ")}.
            </p>
            <p className="text-xs text-workspace-muted">
              {PROFILE_DATA.education.capstone}
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-4 border-t border-workspace-border-subtle pt-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
              Professional Experience
            </h3>
            <div className="space-y-5">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <span className="text-sm font-semibold text-workspace-text">
                        {exp.company}
                      </span>{" "}
                      —{" "}
                      <span className="text-xs sm:text-sm font-medium text-workspace-accent">
                        {exp.progression
                          ? exp.progression
                              .map((p) => `${p.title} (${p.period})`)
                              .join(" | ")
                          : exp.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-workspace-muted">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-xs text-workspace-muted">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-4 border-t border-workspace-border-subtle pt-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
              Professional &amp; Open-Source Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-lg border border-workspace-border-subtle bg-workspace-elevated/40 p-3.5 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-workspace-text">
                      {proj.name} — {proj.tagline}
                    </span>
                    {proj.liveLabel && (
                      <span className="font-mono text-[11px] text-workspace-accent">
                        {proj.liveLabel}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[11px] text-workspace-subtle">
                    {proj.technologies.join(", ")}
                  </p>
                  <p className="text-xs text-workspace-muted leading-relaxed">
                    {proj.myContribution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Summary */}
          <section className="space-y-2.5 border-t border-workspace-border-subtle pt-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs">
              {SKILLS_DATA.map((group) => (
                <div key={group.id}>
                  <strong className="text-workspace-text">
                    {group.title}:
                  </strong>{" "}
                  <span className="text-workspace-muted">
                    {group.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements & References */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-workspace-border-subtle pt-5">
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
                Achievements
              </h3>
              <ul className="space-y-1.5 text-xs text-workspace-muted">
                {PROFILE_DATA.achievements.map((a) => (
                  <li key={a.title} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-workspace-accent shrink-0 mt-0.5" />
                    <span>{a.description}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
                Professional References
              </h3>
              <div className="space-y-2.5 text-xs">
                {PROFILE_DATA.references.map((ref) => (
                  <div
                    key={ref.email}
                    className="rounded-lg border border-workspace-border-subtle bg-workspace-elevated/40 p-2.5"
                  >
                    <div className="font-semibold text-workspace-text">
                      {ref.name} —{" "}
                      <span className="font-normal text-workspace-muted">
                        {ref.role}, {ref.company}
                      </span>
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] text-workspace-muted">
                      {ref.phone} · {ref.email}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
