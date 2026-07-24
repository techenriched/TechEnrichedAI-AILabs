export interface ArenaModel {
  id: string;
  name: string;
  image: string;
  accentColor: string;
  glowClass: string;
  borderColor: string;
  barColor: string;
  metrics: {
    label: string;
    value: number;
  }[];
  description: string;
  specifications: {
    contextWindow: string;
    architecture: string;
    bestFor: string;
  };
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  icon: string;
  status: 'Completed' | 'Live' | 'Upcoming';
  description: string;
  keyBenchmarks: string[];
  winner?: string;
}

export interface QueryStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  technicalDetails?: string[];
}

export interface Episode {
  id: string;
  number: string;
  title: string;
  image: string;
  duration: string;
  description: string;
  tags: string[];
  videoUrl?: string;
  takeaways: string[];
}

export interface BattleResult {
  prompt: string;
  models: {
    name: string;
    score: number;
    summary: string;
    response: string;
    metrics: { label: string; value: number }[];
  }[];
}
