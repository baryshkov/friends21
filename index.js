require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent');
/**
 * Proxies here: https://hideip.me/ru/proxy/socks5list
 */
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {
  polling: true,
  request: {
    agentClass: Agent,
    agentOptions: {
      socksHost: process.env.PROXY_HOST,
      socksPort: process.env.PROXY_PORT,
      // socksUsername: 134,
      // socksPassword: 123
    }
  }
});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Net, Maxix loh ahahahahahaahah');
});