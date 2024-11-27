export const Provider = {
  OPEN_AI: "openai",
  ANTHROPIC: "anthropic",
  PERPLEXITY: "perplexity",
};

export const Model = {
  GPT_4O: "gpt-4o",
  GPT_4O_MINI: "gpt-4o-mini",
  CLAUDE_3_5_SONNET_BEDROCK: "anthropic.claude-3-5-sonnet-20241022-v2:0",
  CLAUDE_3_5_SONNET_ANTHROPIC: "claude-3-5-sonnet-20241022",
  LLAMA_3_1_SONAR_SMALL_PERPLEXITY: "llama-3.1-sonar-small-128k-online", // https://docs.perplexity.ai/guides/model-cards
  LLAMA_3_1_SONAR_LARGE_PERPLEXITY: "llama-3.1-sonar-large-128k-online",
  LLAMA_3_1_SONAR_HUGE_PERPLEXITY: "llama-3.1-sonar-huge-128k-online",
};

export const providerOptions = [
  { label: "OpenAI", value: Provider.OPEN_AI },
  { label: "Anthropic", value: Provider.ANTHROPIC },
  { label: "Perplexity", value: Provider.PERPLEXITY },
];

export const modelOptions: Record<string, { label: string; value: string }[]> =
  {
    [Provider.OPEN_AI]: [
      { label: "GPT-4o", value: Model.GPT_4O },
      { label: "GPT-4o Mini", value: Model.GPT_4O_MINI },
    ],
    [Provider.ANTHROPIC]: [
      {
        label: "Claude 3.5 Sonnet",
        value: "claude-3-5-sonnet", // used in ui only. can be either anthropic or bedrock
      },
    ],
    [Provider.PERPLEXITY]: [
      { label: "Llama 3.1 Sonar Small", value: Model.LLAMA_3_1_SONAR_SMALL_PERPLEXITY },
      { label: "Llama 3.1 Sonar Large", value: Model.LLAMA_3_1_SONAR_LARGE_PERPLEXITY },
      { label: "Llama 3.1 Sonar Huge", value: Model.LLAMA_3_1_SONAR_HUGE_PERPLEXITY },
    ],
  };
