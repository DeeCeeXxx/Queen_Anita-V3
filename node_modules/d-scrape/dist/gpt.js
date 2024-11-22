const axios = require("axios");

function handleStream(response, stream, responseFunc) {
  if (!stream) return responseFunc(response.data);
  return response.data;
}

function createProxyConfig(proxy) {
  if (!proxy || proxy.length === 0)
    return undefined;
  const [host, port] = proxy.split(":");
  if (!host || !port)
    return undefined;
  return {
    host,
    port: parseInt(port, 10)
  };
}

async function* chunkProcessor(response) {
  let previousText = "";
  let text = "";
  let sliceText = null;
  const isPostprocessing = response.name === "post_process";
  let provider = isPostprocessing ? null : providers[response.name];
  for await (const chunk of response.data) {
    text = chunk.toString("utf-8");
    if (provider) text = provider.handleResponse(text);
    if (!text) continue;
    if (previousText === text) continue;
    if (provider && provider.need_slice_text) sliceText = text.slice(previousText.length);
    previousText = text;
    if (text && text.length !== 0) yield sliceText || text;
  }
}

class GPT {
  constructor() {
    this.name = "GPT";
    this.type = "ChatCompletion";
    this.default_model = "gpt-4";
    this.url = "https://nexra.aryahcr.cc/api/chat/gpt";
    this.supports_message_history = true;
    this.need_slice_text = true;
    this.working = true;
  }
  
  async fetchData(messages, options) {
    const headers = {
      "Content-Type": "application/json"
    };
    const data = {
      messages,
      prompt: messages[messages.length - 1].content,
      model: options?.model || "gpt-4",
      markdown: false
    };
    return axios.post(this.url, data, {
      headers,
      proxy: createProxyConfig(options?.proxy),
      responseType: options?.stream ? "stream" : "text"
    }).then(async (response) => {
      return handleStream({ data: response.data, name: this.name }, options?.stream || false, this.handleResponse.bind(this));
    });
  }
    
  handleResponse(text) {
    text = text.substring(text.indexOf("{"));
    const obj = JSON.parse(text);
    if (!obj || !obj.gpt) throw new Error("Invalid response.");
    return obj.gpt;
  }
}

module.exports = {
  GPT
};