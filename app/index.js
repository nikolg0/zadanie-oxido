const { OpenAI } = require("openai");
const fs = require("fs");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const readArticle = () => {
  return fs.readFileSync("article.txt", "utf-8");
};

console.log(readArticle);

console.log("hello");
