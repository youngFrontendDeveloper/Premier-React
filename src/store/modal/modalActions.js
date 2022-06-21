export const MODAL="MODAL::MODAL"

export const getModal=(boolean)=>({
  type: MODAL,
  payload: boolean
})