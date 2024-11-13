const { OpenAI } = require("openai");
const fs = require("fs");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const readArticle = () => {
  return fs.readFileSync("app/article.txt", "utf-8");
};

const generateHtml = async () => {
  const articleContent = readArticle();

  console.log(articleContent);

  if (!articleContent) {
    console.error("Can't find the article.")
    return;
  }

try {
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      role: "system",
      content:
        "You are a helpful assistant provided with content, and your task is to structure it into HTMLformat with using proper tags and adding image placeholders where appropriate.",
    },
    {
    "role": "user",
    "content": "Structure the given article with proper <h1>, <h2>, <p> tags and mark images with<img> tag and src="image_placeholder.jpg" attribute. Add the alt attribute",
}
  ]
})
}
};