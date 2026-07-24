import { ArenaModel, RoadmapPhase, QueryStep, Episode } from '../types';

export const ARENA_MODELS: ArenaModel[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuvS8X6WhTLE65Heqbeo-jJqLyOMvJ1fBjnb3BJr0jvp2_gCoRgZ0_gjWaE0pzBVpyUyicQmjPoXYxz_Y7VT2aL4tSbsQIdPB3gsyMNy1itQEc0qEhd8mvUvWJwxgZHBpPaevQXVMuB8rp1qS9K_jWZmMoBy4QzZl45cxHTHG71CLg5SfgrlybGI5luMmPcGJsKRvGn6feGcc0oA2Ul8LCzqfXHhgNXUWzCh1l1bG0ari-BJ4jkCo2f59zc',
    accentColor: '#D1FF26',
    glowClass: 'glow-lime',
    borderColor: 'border-[#D1FF26]/40',
    barColor: 'bg-[#D1FF26]',
    metrics: [
      { label: 'REASONING', value: 94 },
      { label: 'CODING', value: 88 }
    ],
    description: 'OpenAI flagship reasoning architecture featuring chain-of-thought verification and structured code execution loops.',
    specifications: {
      contextWindow: '128K Tokens',
      architecture: 'MoE Transformer',
      bestFor: 'Complex algorithmic coding & multi-turn dialog'
    }
  },
  {
    id: 'claude',
    name: 'Claude',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLtN1I4W-behfiut9sonACHKjvcLfE_EkC-rXfgedCQCs0rWyRbLUSZ8UCUceqLOtwPIDoKkJ-pKP--7OPkIXeTfaBa8d9ylTxxfL5ArI2QzDum4ph3I2MwbzwBleob0zTm6i3autChQ2G6IewMVEbHHqJMsoE655YV12F1fp_emJ2DCH1oH9dzzbms5OLZ3GXYjXu7XkZt9ZS70hWQ73FeZhOWTSdhXOHafSM7alxQYeTqk80t7CnNf5rQ',
    accentColor: '#d0bcff',
    glowClass: 'glow-violet',
    borderColor: 'border-[#571bc1]/40',
    barColor: 'bg-[#d0bcff]',
    metrics: [
      { label: 'CREATIVITY', value: 98 },
      { label: 'LOGIC', value: 95 }
    ],
    description: 'Anthropic frontier engine designed for constitutional safety, deep analytical reasoning, and poetic prose synthesis.',
    specifications: {
      contextWindow: '200K Tokens',
      architecture: 'Constitutional Transformer',
      bestFor: 'Literary composition, artifact generation & nuance'
    }
  },
  {
    id: 'gemini',
    name: 'Gemini',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvkQboo7iJOGXwstdIkgATMIwk9VfA-_a7heCjh_-uHF4niLyG19ZlQWOu6XK5a-Bj5jyv3-bAQxRDMeqYZnHr5ct7yQ9kBZI0cV9iOHvaGmBUBkfP2_mLpBq1L2nIYSqSdOtlwDeVjM6TIF98lxd4d2RSvu5OyDAsOu7wlq0czvpfJo3zZfvZWmRHAW6oJSG3o2NotYB4x-5iuvVwIcDQFng-YYWm06QpoWTwoWoPvEpDI4nz0LZIe8W-i',
    accentColor: '#ffb95f',
    glowClass: 'glow-gold',
    borderColor: 'border-[#ffb95f]/30',
    barColor: 'bg-[#ffb95f]',
    metrics: [
      { label: 'CONTEXT WINDOW', value: 100 },
      { label: 'MULTIMODAL', value: 92 }
    ],
    description: 'Google native multimodal power engine with massive 2,000,000 token context window and real-time audio/video processing.',
    specifications: {
      contextWindow: '2.0 Million Tokens',
      architecture: 'Native Multimodal Transformer',
      bestFor: 'Long video analysis, full codebase ingests & live search'
    }
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'Phase 01',
    title: 'Memory',
    icon: 'memory',
    status: 'Completed',
    description: 'Stress-testing 1M+ token recall across haystack benchmarks and needle retrieval precision.',
    keyBenchmarks: ['NIAH 2.0 Benchmark', 'Long Context Retrieval', 'Cross-Session State Retention'],
    winner: 'Gemini 1.5 Pro'
  },
  {
    phase: 'Phase 02',
    title: 'Coding',
    icon: 'code',
    status: 'Completed',
    description: 'Live competitive code battles solving HumanEval, SWE-bench, and full-stack component creation.',
    keyBenchmarks: ['SWE-bench Verified', 'HumanEval Python', 'Full Stack Refactoring'],
    winner: 'Claude 3.5 Sonnet'
  },
  {
    phase: 'Phase 03',
    title: 'Reasoning',
    icon: 'psychology',
    status: 'Live',
    description: 'Multi-step logic puzzles, mathematical derivations, and chain-of-thought verification speed.',
    keyBenchmarks: ['GSM8K Math', 'MATH 500 Subsets', 'Formal Proof Verification']
  },
  {
    phase: 'Phase 04',
    title: 'Creativity',
    icon: 'palette',
    status: 'Upcoming',
    description: 'Cinematic script generation, world building, nuanced metaphor comprehension, and tone synthesis.',
    keyBenchmarks: ['Creative Writing Sandbox', 'Metaphor Interpretation', 'Subtext Alignment']
  },
  {
    phase: 'Phase 05',
    title: 'Vision',
    icon: 'visibility',
    status: 'Upcoming',
    description: 'High-resolution diagram parsing, OCR text extraction, chart analysis, and video frame comprehension.',
    keyBenchmarks: ['DocVQA', 'MMMU Multimodal', 'Video Sequence Reasoning']
  },
  {
    phase: 'Phase 06',
    title: 'Research',
    icon: 'search',
    status: 'Upcoming',
    description: 'Autonomous literature reviews, multi-document synthesis, and grounded citation verification.',
    keyBenchmarks: ['DeepResearch Benchmark', 'Citation Precision', 'Factuality Score']
  },
  {
    phase: 'Phase 07',
    title: 'Productivity',
    icon: 'speed',
    status: 'Upcoming',
    description: 'Latency vs quality trade-offs, tokens per second, API efficiency, and real-time tool calling.',
    keyBenchmarks: ['Tokens Per Second (TPS)', 'TTFT (Time To First Token)', 'Function Call Latency']
  },
  {
    phase: 'Phase 08',
    title: 'AI Agents',
    icon: 'smart_toy',
    status: 'Upcoming',
    description: 'Multi-agent orchestration, web browser manipulation, computer use, and autonomous goal execution.',
    keyBenchmarks: ['WebArena', 'OSWorld Computer Use', 'Multi-Agent Consensus']
  },
  {
    phase: 'Phase 09',
    title: 'Real World',
    icon: 'public',
    status: 'Upcoming',
    description: 'Deploying agents into live simulated business pipelines, customer support routing, and system ops.',
    keyBenchmarks: ['Real-world API Integration', 'Error Recovery Rate', 'Budget Constraint Adherence']
  },
  {
    phase: 'Championship',
    title: 'Final Showdown',
    icon: 'emoji_events',
    status: 'Upcoming',
    description: 'The ultimate head-to-head tournament determining the undisputed AI Champion of Season 01.',
    keyBenchmarks: ['Omni-Benchmark Matrix', 'User Vote Score', 'Grand Finale Live Battle']
  }
];

export const QUERY_STEPS: QueryStep[] = [
  {
    step: '01',
    title: 'Context Window',
    subtitle: 'Defining the canvas of attention.',
    description: 'The input query is converted into numerical tokens and projected into a multi-dimensional embedding space, initializing self-attention layers across the context canvas.',
    icon: 'crop_square',
    technicalDetails: [
      'BPE (Byte-Pair Encoding) Tokenization',
      'Positional Embeddings (RoPE / Rotary Embeddings)',
      'Attention Mask Matrix Initialization'
    ]
  },
  {
    step: '02',
    title: 'RAG Fact Retrieval',
    subtitle: 'Retrieving real-world facts.',
    description: 'Vector similarity search scans external knowledge graphs and dense embeddings to retrieve ground-truth facts and prevent factual drift.',
    icon: 'database',
    technicalDetails: [
      'HNSW Cosine Similarity Indexing',
      'Dense Passage Retrieval (DPR)',
      'Cross-Encoder Re-Ranking'
    ]
  },
  {
    step: '03',
    title: 'Hallucinations',
    subtitle: 'Mapping the edge of truth.',
    description: 'An internal sanity checker verifies probabilistic outputs against confidence bounds, pruning invalid branches before sampling.',
    icon: 'verified',
    technicalDetails: [
      'Uncertainty Quantification & Entropy Check',
      'Fact-Checking Verification Loop',
      'Branch Pruning & Logit Clipping'
    ]
  },
  {
    step: '04',
    title: 'Reasoning',
    subtitle: 'Processing logic loops.',
    description: 'The neural network executes internal Chain-of-Thought processing, evaluating intermediate steps in a hidden scratchpad before final token generation.',
    icon: 'psychology',
    technicalDetails: [
      'Tree-of-Thought (ToT) Path Search',
      'Self-Consistency Voting Matrix',
      'Latent Scratchpad Execution'
    ]
  },
  {
    step: '05',
    title: 'Final Answer',
    subtitle: 'The terminal generation.',
    description: 'Tokens are sampled sequentially using nucleus sampling (top-p/top-k), stream-formatted, and rendered as the final response to the user.',
    icon: 'terminal',
    technicalDetails: [
      'Top-P Nucleus & Temperature Sampling',
      'Streaming Token Serialization',
      'Safety Guardrail Verification'
    ]
  }
];

export const EPISODES: Episode[] = [
  {
    id: 'ep-1',
    number: 'EPISODE 01',
    title: 'The Context Window',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUrMKHYrEKZq1dRp8ObZmiKHeRONyzMXUe-do274AAcewMHd-HRZeVYCQF8JXhpq0tARcqBmwIQRCwmHuXxDJsPWKG8IqMr8lKpMBKzSfnVJ3zSeTAs39j9w0K5K5UXPsoZHB_lrdVvjN3x32d15ocl6QJfXsImIR_XoNfWRQ-6Vd2y12vLlexRCmMrmyLy41Jl8uyTRCE2LlKciHu1TJlvo_Cm35Be5fGIUiVHPiZnbSxEV-B_em1P9YXDLMBM34NALQAPs1Bz02T',
    duration: '14:20',
    description: 'Dive deep into how modern LLMs maintain long-range dependencies across 1M+ token context windows, featuring visual attention map heatmaps.',
    tags: ['Architecture', 'Attention', 'RoPE'],
    takeaways: [
      'How attention matrices scale quadratically and how FlashAttention fixes it.',
      'Rotary Positional Embeddings (RoPE) explained with 3D vector graphics.',
      'Needle-in-a-Haystack benchmark visualization step-by-step.'
    ]
  },
  {
    id: 'ep-2',
    number: 'EPISODE 02',
    title: 'RAG & Knowledge',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-_KC7b0Q1Pcz8a2u9bF-wjvrcPszgXB3J9S87V_uRRT31M5P_3vNJKDqyO3dkyoXpAYHL6MZ__xpijtrZSJg0zi2JplG_qeHGJE751TqQoKcRZ17z2lFOoW_tJyzrv6u3MYfXCdlXYaRUVM5_BcmNZuQgs66jb2vXgKME1nrm8NJ-cgoI44H9tO3pt4_yG5XM-18nYyb62utTyo0EH70fKOOjbvLtCtBDXHXI-8vpnjH2Gg-ARKvKu2Yw46pk8XtZJ7bkaXWlCT0r',
    duration: '18:45',
    description: 'Explore Retrieval-Augmented Generation: bridging parametric neural memory with non-parametric real-time vector search databases.',
    tags: ['RAG', 'VectorDB', 'Embeddings'],
    takeaways: [
      'Dense vs Sparse embeddings and vector space clustering.',
      'Chunking strategies: Semantic vs Fixed vs Hierarchical.',
      'Re-ranking models and context window compression.'
    ]
  },
  {
    id: 'ep-3',
    number: 'EPISODE 03',
    title: 'Hallucinations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUrMKHYrEKZq1dRp8ObZmiKHeRONyzMXUe-do274AAcewMHd-HRZeVYCQF8JXhpq0tARcqBmwIQRCwmHuXxDJsPWKG8IqMr8lKpMBKzSfnVJ3zSeTAs39j9w0K5K5UXPsoZHB_lrdVvjN3x32d15ocl6QJfXsImIR_XoNfWRQ-6Vd2y12vLlexRCmMrmyLy41Jl8uyTRCE2LlKciHu1TJlvo_Cm35Be5fGIUiVHPiZnbSxEV-B_em1P9YXDLMBM34NALQAPs1Bz02T',
    duration: '16:10',
    description: 'Why do neural networks hallucinate? A cinematic journey into probability distributions, logits, and temperature sampling boundaries.',
    tags: ['Hallucination', 'Logits', 'Probability'],
    takeaways: [
      'The mathematics of Next-Token Prediction and overconfidence.',
      'Entropy spikes as an indicator of neural uncertainty.',
      'Grounding techniques: Web search, code execution, and verification loops.'
    ]
  },
  {
    id: 'ep-4',
    number: 'EPISODE 04',
    title: 'The Reasoning Loop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-_KC7b0Q1Pcz8a2u9bF-wjvrcPszgXB3J9S87V_uRRT31M5P_3vNJKDqyO3dkyoXpAYHL6MZ__xpijtrZSJg0zi2JplG_qeHGJE751TqQoKcRZ17z2lFOoW_tJyzrv6u3MYfXCdlXYaRUVM5_BcmNZuQgs66jb2vXgKME1nrm8NJ-cgoI44H9tO3pt4_yG5XM-18nYyb62utTyo0EH70fKOOjbvLtCtBDXHXI-8vpnjH2Gg-ARKvKu2Yw46pk8XtZJ7bkaXWlCT0r',
    duration: '22:05',
    description: 'How frontier reasoning models think: Tree-of-Thought search, Monte Carlo Tree Search (MCTS), and self-correction tokens.',
    tags: ['Reasoning', 'Tree-of-Thought', 'RLHF'],
    takeaways: [
      'Inside OpenAI o1/o3 and Gemini Thinking models reasoning loops.',
      'MCTS and process reward models (PRM) guiding thoughts.',
      'Test-time compute scaling: trade-off between inference time and accuracy.'
    ]
  },
  {
    id: 'ep-5',
    number: 'EPISODE 05',
    title: 'The Final Answer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUrMKHYrEKZq1dRp8ObZmiKHeRONyzMXUe-do274AAcewMHd-HRZeVYCQF8JXhpq0tARcqBmwIQRCwmHuXxDJsPWKG8IqMr8lKpMBKzSfnVJ3zSeTAs39j9w0K5K5UXPsoZHB_lrdVvjN3x32d15ocl6QJfXsImIR_XoNfWRQ-6Vd2y12vLlexRCmMrmyLy41Jl8uyTRCE2LlKciHu1TJlvo_Cm35Be5fGIUiVHPiZnbSxEV-B_em1P9YXDLMBM34NALQAPs1Bz02T',
    duration: '15:50',
    description: 'From latent thought representation to human-readable streams: token de-quantization, safety filtering, and UI stream rendering.',
    tags: ['Generation', 'Streaming', 'Safety'],
    takeaways: [
      'Tokenizer decoding and character conversion mechanics.',
      'Real-time streaming protocol over Server-Sent Events (SSE).',
      'Safety guardrails and post-generation filtering.'
    ]
  }
];
