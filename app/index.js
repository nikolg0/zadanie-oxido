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
        "You are a helpful assistant provided with content, and your task is to structure it into HTMLformat with using proper tags like <h1>, <h2>, <p> and add image placeholders with <img> tags withsrc set to 'image_placeholder.jpg.'. Make sure that each image have an alt attribute thatincludes a detailed prompt for generating the image, also use <figcaption> tag for caption added undereach image.",
    },
    {
    "role": "user",
    "content": articleContent,
},
  ],
})
},
};