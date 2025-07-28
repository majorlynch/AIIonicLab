const baseUrl= 'https://madebyconor.com/';

export const environment = {
    production: true,
    baseUrl: baseUrl,
    apiKeyUrl: baseUrl + 's1/apikey/',
    featureFlags: {
      Gemini: true,
      Deepseek: true,
      ChatGPT: false,
      Mistral: true,
      PromptSampleText: false
    },
};
