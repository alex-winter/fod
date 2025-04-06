let callCount = -1
let states = []

export function useState(initValue) {
  const id = ++callCount

  if (!states[id]) {
    states[id] = [
      {value: initValue}, 
      (newValue) => {
        states[id][0].value = newValue
      },
      () => {
        return states[id][0].value
      }
    ]
  }

  return [
    states[id][1],
    states[id][2]
  ]
}