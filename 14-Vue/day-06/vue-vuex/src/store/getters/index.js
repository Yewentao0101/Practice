export default {
  total(state) {
    return state.todos.length
  },
  isDoneCount(state) {
    return state.todos.reduce((p, c) => {
      return p + (c.isDone ? 1 : 0)
    },0)
  }
}