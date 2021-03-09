/* LIST - CONTENT MODULE MUTATIONS */

export const listSectionMutations = {
  UPDATE_LIST: (state, payload) => Object.assign(state.list, { [payload.prop]: payload.value }),
  UPDATE_LIST_ITEM: (state, payload) => {
    const item = JSON.parse(JSON.stringify(state.list.items[payload.num]))
    Object.assign(item, { [payload.prop]: payload.value })
    const items = state.list.items.splice(payload.num, 1, item)
    Object.assign(state.list, items)
  },
  UPDATE_LIST_ITEMS: (state, items) => {
    items.forEach((item, index) => {
      state.list.items.splice(index, 1, JSON.parse(JSON.stringify(item)))
    })
  },
  ADD_LIST_ITEM: (state) => {
    state.list.items.push({
      title: 'item',
      icon: 'https://api.pineapple.net.au/icons/icon-1.svg',
      text: 'text...'
    })
  },
  REMOVE_LIST_ITEM: (state, num) => {
    state.list.items.splice(num, 1)
  }
}
