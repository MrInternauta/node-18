// import { app, BrowserWindow } from 'electron';
const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindow);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800
  })
  mainWindow.loadFile('index.html');
}


