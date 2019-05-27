'use strict'

//////////////////////// IMPORTS ////////////////////////

var electron = require('electron');
var {app, BrowserWindow} = electron;

//////////////////////// EXPORTS ////////////////////////

//////////////////////// WINDOWS ////////////////////////

var FromMeToWe = null;

// CREATE WINDOWS
app.on('ready', () => {
    FromMeToWe = new BrowserWindow({ width: 1680, height: 1050, resizable: false, frame: false, fullscreen: true });
    FromMeToWe.loadURL(`file://${__dirname}/FromMeToWe.html`);
    FromMeToWe.setMenu(null);
});