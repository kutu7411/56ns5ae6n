const bot = require("telegram-bot-api");

const token = "6908023086:AAEsyzkShziLxQUfgQd7wg81QoNgRIxaL0U";

const bot = new bot(token);

bot.on("message", (message) => {
  // Mesajın içeriğini yazdırın.
  console.log(message.text);
});

bot.start();