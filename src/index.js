const remote = require('electron').remote;

function addNotif(){
    const BrowserWindow = remote.BrowserWindow;
    let win = new BrowserWindow({ width: 400, height: 200 })
    win.on('close', function(){win=null})
    win.loadFile('add.html')
    win.show()
}