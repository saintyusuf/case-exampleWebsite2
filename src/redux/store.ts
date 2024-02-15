import { configureStore } from "@reduxjs/toolkit"
import modal from "./slices/modal.slice"

export const store = configureStore({
  reducer: {
    modal
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch