import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Gauge } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft vignette + gradient glow; does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.2),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Real-time Bullet Hell Engine Concept
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Precision Chaos at 120 FPS
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 md:text-lg">
          A top‑down shooter experience where hundreds of projectiles dance in choreographed patterns. Tiny hitbox, big thrills.
        </p>

        <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          <HeroStat icon={Gauge} label="Optimized" value="Object Pooling" />
          <HeroStat icon={Shield} label="Responsive" value="Tiny Hitbox" />
          <HeroStat icon={Rocket} label="Cinematic" value="Spline HUD" />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
          <Icon className="h-5 w-5 text-white/80" />
        </span>
        <div className="text-left">
          <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>
          <p className="text-sm font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
}
