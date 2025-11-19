if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .catch(err => console.log('sw fail', err))
}
