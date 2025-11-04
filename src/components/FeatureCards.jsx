import React from 'react';
import { Cpu, Zap, Radar, Layers } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Vector Math Patterns',
    desc: 'Spirals, flowers, and lissajous paths driven by lightweight trig for graceful bullet choreography.',
  },
  {
    icon: Layers,
    title: 'Object Pooling',
    desc: 'Recycle hundreds of bullet components seamlessly to keep garbage collection and jank at bay.',
  },
  {
    icon: Radar,
    title: 'Collision Precision',
    desc: 'Tiny player hitbox + broadphase/narrowphase checks to weave through dense curtains.',
  },
  {
    icon: Zap,
    title: 'High Throughput',
    desc: 'Optimized updates with batched transforms and minimal overdraw for a consistently high framerate.',
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-6 pb-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition hover:border-white/20"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                <f.icon className="h-5 w-5 text-white/80" />
              </span>
              <h3 className="text-base font-semibold">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
