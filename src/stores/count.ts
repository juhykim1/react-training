import { create } from 'zustand'
import { combine, subscribeWithSelector } from 'zustand/middleware'

export const useCountStore = create(
  subscribeWithSelector(
    combine(
      {
        count: 0,
        double: 0
      },
      set => ({
        increase: () => {
          set(state => {
            return {
              count: state.count + 1
            }
          })
        },
        decrease: () => {
          set(state => {
            return {
              count: state.count - 1
            }
          })
        }
      })
    )
  )
)

useCountStore.subscribe(
  state => state.count, // 선택자 함수
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
