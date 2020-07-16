const defState = {}
export default (state = defState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state
    case 'TOGGLE_LANG':
      return state
    default:
      return state
  }
}
