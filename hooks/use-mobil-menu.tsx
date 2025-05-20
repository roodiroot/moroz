import { create } from "zustand";

interface SubmitOrderState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
}

const useMobilMenu = create<SubmitOrderState>((set) => ({
  isOpen: false,
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useMobilMenu;
