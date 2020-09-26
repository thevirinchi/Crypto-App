const { app, BrowserWindow, Menu } = require ('electron')
const shell = require('electron').shell

function createWindow (){
    const win = new BrowserWindow({
        width: 800, height:600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.webContents.openDevTools()

    win.loadFile('src/index.html')

    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label: 'Adgust Notification Value',
                    click(){

                    }
                },
                {
                    label: 'CoinMarketCap',
                    click(){
                        shell.openExternal('https://coinmarketcap.com/')
                    }
                },
                {type: 'separator'},
                {
                    label: 'Exit',
                    click(){
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Info'
        }
    ])

    Menu.setApplicationMenu(menu)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform!=='darwin')
        app.quit()
})

app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length === 0)
        createWindow()
})