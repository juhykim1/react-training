import { create } from 'zustand'

export const useIsActiveStore = create(() => {
  return {
    isActive: true,
    id: ''
  }
})
