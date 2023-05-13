export const featNetwork = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, Math.random() * 600)
  })
}
