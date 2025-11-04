import React from 'react';
import { Github } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 text-white">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/10 to-emerald-600/20 p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(255,255,255,0.06),transparent_45%)]" />
        <div className="relative">
          <h3 className="text-2xl font-semibold">Build Your Bullet Hell</h3>
          <p className="mt-2 max-w-2xl text-white/80">
            Start prototyping patterns, tune your hitbox, and push performance. This concept page sets the visual tone—your game brings it to life.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white hover:border-white/40"
            >
              <Github className="h-4 w-4" />
              View Source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
