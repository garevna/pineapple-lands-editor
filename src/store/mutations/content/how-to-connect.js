/* HOW TO CONNECT - CONTENT MODULE MUTATIONS */

export const howToConnectMutations = {
  UPDATE_CONNECT: (state, payload) => { state.howToConnect[payload.prop] = payload.value },
  ADD_CONNECT_ITEM: (state) => state.howToConnect.items.push({ title: 'Benefit ...', text: '...' }),
  REMOVE_CONNECT_ITEM: (state, num) => {
    state.howToConnect.items = state.howToConnect.items.filter((item, index) => index !== num)
  },
  UPDATE_CONNECT_ITEM: (state, payload) => { state.howToConnect.items[payload.num][payload.prop] = payload.value },
  UPDATE_BUTTON_TEXT: (state, payload) => { state.howToConnect.button = payload },
  UPDATE_BUTTON_GOTO: (state, payload) => { state.howToConnect.goto = payload }
}
