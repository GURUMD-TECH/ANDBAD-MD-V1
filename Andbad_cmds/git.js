const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "sc", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *AVAILABLE REPO AND GROUPS* 
╭─────────────────
│❒⁠⁠⁠⁠╭─────────────
│❒⁠⁠⁠⁠│▸ *CHANNEL* 
│❒⁠⁠⁠⁠│▸ *GROUP* 
│❒⁠⁠⁠⁠│▸ *REPO*
│❒⁠⁠⁠⁠╰──────────────
│❒⁠⁠⁠⁠│▸ *CHANNEL* :  https://whatsapp.com/channel/0029VajQn6YF1YlPE0XgBC2m
│❒⁠⁠⁠⁠│▸ *GROUP* : https://chat.whatsapp.com/DU79JfdnOI83ZFVAyD74Mo
│❒⁠⁠⁠⁠│▸ *REPO* : https://github.com/Mrandbad/ANDBAD-MD-V1
│❒⁠⁠⁠⁠│▸ *YTUBE* : https://www.youtube.com/@andbadtz
│❒⁠⁠⁠⁠╰──────────────
╰──────────────────\n─
  `;
    
let menuMsg = `
     > ANDBAD BOTS TEAM

❒────────────────────❒`;
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
    },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: mediaURL}}, { upload: XliconBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
