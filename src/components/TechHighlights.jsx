import React from 'react';

export default function TechHighlights() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-14 text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Under the Hood</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            <li>
              <span className="font-medium text-white">Projectile System:</span> parametric motion using sin/cos and polar vectors to form spirals, bursts, and rings.
            </li>
            <li>
              <span className="font-medium text-white">Component Management:</span> pooling of bullet components to avoid allocation spikes and keep frame time stable.
            </li>
            <li>
              <span className="font-medium text-white">CollisionDetection:</span> broad-phase grid partitioning with tiny player hitbox for fair evasive play.
            </li>
            <li>
              <span className="font-medium text-white">HUD Integration:</span> score and health rendered via widget overlay, synced to game state.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Pattern Formula Example</h3>
          <div className="mt-3 rounded-xl bg-black/60 p-4 font-mono text-xs text-emerald-300">
            r = base + t * growth\n
            x = cx + r * cos(omega * t + phase)\n
            y = cy + r * sin(omega * t + phase)\n
            angle = atan2(y - cy, x - cx)
          </div>
          <p className="mt-4 text-sm text-white/70">
            Varying omega, growth, and phase across bullet groups yields evolving flowers and vortexes while remaining inexpensive to compute.
          </p>
        </div>
      </div>
    </section>
  );
}
