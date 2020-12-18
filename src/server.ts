import '@config/env';
import Telegraf from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.command('oldschool', ctx => ctx.reply('Hello'));

bot.command('modern', ({ reply }) => reply('Yo'));

bot.command('hipster', Telegraf.reply('λ'));

bot.launch();
