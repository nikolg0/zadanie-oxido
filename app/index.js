const { OpenAI } = require("openai");
const fs = require("fs");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const readArticle = () => {
  return fs.readFileSync("app/artykul.txt", "utf-8");
};

const generateHtml = async () => {
  const articleContent = readArticle();

  console.log("artykuł:", articleContent);

  if (!articleContent) {
    console.error("Can't find the article.");
    return;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant provided with content, and your task is to structure it into HTML format with using proper tags like <h1>, <h2>, <p> and add image placeholders with <img> tags with src set to 'image_placeholder.jpg.' where appropriate. Make sure that each image have an alt attribute that includes a detailed prompt for generating the image, don't forget to use <figcaption> tags for captions added under each image. Generate the content that only fits between tags <body> </body>.",
        },
        {
          role: "user",
          content: articleContent,
        },
      ],
    });

    const createdHtml = response.choices[0].message.content;

    htmlToFile(createdHtml);
  } catch (error) {
    console.error(error);
  }
};

const htmlToFile = (content) => {
  const filePath = "app/artykul.html";
  fs.writeFileSync(filePath, content, "utf-8");
  console.log("artykul.html zapisany");
};

generateHtml();

console.log("html wygenerowany");
