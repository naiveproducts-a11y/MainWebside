import { create } from 'zustand';
import type { NavItem } from '../config/navbar';

interface NavbarState {
  mobileOpen: boolean;
  activeMenuStack: NavItem[]; // Stack to handle drill-down (null means root)
  setMobileOpen: (open: boolean) => void;
  toggleMobileOpen: () => void;
  pushMenu: (item: NavItem) => void;
  popMenu: () => void;
  resetMenu: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  mobileOpen: false,
  activeMenuStack: [],
  
  setMobileOpen: (open) => set({ mobileOpen: open }),
  
  toggleMobileOpen: () => set((state) => {
    const nextOpen = !state.mobileOpen;
    // Reset menu stack when closing
    return { 
      mobileOpen: nextOpen,
      activeMenuStack: nextOpen ? state.activeMenuStack : []
    };
  }),

  pushMenu: (item) => set((state) => ({ 
    activeMenuStack: [...state.activeMenuStack, item] 
  })),

  popMenu: () => set((state) => ({ 
    activeMenuStack: state.activeMenuStack.slice(0, -1) 
  })),

  resetMenu: () => set({ activeMenuStack: [] }),
}));
