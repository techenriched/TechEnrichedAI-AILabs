var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var getGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new import_genai.GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
};
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "TECHENRICHED.AI" });
});
app.post("/api/query/journey", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Query prompt is required" });
    }
    const ai = getGenAI();
    if (!ai) {
      return res.json({
        query,
        steps: [
          { step: "01", title: "Context Window", desc: `Tokenizing input query: "${query}" across 2,000,000 token canvas.` },
          { step: "02", title: "RAG Fact Retrieval", desc: "Querying dense vector database for real-time grounded facts." },
          { step: "03", title: "Hallucination Safeguard", desc: "Cross-verifying neural weights against verified knowledge graphs." },
          { step: "04", title: "Reasoning Loop", desc: "Executing multi-turn tree-of-thought logic steps." },
          { step: "05", title: "Final Output Generation", desc: `Generating synthesized response for "${query}".` }
        ]
      });
    }
    const prompt = `Analyze this user query for an AI neural network journey breakdown: "${query}".
Return JSON with key "steps" which is an array of 5 objects:
Each object has:
- "step": "01", "02", "03", "04", "05"
- "title": ("Context Window", "RAG", "Hallucinations", "Reasoning", "Final Answer")
- "desc": precise technical short description of what happens at this stage for the query "${query}"
- "details": 2-3 bullet points or technical breakdown of tokens, facts, or reasoning.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    res.json({ query, ...parsed });
  } catch (error) {
    console.error("Error in journey endpoint:", error);
    res.status(500).json({ error: error.message || "Failed to process query journey" });
  }
});
app.post("/api/arena/battle", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const ai = getGenAI();
    if (!ai) {
      return res.json({
        prompt,
        models: [
          { name: "ChatGPT", score: 94, response: `Deep reasoning output for: ${prompt}`, reasoningScore: 94, codingScore: 88 },
          { name: "Claude", score: 96, response: `Nuanced creative synthesis for: ${prompt}`, creativityScore: 98, logicScore: 95 },
          { name: "Gemini", score: 99, response: `Multimodal context-grounded response for: ${prompt}`, contextScore: 100, multimodalScore: 96 }
        ]
      });
    }
    const systemInstruction = `You are the judge of the AI Battle Arena evaluating ChatGPT, Claude, and Gemini on a user prompt.
Return JSON with key "models" which is an array of 3 objects for ChatGPT, Claude, Gemini.
Each object must contain:
- "name": string ("ChatGPT", "Claude", "Gemini")
- "score": number (80-100)
- "summary": short evaluation of performance on this prompt
- "response": sample response or solution for this prompt from this model's perspective
- "metrics": array of { "label": string, "value": number } (e.g. Reasoning: 94, Logic: 95, etc.)`;
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json"
      }
    });
    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    res.json({ prompt, ...parsed });
  } catch (error) {
    console.error("Error in arena endpoint:", error);
    res.status(500).json({ error: error.message || "Failed to run battle arena" });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TECHENRICHED.AI Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
