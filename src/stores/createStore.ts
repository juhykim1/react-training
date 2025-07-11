import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  devtools,
  persist
} from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export function useCreateStore(state: {}, actions: () => {}) {
  create(
    persist(subscribeWithSelector(devtools(immer(combine(state, actions)))), {
      name: 'store'
    })
  )
}
