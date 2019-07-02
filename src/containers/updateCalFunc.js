//Вспомогательная функция для обхода и внесения изменений в календарь свободного для записи времении
//Используется  при резервировании и отмене бронирования услуги
const updateCalFunc = (arr, cond) => {
  const byTimes = (arr) => {
    return arr.map(el => {
      if (el.value === cond.time) {
        return { isBlocked: !el.isBlocked, value: el.value }
      }
      return el;
    })
  }
  const byDate = (arr) => {
    return arr.map(el => {
      if (el.date === cond.date) {
        return { date: el.date, times: byTimes(el.times) }
      }
      return el;
    })
  }
  return arr.map(el => {
    if (el.id === cond.serviceId) {
      return { id: el.id, dates: byDate(el.dates) }
    }
    return el;
  })
}
export default updateCalFunc;
