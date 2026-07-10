import { initBotId } from "botid/client/core";

// Protege el endpoint del chat contra bots (Vercel BotID).
initBotId({
  protect: [{ path: "/api/chat", method: "POST" }],
});
