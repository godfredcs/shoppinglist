const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', () => {
    // Create new window
    mainWindow = new BrowserWindow({});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});