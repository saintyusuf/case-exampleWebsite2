import { createSlice } from "@reduxjs/toolkit"
import Lenis from "@studio-freight/lenis"

interface IModel {
  isOpen: boolean
}

const initialState:IModel = {
  isOpen: false,
}

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    }
  }
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer