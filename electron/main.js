// electron/main.js
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true, // 自动隐藏菜单栏
    frame: true, // 边框窗口
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 隔离vite和Electron之间的状态
      nodeIntegration: true, // 使用页面中可以引入node和electron相关的API
      contextIsolation: false, // 是否在独立 JavaScript 环境中运行 Electron API和指定的preload 脚本
    },
    icon: path.join(__dirname, '../favicon.ico'),
  })

  // 主窗体要加载的url
  mainWindow.loadURL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  )
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
