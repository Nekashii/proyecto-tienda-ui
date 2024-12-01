const nameContainer = document.getElementById('nameContainer')
const logoutButton = document.getElementById('logoutButton')

const { storageKey } = config
const { firstName, lastName } = JSON.parse(localStorage.getItem(`${storageKey}.auth.user`))

if (nameContainer) nameContainer.innerText = `${firstName} ${lastName}`
if (logoutButton)
  logoutButton.onclick = () => {
    localStorage.removeItem(`${storageKey}.auth.user`)
    window.location.replace('/')
  }
