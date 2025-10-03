import fetch from "node-fetch";
import { writeFileSync } from "fs";

export default class ImageFX {
  constructor({ token }) {
    if (!token) throw new Error("Token de autenticação obrigatório");
    this.token = token;
    this.baseURL = "https://aisandbox-pa.googleapis.com/v1";
  }

  async generateImage({ prompt, count = 1, seed = null }) {
    const requestBody = {
      prompt: prompt,
      numImagesRequested: count,
      clientContext: {
        tool: "IMAGEFX",
        sessionId: Date.now().toString()
      }
    };

    if (seed) {
      requestBody.seed = seed;
    }

    try {
      const response = await fetch(`${this.baseURL}/imagefx:generateImages`, {
        method: "POST",
        headers: {
          "Content
