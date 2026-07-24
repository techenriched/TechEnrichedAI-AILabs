import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const getGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "TECHENRICHED.AI" });
});

// Journey of a Query AI API
app.post("/api/query/journey", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Query prompt is required" });
    }

    const ai = getGenAI();
    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not set yet
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
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    res.json({ query, ...parsed });
  } catch (error: any) {
    console.error("Error in journey endpoint:", error);
    res.status(500).json({ error: error.message || "Failed to process query journey" });
  }
});

// Battle Arena AI Simulator
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
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    res.json({ prompt, ...parsed });
  } catch (error: any) {
    console.error("Error in arena endpoint:", error);
    res.status(500).json({ error: error.message || "Failed to run battle arena" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TECHENRICHED.AI Server running on http://localhost:${PORT}`);
  });
}

startServer();
