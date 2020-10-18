/* LIST - CONTENT MODULE MUTATIONS */

export default {
  UPDATE_LIST: (state, payload) => { state.list[payload.prop] = payload.value },
  UPDATE_LIST_ITEM: (state, payload) => { state.list.items[payload.num][payload.prop] = payload.value },
  ADD_LIST_ITEM: (state) => {
    state.list.items.push({
      title: 'item',
      icon: 'https://api.pineapple.net.au/icons/icon-1.svg',
      // icon: 'https://pineapple-net-land.glitch.me/icons/icon-1.svg',
      text: 'text...'
    })
  },
  REMOVE_LIST_ITEM: (state, num) => {
    state.list.items.splice(num, 1)
  }
}
