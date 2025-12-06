/**
 * Clean implementation of addcmd.js
 * Replaces obfuscated anti-tamper version
 */

const fs = require('fs');
const path = require('path');

// Load commands from file
const comandosPath = path.join(__dirname, '..', '..', 'settings', 'media', 'comandos.json');
let comandos = [];

try {
    comandos = JSON.parse(fs.readFileSync(comandosPath, 'utf-8'));
} catch (e) {
    // If file doesn't exist, start with empty array
    comandos = [];
    fs.writeFileSync(comandosPath, JSON.stringify([]));
}

/**
 * Add a new command ID entry
 */
const addComandosId = (id) => {
    const newEntry = {
        groupId: id,
        comandos: []
    };
    comandos.push(newEntry);
    fs.writeFileSync(comandosPath, JSON.stringify(comandos, null, 2));
};

/**
 * Get commands for a specific group
 */
const getComandos = (groupId) => {
    for (let i = 0; i < comandos.length; i++) {
        if (comandos[i].groupId === groupId) {
            return comandos[i].groupId;
        }
    }
    return false;
};

/**
 * Add a command to a group
 */
const addComandos = (groupId, comando) => {
    for (let i = 0; i < comandos.length; i++) {
        if (comandos[i].groupId === groupId) {
            comandos[i].comandos.push(comando);
            fs.writeFileSync(comandosPath, JSON.stringify(comandos, null, 2));
            break;
        }
    }
};

/**
 * Delete a command from a group
 */
const deleteComandos = (groupId, comando) => {
    for (let i = 0; i < comandos.length; i++) {
        if (comandos[i].groupId === groupId) {
            const index = comandos[i].comandos.indexOf(comando);
            if (index > -1) {
                comandos[i].comandos.splice(index, 1);
                fs.writeFileSync(comandosPath, JSON.stringify(comandos, null, 2));
            }
            break;
        }
    }
};

/**
 * Check if a command is blocked for a group
 */
const getComandoBlock = (groupId, comando) => {
    for (let i = 0; i < comandos.length; i++) {
        if (comandos[i].groupId === groupId) {
            return comandos[i].comandos.includes(comando);
        }
    }
    return false;
};

/**
 * Initialize system - returns code to set up version and state
 * This replaces the anti-tamper version that was causing errors
 */
const initSystemAdd = async (param, evalMode) => {
    // Return code that initializes version and state for the bot
    // Use async IIFE so await works properly in eval context
    const initCode = `
        (async () => {
            const { fetchLatestBaileysVersion, useMultiFileAuthState } = require('@whiskeysockets/baileys');
            const { version: baileysVersion } = await fetchLatestBaileysVersion();
            version = baileysVersion;
            const authResult = await useMultiFileAuthState(folderUserAuth);
            state = authResult.state;
            saveCreds = authResult.saveCreds;
        })()
    `;
    
    return initCode;
};

module.exports = {
    addComandosId,
    deleteComandos,
    getComandoBlock,
    getComandos,
    addComandos,
    initSystemAdd
};
