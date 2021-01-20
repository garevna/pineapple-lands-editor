export const CHANGE_VIEWPORT = (state) => {
  state.viewportWidth = window.innerWidth
  state.viewportHeight = window.innerHeight
}
export const CHANGE_VIEWPORT_WIDTH = (state, width) => { state.viewportWidth = width }
export const CHANGE_VIEWPORT_HEIGHT = (state, height) => { state.viewportHeight = height }
