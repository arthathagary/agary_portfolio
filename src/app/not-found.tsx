import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-workspace-bg p-6 text-center text-workspace-text">
      <div className="max-w-md rounded-xl border border-workspace-border bg-workspace-surface p-8 shadow-window">
        <p className="font-mono text-xs uppercase tracking-wider text-workspace-accent">
          404 · Route Not Found
        </p>
        <h1 className="mt-2 text-2xl font-bold">Workspace Panel Unavailable</h1>
        <p className="mt-2 text-sm text-workspace-muted">
          The requested path does not exist in Arthath Agary&apos;s portfolio workspace.
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-workspace-accent px-4 py-2 text-xs font-semibold text-[#14171F] hover:opacity-90 transition-opacity"
        >
          Return to Workspace
        </Link>
      </div>
    </div>
  );
}
