const app = require('app')
const BrowserWindow = require('browser-window')

require('crash-reporter').start()

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  let mainWindow
  mainWindow = new BrowserWindow({ width: 1920, height: 1080, resizeable: false, frame: false, fullscreen: true })
  mainWindow.loadUrl('file://' + __dirname + '/public/index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})
