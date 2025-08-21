// lib/navigation-state.ts
"use client";

interface NavigationState {
  selectedResearchers: number[];
}

let navigationState: NavigationState | null = null;

export const setNavigationState = (state: NavigationState) => {
  navigationState = state;
};

export const getNavigationState = (): NavigationState | null => {
  const state = navigationState;
  navigationState = null; // Clear after reading
  return state;
};
