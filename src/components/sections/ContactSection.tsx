"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Copy,
  Check,
  ExternalLink,
  UserCheck,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (value: string, label: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const contactItems = [
    {
      id: "email",
      label: "Email Address",
      value: PROFILE_DATA.contact.email,
      href: `mailto:${PROFILE_DATA.contact.email}`,
      description: "Direct inbox for engineering roles and technical discussions",
      icon: Mail,
      copyable: true,
    },
    {
      id: "phone",
      label: "Phone",
      value: PROFILE_DATA.contact.phone,
      href: PROFILE_DATA.contact.phoneHref,
      description: "Direct telephone & WhatsApp contact",
      icon: Phone,
      copyable: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: PROFILE_DATA.contact.linkedinHandle,
      href: PROFILE_DATA.contact.linkedinUrl,
      description: "Professional network and career history",
      icon: Linkedin,
      external: true,
    },
    {
      id: "github-personal",
      label: "GitHub (Personal)",
      value: PROFILE_DATA.contact.githubPersonalHandle,
      href: PROFILE_DATA.contact.githubPersonalUrl,
      description: "56+ public repositories across React, Angular, and Node.js",
      icon: Github,
      external: true,
    },
    {
      id: "github-work",
      label: "GitHub (Work — Simato)",
      value: PROFILE_DATA.contact.githubWorkHandle,
      href: PROFILE_DATA.contact.githubWorkUrl,
      description: "Work profile for Simato Vas Solutions engineering",
      icon: Github,
      external: true,
    },
    {
      id: "website",
      label: "Portfolio Domain",
      value: PROFILE_DATA.contact.websiteHandle,
      href: PROFILE_DATA.contact.websiteUrl,
      description: "Canonical portfolio address",
      icon: Globe,
      external: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-workspace-border pb-4">
        <p className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
          Direct Channels
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-workspace-text">
          Contact &amp; Verified Profiles
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-workspace-muted">
          Reach out directly via email, phone, or LinkedIn regarding Full-Stack, Backend, or JavaScript/TypeScript Software Engineering opportunities.
        </p>
      </div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-workspace-border bg-workspace-surface p-4 sm:p-5 hover:border-workspace-accent-border transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-workspace-accent-border bg-workspace-accent-dim text-workspace-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-workspace-muted">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="mt-0.5 block truncate text-sm sm:text-base font-semibold text-workspace-text hover:text-workspace-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {item.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.value, item.id)}
                      className="inline-flex items-center gap-1 rounded-md border border-workspace-border bg-workspace-elevated px-2.5 py-1 text-xs text-workspace-muted hover:text-workspace-text transition-colors"
                      aria-label={`Copy ${item.label}`}
                    >
                      {copiedField === item.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-workspace-accent" />
                          <span className="text-workspace-accent">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}

                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 rounded-md border border-workspace-accent-border bg-workspace-accent-dim px-2.5 py-1 text-xs font-medium text-workspace-accent hover:bg-workspace-accent hover:text-[#14171F] transition-colors"
                  >
                    <span>Open</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <p className="mt-3 text-xs text-workspace-muted">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Professional References from Résumé */}
      <section
        aria-labelledby="references-heading"
        className="rounded-xl border border-workspace-border bg-workspace-surface p-5 sm:p-6 space-y-4"
      >
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-workspace-accent">
          <UserCheck className="h-4 w-4" />
          <h2 id="references-heading">Professional References</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROFILE_DATA.references.map((ref) => (
            <div
              key={ref.email}
              className="rounded-lg border border-workspace-border-subtle bg-workspace-elevated/50 p-4 space-y-2"
            >
              <div>
                <h3 className="text-sm font-semibold text-workspace-text">
                  {ref.name}
                </h3>
                <p className="text-xs text-workspace-muted">
                  {ref.role} ·{" "}
                  <span className="text-workspace-text">{ref.company}</span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs text-workspace-muted">
                <a
                  href={`tel:${ref.phone.replace(/\s+/g, "")}`}
                  className="hover:text-workspace-accent transition-colors"
                >
                  {ref.phone}
                </a>
                <span>·</span>
                <a
                  href={`mailto:${ref.email}`}
                  className="hover:text-workspace-accent transition-colors"
                >
                  {ref.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
