const dfs = (arr, cond) => {
  const byTimes = (arr) => {
    console.log('inner: ', arr);
    return arr.map(el => {
      if (el.value === cond.time) {
        return { isBlocked: !el.isBlocked, value: el.value }
      }
      return el;
    })
  }
  const byDate = (arr) => {
    console.log('inner: ', arr);
    return arr.map(el => {
      if (el.date === cond.date) {
        return { date: el.date, times: byTimes(el.times) }
      }
      return el;
    })
  }
  return arr.map(el => {
    if (el.id === cond.id) {
      return { id: el.id, dates: byDate(el.dates) }
    }
    return el;
  })
}
export default dfs;
