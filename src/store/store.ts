import { create } from "zustand";
import { IBeer } from "../models/IBeer";
import { devtools, persist } from "zustand/middleware";

interface BearState {
  beers: IBeer[],
  beersToDelete: number[],
  isLoading: boolean,
  fetchBeers: (page: number | string) => Promise<void>,
  fetchMoreBeers: (page: number | string) => Promise<void>,
  toggleBeerToDelete: (id: number) => void,
  deleteBears: () => void
}

const useBeerStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        beers: [],
        beersToDelete: [],
        isLoading: false,
        fetchBeers: async (page) => {
          try {
            set({ isLoading: true })
            const response: IBeer[] = await fetch(`${import.meta.env.VITE_API_URL}${page}`).then(data => data.json())
            set((state) => ({ beers: [ ...response], isLoading: false }))
          } catch (error) {
            alert(error);
          }
        },
        fetchMoreBeers: async (page) => {
          try {
            set({ isLoading: true })
            const response: IBeer[] = await fetch(`${import.meta.env.VITE_API_URL}${page}`).then(data => data.json())
            set((state) => ({ beers: [...state.beers, ...response], isLoading: false }))
          } catch (error) {
            alert(error);
          }
        },
        toggleBeerToDelete: (id) => set(state => {
          if (state.beersToDelete.some(e => e === id)) {
            return { beersToDelete: state.beersToDelete.filter(e => e !== id) }
          }
          return { beersToDelete: [...state.beersToDelete, id] }
        }),
        deleteBears: () => set(state => {
          return { beers: state.beers.filter(e => !state.beersToDelete.includes(e.id)), beersToDelete: [] }
        })
      }),
      {
        name: 'beer-storage',
      }
    )
  )
)

export default useBeerStore