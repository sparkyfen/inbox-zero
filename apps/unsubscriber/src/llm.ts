import { google } from "@ai-sdk/google";
import { openai, createOpenAI } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { perplexity } from '@ai-sdk/perplexity';

type LLMProvider = "google" | "openai" | "anthropic" | "bedrock" | "perplexity";

const perplexity = (model: string): => {
  return createOpenAI({
    name: 'perplexity',
    apiKey: aiApiKey || env.OPENAI_API_KEY,
    baseURL: 'https://api.perplexity.ai/',
  })(model);
};

export function getModel(provider: LLMProvider) {
  switch (provider) {
    case "google":
      return google("gemini-1.5-flash");
    case "openai":
      return openai("gpt-4o-mini");
    case "anthropic":
      return anthropic("claude-3-5-sonnet-20241022");
    case "bedrock":
      return bedrock("anthropic.claude-3-5-sonnet-20241022-v2:0");
    case "perplexity":
      return perplexity("llama-3.1-sonar-large-128k-online");
  }
}
