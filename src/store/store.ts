import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IRoadSection } from "../types";


type AppStore = {
  currentScreen: 'edit' | 'view' | 'create'
  roadSectionToEdit: IRoadSection | null;
  setCurrentScreen: (screen: 'edit' | 'view' | 'create') => void;
  setRoadSectionToEdit: (roadSection: IRoadSection | null) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      currentScreen: 'view',
      roadSectionToEdit: null,
      setCurrentScreen: (screen: 'edit' | 'view' | 'create') => set({ currentScreen: screen }),
      setRoadSectionToEdit: (roadSection: IRoadSection | null) => set({ roadSectionToEdit: roadSection }),
    }),
    {
      name: "app-store", // unique name for the storage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)