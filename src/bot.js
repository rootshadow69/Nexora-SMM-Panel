
const { Telegraf } = require("telegraf");

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN is missing");
}

const bot = new Telegraf(token);

bot.start((ctx) => {
  return ctx.reply(
    "👋 Welcome to Nexora SMM Panel!\n\nChoose an option:",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "📋 Services", callback_data: "services" }],
          [{ text: "📦 My Orders", callback_data: "orders" }],
          [{ text: "💰 Balance", callback_data: "balance" }],
          [{ text: "❓ Help", callback_data: "help" }]
        ]
      }
    }
  );
});

bot.action("services", (ctx) =>
  ctx.reply("📋 Services will be available after setup.")
);

bot.action("orders", (ctx) =>
  ctx.reply("📦 Order history is not connected yet.")
);

bot.action("balance", (ctx) =>
  ctx.reply("💰 Balance requires database setup.")
);

bot.action("help", (ctx) =>
  ctx.reply("❓ Contact the panel administrator for help.")
);

bot.command("help", (ctx) =>
  ctx.reply("Welcome to Nexora SMM Panel support.")
);

bot.launch()
  .then(() => console.log("Nexora bot started"))
  .catch((err) => console.error("Bot failed to start:", err.message));
