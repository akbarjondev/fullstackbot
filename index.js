const TeleBot = require('telebot')
const fetch = require('node-fetch')
var CronJob = require('cron').CronJob

const TELEGRAM_BOT_TOKEN = '1146629877:AAGCQ3dUOONI0gRzj9c16njl8jtQVTkspnA'
const bot = new TeleBot(TELEGRAM_BOT_TOKEN)

// database
var users = []
var myId = 288096386

// start bosilsa ishga tushadi
bot.on(['/start'], (msg) => {
	
	if (!users.includes(msg.chat.id)) {
		users.push(msg.chat.id)
	}

	msg.reply.text(`Assalomu alaykum ${msg.chat.first_name} ${msg.chat.last_name}, xush kelibsiz!`)
	
})

// bot.on([])

bot.start()
