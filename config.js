//=============『 Utama 』================== //
global.owner = ['6285730118420'] 
global.mods = ['6285731140418'] 
global.prems = ['6285731140418'] 

//=============『 Info Owner 』============== //
global.nameowner = 'Mirzz Ganss'
global.numberowner = '6285730118420'
global.instagram = 'https://instagram.com/tamapes_store?igshid=YmMyMTA2M2Y='
global.github = ''
global.dana = '6285730118420'
global.pulsa = '6285730118420'
global.gopay = '6285730118420'

//=============『 Info Bot 』=================//
global.namebot = 'MirzzBot-Md'
global.gc = 'https://chat.whatsapp.com/HeYYlEBZAc5IRais6QbCU3'
global.web = 'https://www.helgastoree.xyz' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '1 bulan = 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/8c471d45b6cedad43cf84.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = 'Mirzz Beta'
global.watermark = wm
global.wm2 = '                     「 Mirzz Beta あ⁩ 」'
global.wm3 = '⫹⫺ Mirzz Beta'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://telegra.ph/file/72168c6f1aaa90315c369.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = '2022'
global.author = '© Mirzz-Md'

//=============『 Apikey 』================== //
global.APIs = {'https://api.xteam.xyz' // API Prefix
  // name: 'https://website'

}
global.APIKeys = {'https://api.lolhuman.xyz': 'Deffbotz' // APIKey Here
  // 'https://website': 'apikey'
  
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
