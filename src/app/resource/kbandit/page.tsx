"use client";

import { useMemo, useState } from "react";

/** ---- Types ---- */
type DistItem = { value: number; prob: number }; // prob in percent, sums to 100
type BanditDef = {
  id: number;
  name: string;
  img: string; // remote image URL
  dist: DistItem[];
};

/** ---- Helpers ---- */
function sampleFrom(dist: DistItem[]): number {
  // dist probs are in [0..100]; we use a cumulative pick
  const r = Math.random() * 100;
  let acc = 0;
  for (const d of dist) {
    acc += d.prob;
    if (r < acc) return d.value;
  }
  // Fallback for any floating rounding
  return dist[dist.length - 1].value;
}

const FALLBACK_IMG = "https://picsum.photos/seed/slot/640/420";

/** ---- Page ---- */
export default function Page() {
  // Define the three bandits (images can be replaced with any slot-machine photo URLs you like)
  const bandits = useMemo<BanditDef[]>(
    () => [
      {
        id: 1,
        name: "Bandit 1",
        img:
          "/slot-machine.png",
        dist: [
          { value: -20, prob: 10 },
          { value: 4, prob: 40 },
          { value: 5, prob: 50 },
        ],
      },
      {
        id: 2,
        name: "Bandit 2",
        img:
          "/slot-machine.png",
        dist: [
          { value: 10, prob: 20 },
          { value: 1, prob: 80 },
        ],
      },
      {
        id: 3,
        name: "Bandit 3",
        img:
          "/slot-machine.png",
        dist: [
          { value: 25, prob: 4 },
          { value: 2, prob: 48 },
          { value: 3, prob: 48 },
        ],
      },
    ],
    []
  );

  const MAX_PULLS = 100;

  const [pullsLeft, setPullsLeft] = useState<number>(MAX_PULLS);
  const [total, setTotal] = useState<number>(0);
  // Track only last payout per bandit (no history)
  const [lastPayout, setLastPayout] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
  });

  const handleSpin = (b: BanditDef) => {
    if (pullsLeft <= 0) return;
    const payout = sampleFrom(b.dist);

    setLastPayout((prev) => ({ ...prev, [b.id]: payout }));
    setTotal((t) => t + payout);
    setPullsLeft((s) => s - 1);
  };

  const disabled = pullsLeft <= 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">k-Armed Bandit</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bandits.map((b) => {
          const lp = lastPayout[b.id] ?? 0;

          return (
            <div
              key={b.id}
              className="rounded-3xl bg-white shadow-lg p-5 border border-gray-100"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="text-xl font-semibold">{b.name}</h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                  klik gambar
                </span>
              </div>

              <div
                className={[
                  "relative rounded-2xl overflow-hidden ring-1 ring-gray-200",
                  "transition transform",
                  disabled
                    ? "grayscale cursor-not-allowed opacity-60"
                    : "hover:-translate-y-1 hover:shadow-xl cursor-pointer",
                ].join(" ")}
                onClick={() => (disabled ? null : handleSpin(b))}
                aria-disabled={disabled}
                role="button"
              >
                <img
                  src={b.img}
                  alt={`${b.name} slot machine`}
                  className="w-full h-72 object-cover"
                  onError={(e) => {
                    // graceful fallback if remote image fails
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                  }}
                />

                {/* subtle overlay */}
                {!disabled && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600">Payout terakhir:</p>
                <p
                  className={[
                    "text-2xl font-bold tabular-nums",
                    lp < 0 ? "text-red-600" : "text-emerald-600",
                  ].join(" ")}
                >
                  {lp}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 space-y-3">
        <div className="text-lg font-semibold">
          Total:{" "}
          <span
            className={[
              "tabular-nums",
              total < 0 ? "text-red-600" : "text-emerald-700",
            ].join(" ")}
          >
            {total}
          </span>
        </div>

        <div className="text-lg font-semibold">
          Sisa tarikan:{" "}
          <span className="tabular-nums">{pullsLeft}</span>
        </div>

        {disabled && (
          <div className="mt-2 text-sm text-gray-600">
            Sisa tarikan sudah habis. Reload halaman untuk main lagi.
          </div>
        )}
      </div>
    </div>
  );
}
