// stores/userStore.js
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,

  login: (name, email) =>
    set({
      user: { name, email },
    }),

  logout: () => set({ user: null }),
}));