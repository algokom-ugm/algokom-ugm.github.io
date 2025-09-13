"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ----------------------------- Types & helpers ---------------------------- */

type EpisodeRow =
  | { kind: "episode"; text: string }
  | { kind: "header" }
  | { kind: "step"; reward: string; state: string; action: string }
  | { kind: "summary"; text: string };

const TOTAL_EPISODES = 5;

function rand() {
  return Math.random();
}

/* ------------------------------- React Page ------------------------------- */

export default function Page() {
  // --- Global/episode states
  const [currentEpisode, setCurrentEpisode] = useState(0); // 0..TOTAL_EPISODES
  const [state, setState] = useState<"S1" | "S2" | "T">("S1");

  const [globalTotalReward, setGlobalTotalReward] = useState(0);
  const [globalEpisodeCount, setGlobalEpisodeCount] = useState(0);

  const [episodeTotalReward, setEpisodeTotalReward] = useState(0);
  const [episodeLength, setEpisodeLength] = useState(0);

  const [actionInfo, setActionInfo] = useState<{
    from?: string;
    action?: "a1" | "a2";
    to?: string;
    reward?: number;
  } | null>(null);

  // Table/history log
  const [rows, setRows] = useState<EpisodeRow[]>([]);
  const historyRef = useRef<HTMLDivElement>(null);

  // Scroll history to bottom when rows change
  useEffect(() => {
    const el = historyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [rows]);

  // Computed global info (include running episode in the average like original)
  const globalInfo = useMemo(() => {
    const total = globalTotalReward + episodeTotalReward;
    const count = globalEpisodeCount + (currentEpisode > 0 ? 1 : 0);
    const avg = count > 0 ? total / count : 0;
    return {
      avgPerEpisode: avg.toFixed(2),
      totalText: total.toFixed(2),
    };
  }, [
    globalTotalReward,
    globalEpisodeCount,
    episodeTotalReward,
    currentEpisode,
  ]);

  const [pendingIdx, setPendingIdx] = useState<number | null>(null);

  const actionsEnabled = state !== "T" && currentEpisode > 0 && pendingIdx !== null;

  const canStart = currentEpisode < TOTAL_EPISODES && !actionsEnabled;


  // --------------------------- Episode life cycle ---------------------------

  const initEpisode = () => {
    if (currentEpisode >= TOTAL_EPISODES) return;

    const nextEp = currentEpisode + 1;
    setCurrentEpisode(nextEp);
    setEpisodeTotalReward(0);
    setEpisodeLength(0);
    setState("S1");
    setActionInfo(null);

    setRows(prev => {
    const out = [...prev];

    const epRow: EpisodeRow = { kind: "episode", text: `EPISODE ${nextEp}` };
    const headerRow: EpisodeRow = { kind: "header" };
    const firstStepRow: EpisodeRow = { kind: "step", reward: "---", state: "S1", action: "" };

    out.push(epRow);
    out.push(headerRow);
    out.push(firstStepRow);

    setPendingIdx(out.length - 1); // the "step" row whose action we’ll fill next
    return out;
    });
  };

  // ------------------------------ Transitions ------------------------------

  function step(action: "a1" | "a2") {
    if (!actionsEnabled) return;
    let nextState: "S1" | "S2" | "T" = state;
    let reward = 0;

    const r = rand();

    if (state === "S1") {
      if (action === "a1") {
        if (r < 0.8) {
          nextState = "S1";
          reward = 1;
        } else if (r < 0.95) {
          nextState = "S2";
          reward = 0;
        } else {
          nextState = "T";
          reward = 1;
        }
      } else {
        if (r < 0.2) {
          nextState = "S1";
          reward = -1;
        } else if (r < 0.85) {
          nextState = "S2";
          reward = -1;
        } else {
          nextState = "T";
          reward = 1;
        }
      }
    } else {
      // state === "S2"
      if (action === "a1") {
        nextState = r < 0.75 ? "S1" : "S2";
        reward = 4;
      } else {
        nextState = r < 0.8 ? "S1" : "S2";
        reward = 2;
      }
    }

    // Update episode stats
    setEpisodeTotalReward((x) => x + reward);
    setEpisodeLength((x) => x + 1);
    setState(nextState);
    setActionInfo({ from: state, action, to: nextState, reward });

    // Fill last row's action, then append a new step row
    setRows(prev => {
      const out = [...prev];
    
      // Fill the action for the row we opened at episode start or previous step
      if (pendingIdx !== null && out[pendingIdx]?.kind === "step") {
        (out[pendingIdx] as any).action = action;
      }
    
      // Append the new state row for this transition
      out.push({
        kind: "step",
        reward: String(reward),
        state: nextState,
        action: "",
      });
    
      // Next pending row is the one we just pushed—unless we hit terminal
      const nextPending = nextState === "T" ? null : out.length - 1;
      setPendingIdx(nextPending);
    
      return out;
  });


    // If terminal, wrap up episode
    if (nextState === "T") {
      setGlobalTotalReward((g) => g + (episodeTotalReward + reward));
      setGlobalEpisodeCount((c) => c + 1);
      setActionInfo(null);
      setRows((prev) => [
        ...prev,
        {
          kind: "summary",
          text: `Episode ${currentEpisode} ended. Total Reward: ${
            episodeTotalReward + reward
          }, Length: ${episodeLength + 1}`,
        },
      ]);
    }
  }

  /* --------------------------------- UI ---------------------------------- */

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 grid gap-8 md:grid-cols-2">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="text-2xl font-semibold mb-4">
          Current State: <span className="font-bold">{state}</span>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={initEpisode}
            disabled={!canStart}
            className={`px-4 py-2 rounded-md text-white transition
              ${canStart ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}
            `}
          >
            Start Episode
          </button>

          <button
            onClick={() => step("a1")}
            disabled={!actionsEnabled}
            className={`px-4 py-2 rounded-md text-white transition
              ${actionsEnabled ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}
            `}
          >
            Action a1
          </button>

          <button
            onClick={() => step("a2")}
            disabled={!actionsEnabled}
            className={`px-4 py-2 rounded-md text-white transition
              ${actionsEnabled ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}
            `}
          >
            Action a2
          </button>
        </div>

        <div className="global-info text-gray-800 text-base space-y-1 mb-2">
          <div>
            Average Reward per Episode:{" "}
            <span className="font-semibold">{globalInfo.avgPerEpisode}</span>
          </div>
          <div>
            Total Reward:{" "}
            <span className="font-semibold">{globalInfo.totalText}</span>
          </div>
        </div>

        <div className="episode-info text-gray-800 text-base space-y-1 mb-4">
          <div>
            Episode {currentEpisode} of {TOTAL_EPISODES}
          </div>
          <div>Episode Total Reward: {episodeTotalReward}</div>
          <div>Episode Length: {episodeLength}</div>
        </div>

        <div className="action-info rounded-md border border-gray-200 bg-gray-100 p-3 min-h-[70px] text-sm">
          {actionInfo ? (
            <div className="space-y-0.5">
              <div>
                From state: <strong>{actionInfo.from}</strong>
              </div>
              <div>
                Action: <strong>{actionInfo.action}</strong>
              </div>
              <div>
                To state: <strong>{actionInfo.to}</strong>
              </div>
              <div>
                Reward: <strong>{actionInfo.reward}</strong>
              </div>
            </div>
          ) : (
            <span className="text-gray-500">No action taken.</span>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div
          ref={historyRef}
          className="history max-h-[80vh] overflow-y-auto rounded-md border border-gray-200 bg-gray-50 p-4"
        >
          <h3 className="font-semibold mb-3">Episode Log:</h3>
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rows.map((r, idx) => {
                if (r.kind === "episode") {
                  return (
                    <tr key={`e-${idx}`}>
                      <td colSpan={3} className="bg-gray-200 font-semibold text-center py-1">
                        {r.text}
                      </td>
                    </tr>
                  );
                }
                if (r.kind === "header") {
                  return (
                    <tr key={`h-${idx}`}>
                      <td className="border border-gray-300 bg-gray-100 font-semibold text-center">R</td>
                      <td className="border border-gray-300 bg-gray-100 font-semibold text-center">S</td>
                      <td className="border border-gray-300 bg-gray-100 font-semibold text-center">A</td>
                    </tr>
                  );
                }
                if (r.kind === "summary") {
                  return (
                    <tr key={`s-${idx}`}>
                      <td colSpan={3} className="bg-gray-200 font-semibold text-center py-1">
                        {r.text}
                      </td>
                    </tr>
                  );
                }
                // step row
                return (
                  <tr key={`r-${idx}`}>
                    <td className="border border-gray-300 text-center py-1">{r.reward}</td>
                    <td className="border border-gray-300 text-center py-1">{r.state}</td>
                    <td className="border border-gray-300 text-center py-1">{r.action}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
