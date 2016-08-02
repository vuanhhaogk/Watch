const {app, BrowserWindow} = require('electron');

let win

function createWindow () {
    win = new BrowserWindow({
        width: 360,
        height: 480,
        frame: false,
        titleBarStyle: 'hidden'
    });

    win.loadURL(`file://${__dirname}/www/index.html`);

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
