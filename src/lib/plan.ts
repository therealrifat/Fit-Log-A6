export const getPlansData = async () => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog",{cache:"no-store"})
  const data = await response.json()
  return data
}
// export const getPlansData = async () => {
//   const response = await fetch("https://api.abcz.workers.dev/api/fitlog",{cache:"no-store"})
//   const data = await response.json()
//   return data
// }
