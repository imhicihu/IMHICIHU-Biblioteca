// Modules to control application life and create native browser window
const {app, Menu, BrowserWindow} = require('electron')
const path = require('path')
//to menu in MacOSX
const isMac = process.platform === 'darwin'
// Template for menu in MacOSX
const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [{
        label: app.name,
        submenu: [
          { role: 'about', label: 'Acerca' },
          { type: 'separator' },
          { role: 'services', label: 'Servicios' },
          { type: 'separator' },
          { role: 'hide', label: 'Ocultar' },
          { role: 'hideOthers', label: 'Ocultar todo' },
          { role: 'unhide', label: 'Mostrar todo' },
          { type: 'separator' },
          { role: 'quit' , label: 'Salir' }
        ]
      }]
    : []),
  // { role: 'fileMenu' }
  {
    label: 'Archivo',
    submenu: [
      isMac ? { role: 'close', label: 'Cerrar' } : { role: 'quit', label: 'Salir'}
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Editar',
    submenu: [
      { role: 'undo', label: 'Deshacer' },
      { role: 'redo', label: 'Rehacer' },
      { type: 'separator' },
      { role: 'cut', label: 'Cortar' },
      { role: 'copy', label: 'Copiar'  },
      { role: 'paste', label: 'Pegar'  },
      ...(isMac
        ? [
            //{ role: 'pasteAndMatchStyle' },
            //{ role: 'delete' },
            //{ role: 'selectAll' },
            //{ type: 'separator' },
            //{
              //label: 'Speech',
              //submenu: [
                //{ role: 'startSpeaking' },
                //{ role: 'stopSpeaking' }
              //]
            //}
          ]
        : [
            //{ role: 'delete' },
            //{ type: 'separator' },
            //{ role: 'selectAll' }
          ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'Ver',
    submenu: [
      { role: 'reload', label: 'Recargar' },
      { role: 'forceReload', label: 'Forzar recarga' },
      //{ role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom', label: 'Restablecer vista' },
      { role: 'zoomIn', label: 'Acercarse' },
      { role: 'zoomOut', label: 'Alejarse' },
      //{ type: 'separator' },
      //{ role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Ventana',
    submenu: [
      { role: 'minimize', label: 'Minimizar' },
      { role: 'zoom', label: 'Ampliar'},
      ...(isMac
        ? [
            { type: 'separator' },
            { role: 'front', label: 'Traer al frente' },
            //{ type: 'separator' },
            //{ role: 'window' }
          ]
        : [
            { role: 'close', label: 'Cerrar' }
          ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Ayuda',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://biblio-searcher.surge.sh/')
        }
      }
    ]
  }
]
// Menu in MacOSX
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 840,
    height: 880,
    minWidth: 780,
    minHeight: 580,
    maxWidth: 840,
    maxHeight: 890,
    movable: true,
    hasShadow: true,
    center: true,
    roundedCorners: true,
    fullscreen: false,
    alwaysOnTop: true,
    opacity: 1.0,
    webPreferences: {
       preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
