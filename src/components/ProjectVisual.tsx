import React from "react";
import {
  Smartphone,
  Sparkles,
  Bot,
  LayoutTemplate,
  Terminal,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Database,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data/portfolio";

interface ProjectVisualProps {
  archetype: ProjectCaseStudy["visualArchetype"];
  compact?: boolean;
}

export function ProjectVisual({ archetype, compact = false }: ProjectVisualProps) {
  const heightClass = compact ? "h-40" : "h-52";

  if (archetype === "appmaker-builder") {
    return (
      <div
        className={`relative ${heightClass} w-full overflow-hidden rounded-lg border border-workspace-border bg-workspace-bg p-3.5 flex flex-col justify-between select-none`}
        aria-label="Appmaker No-Code App Builder Architecture Preview"
      >
        <div className="flex items-center justify-between border-b border-workspace-border-subtle pb-2">
          <div className="flex items-center gap-2">
            <Smartphone className="h-3.5 w-3.5 text-workspace-accent" />
            <span className="font-mono text-[11px] font-medium text-workspace-text">
              appmaker.lk · visual-builder
            </span>
          </div>
          <span className="rounded bg-workspace-accent-dim px-1.5 py-0.5 font-mono text-[10px] text-workspace-accent">
            Datadog RUM Active
          </span>
        </div>

        <div className="my-auto grid grid-cols-3 gap-2 py-2">
          <div className="rounded border border-workspace-border-subtle bg-workspace-surface p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">1. Template</p>
            <p className="mt-0.5 text-xs font-semibold text-workspace-text">
              Angular Kit
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-accent">
              +35% Speed
            </p>
          </div>
          <div className="rounded border border-workspace-accent-border bg-workspace-accent-dim/40 p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">2. Checkout</p>
            <p className="mt-0.5 text-xs font-semibold text-workspace-text">
              Ideabiz Direct
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-accent">
              -30% Friction
            </p>
          </div>
          <div className="rounded border border-workspace-border-subtle bg-workspace-surface p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">3. Funnel</p>
            <p className="mt-0.5 text-xs font-semibold text-workspace-text">
              GA4 + RUM
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-accent">
              +18% Conv.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-workspace-border-subtle pt-2 font-mono text-[10px] text-workspace-muted">
          <span>Angular · Sails.js · MongoDB · Cordova</span>
          <span className="flex items-center gap-1 text-workspace-accent">
            <Activity className="h-3 w-3" /> -50% Debug Time
          </span>
        </div>
      </div>
    );
  }

  if (archetype === "otenro-ai") {
    return (
      <div
        className={`relative ${heightClass} w-full overflow-hidden rounded-lg border border-workspace-border bg-workspace-bg p-3.5 flex flex-col justify-between select-none`}
        aria-label="Otenro Pro AI Website Builder Pipeline Preview"
      >
        <div className="flex items-center justify-between border-b border-workspace-border-subtle pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-workspace-accent" />
            <span className="font-mono text-[11px] font-medium text-workspace-text">
              pro.otenro.com · gemini-to-grapesjs
            </span>
          </div>
          <span className="rounded bg-workspace-accent-dim px-1.5 py-0.5 font-mono text-[10px] text-workspace-accent">
            95%+ Gen Success
          </span>
        </div>

        <div className="my-auto flex items-center justify-between gap-2 py-2">
          <div className="flex-1 rounded border border-workspace-border-subtle bg-workspace-surface p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">Input</p>
            <p className="mt-0.5 text-xs font-medium text-workspace-text">
              Gemini API Schema
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-muted">
              SPA & Multi-Page
            </p>
          </div>

          <div className="font-mono text-xs text-workspace-accent">→</div>

          <div className="flex-1 rounded border border-workspace-accent-border bg-workspace-accent-dim/40 p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">Pipeline</p>
            <p className="mt-0.5 text-xs font-medium text-workspace-text">
              Redis + Parser
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-accent">
              -60% Setup Time
            </p>
          </div>

          <div className="font-mono text-xs text-workspace-accent">→</div>

          <div className="flex-1 rounded border border-workspace-border-subtle bg-workspace-surface p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">Canvas</p>
            <p className="mt-0.5 text-xs font-medium text-workspace-text">
              GrapesJS DOM
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-accent">
              -45% Design Time
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-workspace-border-subtle pt-2 font-mono text-[10px] text-workspace-muted">
          <span>Gemini · GrapesJS · Redis · Sails.js</span>
          <span className="flex items-center gap-1 text-workspace-accent">
            <ShieldCheck className="h-3 w-3" /> Unified SSO (-25% Login)
          </span>
        </div>
      </div>
    );
  }

  if (archetype === "telegram-automation") {
    return (
      <div
        className={`relative ${heightClass} w-full overflow-hidden rounded-lg border border-workspace-border bg-workspace-bg p-3.5 flex flex-col justify-between select-none`}
        aria-label="Telegram Sub Manager Automation Architecture Preview"
      >
        <div className="flex items-center justify-between border-b border-workspace-border-subtle pb-2">
          <div className="flex items-center gap-2">
            <Bot className="h-3.5 w-3.5 text-workspace-accent" />
            <span className="font-mono text-[11px] font-medium text-workspace-text">
              telegram-sub-manager · bot-webhook-engine
            </span>
          </div>
          <span className="rounded bg-workspace-accent-dim px-1.5 py-0.5 font-mono text-[10px] text-workspace-accent">
            -80% Manual Labor
          </span>
        </div>

        <div className="my-auto grid grid-cols-3 gap-2 py-2">
          <div className="rounded border border-workspace-border-subtle bg-workspace-surface p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">Webhook</p>
            <p className="mt-0.5 text-xs font-medium text-workspace-text">
              Payment Verified
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-muted">
              Sails.js API
            </p>
          </div>
          <div className="rounded border border-workspace-accent-border bg-workspace-accent-dim/40 p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">Bot Engine</p>
            <p className="mt-0.5 text-xs font-medium text-workspace-text">
              Grant / Renew
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-accent">
              Auto Invite
            </p>
          </div>
          <div className="rounded border border-workspace-border-subtle bg-workspace-surface p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">Enforcement</p>
            <p className="mt-0.5 text-xs font-medium text-workspace-text">
              Kick / Unban
            </p>
            <p className="mt-1 font-mono text-[10px] text-workspace-accent">
              Zero Manual Ops
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-workspace-border-subtle pt-2 font-mono text-[10px] text-workspace-muted">
          <span>Telegram Bot API · Sails.js · Angular · MongoDB</span>
          <span className="flex items-center gap-1 text-workspace-accent">
            <CheckCircle2 className="h-3 w-3" /> Recurring Revenue
          </span>
        </div>
      </div>
    );
  }

  if (archetype === "spark-generator") {
    return (
      <div
        className={`relative ${heightClass} w-full overflow-hidden rounded-lg border border-workspace-border bg-workspace-bg p-3.5 flex flex-col justify-between select-none`}
        aria-label="Appmaker Spark AI Landing Page Generator Preview"
      >
        <div className="flex items-center justify-between border-b border-workspace-border-subtle pb-2">
          <div className="flex items-center gap-2">
            <LayoutTemplate className="h-3.5 w-3.5 text-workspace-accent" />
            <span className="font-mono text-[11px] font-medium text-workspace-text">
              ai.appmaker.lk · spark-live-preview
            </span>
          </div>
          <span className="rounded bg-workspace-accent-dim px-1.5 py-0.5 font-mono text-[10px] text-workspace-accent">
            Gemini + OpenAI
          </span>
        </div>

        <div className="my-auto grid grid-cols-12 gap-2 py-2">
          <div className="col-span-5 rounded border border-workspace-border-subtle bg-workspace-surface p-2">
            <p className="font-mono text-[10px] text-workspace-subtle">
              Section Stream
            </p>
            <div className="mt-1.5 space-y-1 font-mono text-[10px]">
              <div className="rounded bg-workspace-elevated px-1.5 py-0.5 text-workspace-accent">
                ✓ HeroSection
              </div>
              <div className="rounded bg-workspace-elevated px-1.5 py-0.5 text-workspace-text">
                ✓ FeatureGrid
              </div>
              <div className="rounded bg-workspace-elevated px-1.5 py-0.5 text-workspace-muted">
                ↻ PricingBlock
              </div>
            </div>
          </div>
          <div className="col-span-7 rounded border border-workspace-accent-border bg-workspace-accent-dim/30 p-2 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-workspace-accent">
                Angular Dynamic Canvas
              </span>
              <span className="font-mono text-[10px] text-workspace-muted">
                Live Binding
              </span>
            </div>
            <div className="my-1.5 space-y-1">
              <div className="h-2.5 w-3/4 rounded bg-workspace-accent/40" />
              <div className="h-2 w-1/2 rounded bg-workspace-border" />
            </div>
            <p className="font-mono text-[10px] text-workspace-muted">
              Editable sections hydrated in real time
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-workspace-border-subtle pt-2 font-mono text-[10px] text-workspace-muted">
          <span>Angular · TypeScript · OpenAI · Gemini</span>
          <span className="flex items-center gap-1 text-workspace-accent">
            <Database className="h-3 w-3" /> Dynamic Loader
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${heightClass} w-full overflow-hidden rounded-lg border border-workspace-border bg-workspace-bg p-3.5 flex flex-col justify-between select-none`}
      aria-label="Cordova Hot Code Push CLI Modernization Preview"
    >
      <div className="flex items-center justify-between border-b border-workspace-border-subtle pb-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-workspace-accent" />
          <span className="font-mono text-[11px] font-medium text-workspace-text">
            cordova-hot-code-push-cli · npm
          </span>
        </div>
        <span className="rounded bg-workspace-accent-dim px-1.5 py-0.5 font-mono text-[10px] text-workspace-accent">
          Node.js 20+ Ready
        </span>
      </div>

      <div className="my-auto rounded border border-workspace-border-subtle bg-workspace-surface p-2.5 font-mono text-[11px] space-y-1">
        <p className="text-workspace-muted">
          <span className="text-workspace-accent">$</span> node -v{" "}
          <span className="text-workspace-subtle"># v20.x LTS</span>
        </p>
        <p className="text-workspace-text">
          <span className="text-workspace-accent">$</span> cordova-hcp build
        </p>
        <p className="text-workspace-accent text-[10px]">
          ✓ Patched legacy fs/crypto APIs &amp; dependencies
        </p>
        <p className="text-workspace-muted text-[10px]">
          ✓ Generated chcp.json &amp; chcp.manifest
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-workspace-border-subtle pt-2 font-mono text-[10px] text-workspace-muted">
        <span>Node.js · Apache Cordova · npm Registry</span>
        <span className="text-workspace-accent">Open Source</span>
      </div>
    </div>
  );
}
