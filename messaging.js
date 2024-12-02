;(() => {
  const { storageKey } = config
  const { type, message } = JSON.parse(localStorage.getItem(`${storageKey}.messaging.message`) ?? '{}')
  if (!message) return
  notyf[type](message)
  localStorage.removeItem(`${storageKey}.messaging.message`)
})()
