export function getSearchParams(search) {
  search = search.replace(/^\?/, '')
  let paramsPair = search.split('&')
  const params = {}
  paramsPair.forEach(item => {
    const param = item.split('=')
    params[param[0]] = param[1]
  })
  return params
}
