/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { app, BrowserWindow } from 'electron';

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    icon: `${__dirname}/flow-icon.ico`,
  });
  mainWindow.setMenuBarVisibility(false);

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

